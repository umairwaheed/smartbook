from django.urls import include, path
from rest_framework.routers import DefaultRouter

from books.views import BookViewSet, FetchBookAsyncAPIView, UserBooksViewSet

router = DefaultRouter()
router.register(r"books", BookViewSet, basename="book")
router.register(r"user-books", UserBooksViewSet, basename="userbook")

urlpatterns = [
    path("", include(router.urls)),
    path("fetch-book/", FetchBookAsyncAPIView.as_view(), name="fetch-book-async"),
]
