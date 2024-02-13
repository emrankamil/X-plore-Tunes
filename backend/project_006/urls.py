from django.contrib import admin
from django.urls import path, include, re_path

from root_user.views import get_media_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/' , include("drf_social_oauth2.urls", namespace='drf')),
    path('api_root/', include('root_user.urls')),
    path('api/music/', include('root_music_config.urls'))
]

urlpatterns += [
        path("media/<str:path>", get_media_path, name="get-media-path"),
        path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]