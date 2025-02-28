import re
import time
from datetime import timezone

from django.core.management.base import BaseCommand

from books.models import BookAnalysis


class Command(BaseCommand):
    help = "Processes book analysis in chunks of 50 sentences at a time."

    def handle(self, *args, **kwargs):
        while True:
            # Fetch books that are not 100% complete
            books_to_analyze = BookAnalysis.objects.filter(percent_complete__lt=100)

            if not books_to_analyze.exists():
                self.stdout.write(
                    self.style.WARNING("No books to analyze. Sleeping for 1 second...")
                )
                time.sleep(1)
                continue  # Go back to the start of the loop

            for analysis in books_to_analyze:
                book = analysis.book
                text = book.text if book.text else ""  # Get the book text

                # Split text into sentences (basic approach using regex)
                sentences = re.split(r"(?<=[.!?])\s+", text)

                # Check if we have more sentences to read
                if analysis.last_read_index >= len(sentences):
                    analysis.percent_complete = 100
                    analysis.analysis_completed_at = timezone.now()
                    analysis.save()
                    self.stdout.write(
                        self.style.SUCCESS(f"Completed analysis for book: {book.title}")
                    )
                    continue

                # Get the next 50 sentences
                next_batch = sentences[
                    analysis.last_read_index : analysis.last_read_index  # noqa: E203
                    + 50
                ]
                num_read = len(next_batch)

                # Run your actual analysis logic here (e.g., extract
                # characters, themes, etc.) For now, we'll just store some
                # dummy processed data
                analysis.characters = {"processed_sentences": num_read}

                # Update last_read_index and progress
                analysis.last_read_index += num_read
                analysis.percent_complete = min(
                    100, int((analysis.last_read_index / len(sentences)) * 100)
                )

                # Save progress
                analysis.save()

                self.stdout.write(
                    self.style.SUCCESS(
                        f"Processed {num_read} sentences for '{book.title}'. "
                        f"Progress: {analysis.percent_complete}%"
                    )
                )
