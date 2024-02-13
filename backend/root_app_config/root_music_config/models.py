from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class MusicContainer(models.Model):
    owner = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'music_owner')
    title = models.CharField(max_length = 200)
    likes = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'music_object_likes', blank = True, null=True)
    music_file = models.FileField(upload_to='music_files')
    length = models.TimeField(blank = True, null = True)
    replays = models.IntegerField()
    sample_rate = models.FloatField( default = 0.0)
    genre = models.CharField(max_length = 128, default = '')
    created = models.DateTimeField(auto_now_add=True)
    updated  = models.DateTimeField(auto_now=True)
 

    def __str__(self) -> str:
        return self.title