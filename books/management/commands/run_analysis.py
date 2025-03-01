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
    system_content = """
        You are an expert literary analyst specializing in character
        development. Your task is to analyze a book, one chunk at a time, and
        update the existing character data based on new information.

        # Task Requirements
        For each chunk of text provided, perform the following tasks:
        - Extract Characters: Identify all characters mentioned in the chunk,
          adding new ones if they appear.
        - Update Character Arc: Modify the character's arc based on new events,
          ensuring continuity with previously stored data.
        - Personality Analysis: Assess each character’s personality traits
          based on their actions, dialogue, and descriptions.
        - Strengths & Weaknesses: List specific strengths and weaknesses
          exhibited in the chunk.
        - Update Character Data: Modify or expand on the existing character
          data using the latest information.

        Example character data:
        {
            "Alice": {
                "strengths": ["kind", "intelligent"],
                "weaknesses": ["naive"],
                "personality": "ENFJ"
                "arc": "Alice meets Bob and goes to wonderland."
            },
        }

        # Output Format
        - Provide the updated character data in JSON format.
        - Do not wrap the JSON object in a code block (```).
        - Maintain a structured and concise format while ensuring all necessary
          updates are included.
    """

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
    help = "Analyse books using LLM"

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
                document = nlp(analysis.book.text or "")
                sentences = [x.text for x in document.sentences]

                if analysis.last_read_index >= len(sentences):
                    analysis.percent_complete = 100
                    analysis.analysis_completed_at = datetime.utcnow()
                    analysis.save()
                    self.stdout.write(
                        self.style.SUCCESS(
                            f"Completed analysis for book: {analysis.book.title}"
                        )
                    )
                    continue

                batch = sentences[
                    analysis.last_read_index : analysis.last_read_index  # noqa: E203
                    + 200
                ]

                analysis.characters = analysis.characters or {}
                analysis.characters.update(
                    analyze_chunk(" ".join(batch), analysis.characters)
                )

                batch_size = len(batch)
                analysis.last_read_index += batch_size
                analysis.percent_complete = min(
                    100, int((analysis.last_read_index / len(sentences)) * 100)
                )

                analysis.save()

                self.stdout.write(
                    self.style.SUCCESS(
                        f"Processed {batch_size} sentences for '{analysis.book.title}'."
                        f"Progress: {analysis.percent_complete}%"
                    )
                )
