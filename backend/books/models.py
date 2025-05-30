from django.db import models
from decimal import Decimal
from django.utils.timezone import now

class Book(models.Model):
    title = models.CharField(max_length=255)
    image = models.URLField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal("0.00"))
    description = models.TextField()
    rating = models.PositiveSmallIntegerField()
    genre = models.CharField(max_length=100, default="Unknown")

    def __str__(self):
        return self.title
