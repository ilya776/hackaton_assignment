# Generated by Django 5.2.1 on 2025-05-28 20:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0002_book"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Book",
        ),
    ]
