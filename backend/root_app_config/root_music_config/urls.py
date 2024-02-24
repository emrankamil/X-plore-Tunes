# django imports
from django.urls import path


# project view applications
from .views import (
    MusicCreateAPIView,
    MusicListAPIView,
)


urlpatterns = [
    path('create/', MusicCreateAPIView.as_view(), name='create_music'),
    path('', MusicListAPIView.as_view(), name='music'),
    
]