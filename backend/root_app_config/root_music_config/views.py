from django.shortcuts import render


from rest_framework import generics
from rest_framework.response import Response


from .models import MusicContainer as Music
from .serializer import MusicSerializer



class MusicCreateAPIView(generics.CreateAPIView):
    queryset = Music
    serializer_class = MusicSerializer