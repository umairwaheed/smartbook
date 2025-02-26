import json

from asgiref.sync import sync_to_async
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.views import View
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


class FetchBookAsyncAPIView(LoginRequiredMixin, View):
    """
    Asynchronously fetches a book from Project Gutenberg by ID and saves it.
    """

    raise_exception = True  # do not redirect to login page

    async def post(self, request):
        try:
            data = await sync_to_async(request.body.decode)(
                "utf-8"
            )  # Django request.body is blocking
            body = json.loads(data)
            book_id = body.get("book_id")

            if not book_id:
                return JsonResponse(
                    {"error": "Book ID is required"}, status=status.HTTP_400_BAD_REQUEST
                )

            book, created = await fetch_gutenberg_book(int(book_id))

            if not book:
                return JsonResponse(
                    {"error": "Failed to fetch book"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )

            serializer = BookSerializer(book)
            book_data = await sync_to_async(lambda: serializer.data)()

            return JsonResponse(
                {
                    "message": "Book fetched successfully",
                    "book": book_data,
                    "created": created,
                },
                status=status.HTTP_201_CREATED if created else status.HTTP_200_OK,
            )

        except Exception as e:
            return JsonResponse(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
