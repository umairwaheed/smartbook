import logging

import httpx
from asgiref.sync import sync_to_async
from bs4 import BeautifulSoup
from django.db import transaction

from books.models import Book, UserBookAccess
from users.models import User


class NotFoundException(Exception):
    """Exception raised when a book is not found on Project Gutenberg."""

    pass


def extract_info(soup, label):
    """Extracts metadata from the Gutenberg page."""
    try:
        element = soup.find("th", string=label)
        if element:
            data_td = element.find_next_sibling("td")
            if data_td:
                return data_td.get_text(strip=True) or ""
    except Exception as e:
        logging.warning(f"Metadata extraction failed for {label}: {e}")
    return ""


async def fetch_gutenberg_book(book_id: int, user: User) -> tuple[Book, bool]:
    """
    Asynchronously fetches book content and metadata from Project Gutenberg.
    """
    content_url = f"https://www.gutenberg.org/cache/epub/{book_id}/pg{book_id}.txt"
    metadata_url = f"https://www.gutenberg.org/ebooks/{book_id}"

    async with httpx.AsyncClient(timeout=10) as client:
        try:
            # Check if book already exists in DB
            book = await Book.objects.filter(gutenberg_id=book_id).afirst()
            if book:
                await UserBookAccess.objects.aget_or_create(user=user, book=book)
                return book, False

            content_response = await client.get(content_url)
            if content_response.status_code == 404:
                raise NotFoundException(
                    f"Book {book_id} not found on Project Gutenberg"
                )

            metadata_response = await client.get(metadata_url)
            if metadata_response.status_code == 404:
                raise NotFoundException(f"Metadata for book {book_id} not found")

            soup = BeautifulSoup(metadata_response.text, "html.parser")

            title = extract_info(soup, "Title")
            author = extract_info(soup, "Author")
            language = extract_info(soup, "Language")
            category = extract_info(soup, "Category")

            summary = "No summary available"
            summary_element = soup.find("th", string="Summary")
            if summary_element:
                summary_td = summary_element.find_next_sibling("td")
                if summary_td:
                    summary = summary_td.get_text(" ", strip=True)

            book = Book(
                gutenberg_id=book_id,
                title=title,
                author=author,
                language=language,
                category=category,
                download_url=content_url,
                text=content_response.text,
                summary=summary,
            )
            # Book is not saved yet. Call save_book_access will save it.
            book = await sync_to_async(save_book_access)(book, user)
            return book, True

        except NotFoundException as nf_err:
            logging.warning(f"NotFoundException: {nf_err}")
            raise

        except httpx.HTTPStatusError as http_err:
            logging.error(f"HTTP error while fetching book {book_id}: {http_err}")

        except httpx.RequestError as net_err:
            logging.error(f"Network error while fetching book {book_id}: {net_err}")

        except Exception as e:
            logging.error(f"Unexpected error fetching book {book_id}: {e}")

    return None, False


def save_book_access(book: Book, user: User) -> Book:
    with transaction.atomic():
        book.save()
        UserBookAccess.objects.create(user=user, book=book)
        return book
