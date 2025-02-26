from django.urls import path

from books.views import BookListAPIView, FetchBookAsyncAPIView

urlpatterns = [
    path("books/", BookListAPIView.as_view(), name="book-list-api"),
    path("fetch-book/", FetchBookAsyncAPIView.as_view(), name="fetch-book-async"),
]
