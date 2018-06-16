from rest_framework import serializers

from .models import Organization, Contact


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name', 'created')


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'first_name', 'last_name', 'organization', 'created')
