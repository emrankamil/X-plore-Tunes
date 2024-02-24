import mimetypes
import os
from urllib.parse import unquote


from django.conf import settings
from django.http import FileResponse


from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes


from .models import MusicContainer as Music
from .serializer import MusicSerializer


class MusicCreateAPIView(generics.CreateAPIView):
    queryset = Music
    serializer_class = MusicSerializer
    # permission_classes = [IsAuthenticated]

class MusicListAPIView(generics.ListAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer