from rest_framework import serializers

from books.models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = [
            "gutenberg_id",
            "title",
            "author",
            "language",
            "download_url",
            "text",
            "created_at",
        ]
        read_only_fields = ["created_at"]
