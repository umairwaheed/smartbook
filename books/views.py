import json

from asgiref.sync import sync_to_async
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views import View
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from books.models import Book, UserBookAccess
from books.serializers import BookSerializer
from books.utils import NotFoundException, fetch_gutenberg_book


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=["post"])
    def access(self, request, pk=None):
        book = get_object_or_404(Book, pk=pk)
        user = request.user
        UserBookAccess.objects.get_or_create(user=user, book=book)
        return Response({"message": "Book access recorded."})


class UserBooksViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for listing books accessed by the authenticated user.
    """

    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Book.objects.filter(userbookaccess__user=self.request.user)


class FetchBookAsyncAPIView(View):
    """
    Asynchronously fetches a book from Project Gutenberg by ID and saves it.
    """

    @sync_to_async
    def get_authenticated_user(self, request):
        if request.user.is_authenticated:
            return request.user

    async def post(self, request):
        user = await self.get_authenticated_user(request)
        if not user:
            return JsonResponse(
                {"error": "Authentication required"},
                status=status.HTTP_403_FORBIDDEN,
            )

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

            try:
                book_id = int(book_id)
            except ValueError:
                return JsonResponse(
                    {"error": "Book ID must be a valid Gutenberg ID"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            try:
                book, created = await fetch_gutenberg_book(book_id, user)
            except NotFoundException:
                return JsonResponse(
                    {"error": "Book not found on Project Gutenberg"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

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
