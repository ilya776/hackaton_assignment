from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=255)
    image = models.URLField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    rating = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.title
