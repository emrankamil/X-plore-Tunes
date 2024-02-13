from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


from .models import MusicContainer as Music
from .serializer import MusicSerializer



class MusicCreateAPIView(generics.CreateAPIView):
    queryset = Music
    serializer_class = MusicSerializer
    permission_classes = [IsAuthenticated]