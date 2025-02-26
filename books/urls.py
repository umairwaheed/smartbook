from django.urls import include, path
from rest_framework.routers import DefaultRouter

from books.views import BookViewSet, FetchBookAsyncAPIView

router = DefaultRouter()
router.register(r"books", BookViewSet, basename="book")

urlpatterns = [
    path("", include(router.urls)),
    path("fetch-book/", FetchBookAsyncAPIView.as_view(), name="fetch-book-async"),
]
