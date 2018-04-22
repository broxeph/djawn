from rest_framework import generics

from .models import Organization
from .serializers import OrganizationSerializer


class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
