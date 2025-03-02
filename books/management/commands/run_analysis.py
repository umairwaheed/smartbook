import json
import logging
import os
import time
from datetime import datetime

import openai
import stanza
from django.core.management.base import BaseCommand
from dotenv import load_dotenv

from books.models import BookAnalysis, LanguageMap

load_dotenv()

client = openai.Client()
client.api_key = os.getenv("OPENAI_API_KEY")
tokenizer_cache = {}


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

        # JSON Structure and Formatting Rules
        - Always use the same JSON format for every response.
        - The output must be a flat JSON object where character names are the
          top-level keys.
        - DO NOT include a "characters" wrapper object.
        - Character names must be non-empty strings—if no valid characters are
          found, return an empty JSON ({}) instead of including an empty key.
        - Include all fields, even if some values are empty ([] or "").
        - Ensure proper JSON syntax (e.g., include commas, avoid trailing
          commas, and use consistent quotation marks).
        - Maintain the exact field structure as shown in the example.
        - Do not include example characters in the response. The JSON should
          only contain characters found in the provided chunk.

        # Example JSON Output
        {
            "Alice": {
                "strengths": ["kind", "intelligent"],
                "weaknesses": ["naive"],
                "personality": "ENFJ",
                "arc": "Alice meets Bob and goes to Wonderland."
            },
            "Bob": {
                "strengths": [],
                "weaknesses": [],
                "personality": "",
                "arc": ""
            }
        }

        # Output Format
        - Provide the output in strict JSON format following the structure
          above.
        - Do not wrap the JSON in a code block (```).
        - Ensure field consistency: Every character must have "strengths",
          "weaknesses", "personality", and "arc", even if empty.
        - Use an empty list ([]) for missing strengths/weaknesses and an empty
          string ("") for missing text fields.
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
    except json.JSONDecodeError as e:
        logging.error(
            f"Failed to parse JSON: {completion.choices[0].message.content}: {e}"
        )
        return {}


def get_next_batch(analysis, tokenizer, batch_size=150) -> str:
    """Retrieve the next batch of sentences."""
    book_text = analysis.book.text or ""

    start_index = analysis.last_read_index
    end_index = min(start_index + 5000, len(book_text))

    document = tokenizer(book_text[start_index:end_index])

    sentences = [x.text for x in document.sentences]
    return " ".join(sentences[:batch_size])


def process_batch(analysis, batch):
    """Process a batch of sentences, update character analysis, and save progress."""
    if not batch:
        analysis.percent_complete = 100
        analysis.analysis_completed_at = datetime.utcnow()
        analysis.save()
        return

    analysis.characters = analysis.characters or {}

    updated_characters = analyze_chunk(batch, analysis.characters)
    analysis.characters.update(updated_characters)

    # Update progress
    analysis.last_read_index += len(batch)
    analysis.percent_complete = min(
        100, int((analysis.last_read_index / len(analysis.book.text)) * 100)
    )

    analysis.save()


def get_tokenizer(language):
    if language in tokenizer_cache:
        return tokenizer_cache[language]

    stanza.download(language)
    tokenizer = stanza.Pipeline(lang=language, processors="tokenize")
    tokenizer_cache[language] = tokenizer
    return tokenizer


class Command(BaseCommand):
    help = "Analyze books using LLM"

    def handle(self, *args, **kwargs):

        while True:
            books_to_analyze = BookAnalysis.objects.filter(percent_complete__lt=100)

            if not books_to_analyze.exists():
                self.stdout.write(
                    self.style.WARNING("No books to analyze. Sleeping for 1 second...")
                )
                time.sleep(1)
                continue

            for analysis in books_to_analyze:
                try:
                    model = LanguageMap.objects.filter(
                        language=analysis.book.language
                    ).get()
                except LanguageMap.DoesNotExist:
                    logging.warning(
                        f"Language {analysis.book.language} not supported for analysis. Update language map."  # noqa
                    )
                    time.sleep(1)
                    continue

                tokenizer = get_tokenizer(model.model_name)

                batch = get_next_batch(analysis, tokenizer)
                process_batch(analysis, batch)

                self.stdout.write(
                    self.style.SUCCESS(
                        f"Processed {len(batch)} characters for {analysis.book.title}. "
                        f"Progress: {analysis.percent_complete}%"
                    )
                )
