# Generated by Django 5.1.6 on 2025-02-28 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("books", "0004_bookanalysis"),
    ]

    operations = [
        migrations.AlterField(
            model_name="bookanalysis",
            name="characters",
            field=models.JSONField(blank=True, null=True),
        ),
    ]
