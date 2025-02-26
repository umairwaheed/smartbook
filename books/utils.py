import logging

import httpx
from asgiref.sync import sync_to_async
from bs4 import BeautifulSoup

from books.models import Book


async def fetch_gutenberg_book(book_id: int):
    """
    Asynchronously fetches book content and metadata from Project Gutenberg and
    saves it to the database.
    """
    content_url = f"https://www.gutenberg.org/files/{book_id}/{book_id}-0.txt"
    metadata_url = f"https://www.gutenberg.org/ebooks/{book_id}"

    async with httpx.AsyncClient(timeout=10) as client:
        try:
            # Fetch book content asynchronously
            content_response = await client.get(content_url)
            if content_response.status_code != 200:
                raise Exception(f"Failed to fetch book content for ID {book_id}")

            # Fetch metadata asynchronously
            metadata_response = await client.get(metadata_url)
            if metadata_response.status_code != 200:
                raise Exception(f"Failed to fetch metadata for ID {book_id}")

            soup = BeautifulSoup(metadata_response.text, "html.parser")
            title = (
                soup.find("h1", class_="header").text.strip()
                if soup.find("h1", class_="header")
                else f"Gutenberg Book {book_id}"
            )
            author_tag = soup.find("a", rel="marcrel:aut")
            author = author_tag.text.strip() if author_tag else "Unknown Author"

            book, created = await sync_to_async(Book.objects.get_or_create)(
                gutenberg_id=book_id,
                defaults={
                    "title": title,
                    "author": author,
                    "download_url": content_url,
                    "text": content_response.text,
                },
            )

            return book, created

        except Exception as e:
            logging.error(f"Failed to fetch book with ID {book_id}: {e}")
            return None, False
