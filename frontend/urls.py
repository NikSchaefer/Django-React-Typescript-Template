from django.urls import path
from .views import index
# urls here

urlpatterns = [
    path('', index)
]