from rest_framework import serializers

from books.models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = [
            "id",
            "gutenberg_id",
            "title",
            "author",
            "language",
            "download_url",
            "text",
            "created_at",
            "category",
            "summary",
        ]
        read_only_fields = ["created_at"]
