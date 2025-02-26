import json
from unittest.mock import AsyncMock, patch

import httpx
import pytest
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient, APITestCase

from books.models import Book
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
            f"https://www.gutenberg.org/files/{cls.book_id}/{cls.book_id}-0.txt"
        )
        cls.gutenberg_metadata_url = f"https://www.gutenberg.org/ebooks/{cls.book_id}"

        cls.mock_book_content = "This is a sample book text from Project Gutenberg."
        cls.mock_metadata_html = """
        <html>
            <head><title>Sample Book</title></head>
            <body>
                <h1 class="header">Sample Book Title</h1>
                <a rel="marcrel:aut">Sample Author</a>
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

        assert response.status_code == 500
        assert response.json() == {"error": "Failed to fetch book"}

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
