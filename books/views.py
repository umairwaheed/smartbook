from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from books.models import Book
from books.serializers import BookSerializer
from books.utils import fetch_gutenberg_book


class BookListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)


class FetchBookAsyncAPIView(APIView):
    """
    Asynchronously fetches a book from Project Gutenberg by ID and saves it.
    """

    async def post(self, request):
        book_id = request.data.get("book_id")
        if not book_id:
            return Response(
                {"error": "Book ID is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        book, created = await fetch_gutenberg_book(int(book_id))
        if not book:
            return Response(
                {"error": "Failed to fetch book"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        return Response(
            {
                "message": "Book fetched successfully",
                "book": BookSerializer(book).data,
                "created": created,
            },
            status=status.HTTP_201_CREATED if created else status.HTTP_200_OK,
        )
