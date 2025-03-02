from django.db import models

from users.models import User


class Book(models.Model):
    """Model to store Project Gutenberg book details."""

    gutenberg_id = models.PositiveIntegerField(unique=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    download_url = models.URLField()
    text = models.TextField(blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} by {self.author}" if self.author else self.title


class UserBookAccess(models.Model):
    """Model to track books accessed by users."""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    accessed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "book")

    def __str__(self):
        return f"{self.user.username} accessed {self.book.title}"


class BookAnalysis(models.Model):
    book = models.OneToOneField(Book, on_delete=models.CASCADE)
    characters = models.JSONField(blank=True, null=True)
    last_read_index = models.PositiveIntegerField(default=0)
    percent_complete = models.PositiveSmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    analysis_completed_at = models.DateTimeField(blank=True, null=True)


class LanguageMap(models.Model):
    language = models.CharField(max_length=50, unique=True)
    model_name = models.CharField(max_length=5)

    def __str__(self):
        return self.language
