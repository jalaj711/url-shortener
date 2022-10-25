from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class URL(models.Model):
    shortened = models.CharField(max_length=20)
    actual = models.URLField()
    date_created = models.DateTimeField(auto_now=True)
    visits = models.IntegerField(default=0)
