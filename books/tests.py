from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

from users.models import User

from .models import Book


class BookAPITestCase(TestCase):
    """Test case for the Book API endpoint."""

    def setUp(self):
        """Set up test data before each test."""
        self.client = APIClient()

        # Create a test user
        self.user = User.objects.create_user(username="testuser", password="testpass")

        # Create sample books
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
