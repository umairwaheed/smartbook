# Generated by Django 5.1.6 on 2025-02-27 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("books", "0002_book_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="book",
            name="summary",
            field=models.TextField(blank=True, null=True),
        ),
    ]
