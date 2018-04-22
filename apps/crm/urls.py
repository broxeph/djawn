from django.urls import path

from . import views

urlpatterns = [
    path('api/organization/', views.OrganizationListCreate.as_view())
]
