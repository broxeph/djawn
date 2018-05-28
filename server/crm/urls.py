from django.urls import path

from . import views

urlpatterns = [
    path('organization/', views.OrganizationListCreate.as_view()),
    path('organization/<int:pk>/', views.OrganizationDetail.as_view()),
    path('contact/', views.ContactListCreate.as_view()),
    path('contact/<int:pk>/', views.ContactDetail.as_view()),
]
