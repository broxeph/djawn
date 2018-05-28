from django.core.exceptions import ValidationError
from django.db import models

from base.models import TimeStampedModel


class Organization(TimeStampedModel):
    name = models.CharField(max_length=200, db_index=True)

    def __str__(self):
        return self.name


class Contact(TimeStampedModel):
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='contacts')

    def __str__(self):
        return f'{self.name} ({self.organization})'

    def clean(self):
        if not (self.first_name or self.last_name):
            raise ValidationError('Must have a first or last name.')

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.full_clean()
        super(Contact, self).save(force_insert, force_update, using, update_fields)

    @property
    def name(self):
        return ' '.join((self.first_name, self.last_name))
