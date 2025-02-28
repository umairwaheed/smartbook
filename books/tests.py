import json
from unittest.mock import AsyncMock, patch

import httpx
import pytest
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient, APITestCase

from books.models import Book, BookAnalysis, UserBookAccess
from users.models import User


class BookAPITestCase(TestCase):
    """Test case for the Book API endpoint."""

    def setUp(self):
        """Set up test data before each test."""
        self.client = APIClient()

        self.user = User.objects.create_user(username="testuser", password="testpass")

        self.book1 = Book.objects.create(
            gutenberg_id=123,
            title="Test Book 1",
            author="Author 1",
            language="en",
            download_url="http://example.com/book1",
            text="Sample text for book 1",
        )

    def test_get_books_list(self):
        """Test the GET request for listing books."""
        self.client.force_login(self.user)
        response = self.client.get("/api/books/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["title"], "Test Book 1")

    def test_unauthenticated_access(self):
        """Test API access for unauthenticated users."""
        response = self.client.get("/api/books/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class FetchBookAPITestCase(APITestCase):
    """
    Test case for the asynchronous API that fetches books from Project Gutenberg.
    """

    @classmethod
    def setUpTestData(cls):
        """Set up initial test data (runs once for all test cases)."""
        cls.book_id = 1234
        cls.gutenberg_content_url = (
            f"https://www.gutenberg.org/cache/epub/{cls.book_id}/pg{cls.book_id}.txt"
        )
        cls.gutenberg_metadata_url = f"https://www.gutenberg.org/ebooks/{cls.book_id}"

        cls.mock_book_content = "This is a sample book text from Project Gutenberg."
        cls.mock_metadata_html = """
        <html>
            <head><title>Sample Book</title></head>
            <body>
                <table>
                    <tr><th>Title</th><td>Sample Book Title</td></tr>
                    <tr><th>Author</th><td>Sample Author</td></tr>
                </table>
            </body>
        </html>
        """
        cls.user = User.objects.create_user(username="testuser", password="password123")

    @pytest.mark.asyncio
    @patch("httpx.AsyncClient.get")
    async def test_fetch_book_api(self, mock_get):
        """
        Tests fetching book content and metadata from Project Gutenberg asynchronously.
        """

        mock_get.side_effect = [
            AsyncMock(status_code=200, text=self.mock_book_content),
            AsyncMock(status_code=200, text=self.mock_metadata_html),
        ]

        await self.async_client.aforce_login(self.user)
        self.assertFalse(await Book.objects.filter(gutenberg_id=self.book_id).aexists())
        self.assertFalse(
            await UserBookAccess.objects.filter(
                user=self.user, book__gutenberg_id=self.book_id
            ).aexists()
        )

        response = await self.async_client.post(
            "/api/fetch-book/",
            data=json.dumps({"book_id": self.book_id}),
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 201)

        response_json = response.json()
        self.assertEqual(response_json["message"], "Book fetched successfully")
        self.assertEqual(response_json["book"]["gutenberg_id"], self.book_id)
        self.assertEqual(response_json["book"]["title"], "Sample Book Title")
        self.assertEqual(response_json["book"]["author"], "Sample Author")
        self.assertEqual(response_json["book"]["text"], self.mock_book_content)

        mock_get.assert_any_call(self.gutenberg_content_url)
        mock_get.assert_any_call(self.gutenberg_metadata_url)
        self.assertEqual(mock_get.call_count, 2)

        self.assertTrue(await Book.objects.filter(gutenberg_id=self.book_id).aexists())
        self.assertTrue(
            await UserBookAccess.objects.filter(
                user=self.user, book__gutenberg_id=self.book_id
            ).aexists()
        )

    async def test_fetch_book_api_without_authentication(self):
        """
        Tests fetching book content without authentication.
        """

        # Make the API request
        response = await self.async_client.post(
            "/api/fetch-book/",
            data=json.dumps({"book_id": self.book_id}),
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 403)


@pytest.mark.asyncio
class FetchBookFailureTestCase(APITestCase):
    """
    Test ensuring failures in `fetch_gutenberg_book` are correctly handled.
    """

    @classmethod
    def setUpTestData(cls):
        """Set up initial test data (runs once for all test cases)."""
        cls.book_id = 1234
        cls.user = User.objects.create_user(username="testuser", password="password123")

    @patch("httpx.AsyncClient.get")
    async def test_fetch_book_content_failure(self, mock_get):
        """
        Ensure API returns 500 if `fetch_gutenberg_book` fails.
        """
        mock_get.side_effect = [
            AsyncMock(status_code=404, text="Not Found"),
            AsyncMock(
                status_code=200,
                text="<html><h1>Sample Title</h1><a rel='marcrel:aut'>Sample Author</a></html>",  # noqa
            ),
        ]

        await self.async_client.aforce_login(self.user)
        response = await self.async_client.post(
            "/api/fetch-book/",
            data=json.dumps({"book_id": self.book_id}),
            content_type="application/json",
        )

        assert response.status_code == 400
        assert response.json() == {"error": "Book not found on Project Gutenberg"}

    @patch("httpx.AsyncClient.get")
    async def test_fetch_book_http_timeout(self, mock_get):
        """
        Ensure API returns 500 if the HTTP request times out in `fetch_gutenberg_book`.
        """
        mock_get.side_effect = httpx.TimeoutException("Request timed out")

        await self.async_client.aforce_login(self.user)
        response = await self.async_client.post(
            "/api/fetch-book/",
            data=json.dumps({"book_id": self.book_id}),
            content_type="application/json",
        )

        assert response.status_code == 500
        assert "Failed to fetch book" in response.json()["error"]


class UserBooksViewSetTestCase(APITestCase):
    def setUp(self):
        """Set up test users and books."""
        # Create test users
        self.user = User.objects.create_user(
            username="testuser", password="testpassword"
        )
        self.other_user = User.objects.create_user(
            username="otheruser", password="otherpassword"
        )

        # Create books
        self.book1 = Book.objects.create(
            gutenberg_id=1, title="Book One", download_url="http://example.com/book1"
        )
        self.book2 = Book.objects.create(
            gutenberg_id=2, title="Book Two", download_url="http://example.com/book2"
        )
        self.book3 = Book.objects.create(
            gutenberg_id=3, title="Book Three", download_url="http://example.com/book3"
        )

        # Grant access to books for self.user
        UserBookAccess.objects.create(user=self.user, book=self.book1)
        UserBookAccess.objects.create(user=self.user, book=self.book2)

        # Grant access to a different book for other_user
        UserBookAccess.objects.create(user=self.other_user, book=self.book3)

        # Authenticate test user
        self.client.login(username="testuser", password="testpassword")

    def test_list_user_accessed_books(self):
        """Test retrieving books accessed by the authenticated user."""
        response = self.client.get("/api/user-books/")  # Adjust endpoint as needed

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            len(response.data), 2
        )  # Should only return books accessed by self.user

        book_titles = {book["title"] for book in response.data}
        self.assertIn("Book One", book_titles)
        self.assertIn("Book Two", book_titles)
        self.assertNotIn("Book Three", book_titles)  # This book belongs to another user

    def test_unauthenticated_access(self):
        """Test that an unauthenticated user cannot access the endpoint."""
        self.client.logout()
        response = self.client.get("/api/user-books/")

        self.assertEqual(
            response.status_code, status.HTTP_403_FORBIDDEN
        )  # Authentication required


class BookAnalysisAPITestCase(APITestCase):
    def setUp(self):
        # Create a user
        self.user = User.objects.create_user(
            username="testuser", password="testpassword"
        )

        # Create a book
        self.book = Book.objects.create(gutenberg_id=123, title="Test Book")

        # Create an analysis object for the book
        self.analysis = BookAnalysis.objects.create(
            book=self.book,
            characters={"main": "Alice", "sidekick": "Bob"},
            percent_complete=50,
        )

        self.analysis_url = f"/api/books/{self.book.id}/analysis/"

        # Authenticate user
        self.client.force_authenticate(user=self.user)

    def test_get_book_analysis_success(self):
        """Test retrieving the analysis object of a book successfully."""
        response = self.client.get(self.analysis_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.data["characters"], {"main": "Alice", "sidekick": "Bob"}
        )
        self.assertEqual(response.data["percent_complete"], 50)

    def test_get_book_analysis_not_found(self):
        """
        Test retrieving analysis for a book that has no analysis (should
        return 404).
        """
        new_book = Book.objects.create(
            gutenberg_id=456, title="New Book Without Analysis"
        )
        new_analysis_url = f"/api/books/{new_book.id}/analysis/"

        response = self.client.get(new_analysis_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["error"], "Analysis not found for this book.")
