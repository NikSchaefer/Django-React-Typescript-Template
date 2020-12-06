from django.urls import path
from django.shortcuts import render


# Views and Urls for frontend are combined for simplicity.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


# urls here
urlpatterns = [
    path('', index),
]
