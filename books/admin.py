from django.contrib import admin

from books.models import Book, UserBookAccess


class BookAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "author", "language", "gutenberg_id", "created_at")
    search_fields = ("title", "author", "gutenberg_id")
    list_filter = ("language", "created_at")
    ordering = ("id",)


class UserBookAccessAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "book", "accessed_at")
    search_fields = ("user__username", "book__title")
    list_filter = ("accessed_at",)
    ordering = ("-accessed_at",)


# Register models
admin.site.register(Book, BookAdmin)
admin.site.register(UserBookAccess, UserBookAccessAdmin)
