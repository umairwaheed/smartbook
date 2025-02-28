from rest_framework import serializers

from books.models import Book, BookAnalysis


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


class BookAnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookAnalysis
        fields = [
            "id",
            "characters",
            "percent_complete",
            "analysis_completed_at",
        ]
        read_only_fields = ["created_at"]
