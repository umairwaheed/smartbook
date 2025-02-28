import time
from datetime import datetime

import stanza
from django.core.management.base import BaseCommand

from books.models import BookAnalysis


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

                analysis.characters = {"processed_sentences": num_read}

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
