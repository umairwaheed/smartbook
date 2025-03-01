import json
import logging
import os
import time
from datetime import datetime

import openai
import stanza
from django.core.management.base import BaseCommand
from dotenv import load_dotenv

from books.models import BookAnalysis

load_dotenv()

client = openai.Client()
client.api_key = os.getenv("OPENAI_API_KEY")


def analyze_chunk(chunk, characters):
    system_content = "\n".join(
        [
            "<reasoning>",
            "- Simple Change: yes",
            "</reasoning>",
            "",
            "You are an expert at analyzing books. "
            "You need to extract characters from a "
            "given book excerpt, conduct a personality "
            "analysis of each character, and list their "
            "strengths and weaknesses. You will be given "
            "an excerpt from a book along with current "
            "data on characters.",
            "" "# Output Format",
            "Provide your response in JSON format.",
            "Do not wrap the JSON object in a code block (```)",
        ]
    )
    user_content = (
        f"\n\n\nchunk:\n{chunk}"
        f"\n\n\ncharacters:\n{json.dumps(characters, sort_keys=True, indent=2)}"
    )
    completion = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": system_content,
            },
            {
                "role": "user",
                "content": user_content,
            },
        ],
    )
    try:
        return json.loads(completion.choices[0].message.content)
    except json.JSONDecodeError:
        logging.error(f"Failed to parse JSON: {completion.choices[0].message.content}")
        return {}


class Command(BaseCommand):
    help = "Processes book analysis in chunks of 50 sentences at a time."

    def handle(self, *args, **kwargs):
        stanza.download("en")
        nlp = stanza.Pipeline(lang="en", processors="tokenize")

        while True:
            books_to_analyze = BookAnalysis.objects.filter(percent_complete__lt=100)

            if not books_to_analyze.exists():
                self.stdout.write(
                    self.style.WARNING("No books to analyze. Sleeping for 1 second...")
                )
                time.sleep(1)
                continue

            for analysis in books_to_analyze:
                book = analysis.book
                text = book.text if book.text else ""
                doc = nlp(text)

                sentences = [x.text for x in doc.sentences]

                if analysis.last_read_index >= len(sentences):
                    analysis.percent_complete = 100
                    analysis.analysis_completed_at = datetime.now()
                    analysis.save()
                    self.stdout.write(
                        self.style.SUCCESS(f"Completed analysis for book: {book.title}")
                    )
                    continue

                next_batch = sentences[
                    analysis.last_read_index : analysis.last_read_index  # noqa: E203
                    + 200
                ]
                num_read = len(next_batch)

                analysis.characters = analysis.characters or {}
                analysis.characters.update(
                    analyze_chunk(" ".join(next_batch), analysis.characters)
                )
                analysis.last_read_index += num_read
                analysis.percent_complete = min(
                    100, int((analysis.last_read_index / len(sentences)) * 100)
                )

                analysis.save()

                self.stdout.write(
                    self.style.SUCCESS(
                        f"Processed {num_read} sentences for '{book.title}'. "
                        f"Progress: {analysis.percent_complete}%"
                    )
                )
