from django.db import models

from base.models import TimeStampedModel


class Organization(TimeStampedModel):
    name = models.CharField(max_length=200, db_index=True)

    def __str__(self):
        return self.name
