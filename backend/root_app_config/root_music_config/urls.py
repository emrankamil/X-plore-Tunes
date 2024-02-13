# django imports
from django.urls import path


# project view applications
from .views import (
    MusicCreateAPIView
)


urlpatterns = [
    # basic login, sign in and logout pages
    path('create/', MusicCreateAPIView.as_view(), name='create_music'),
    
]