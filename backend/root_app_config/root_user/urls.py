# django imports
from django.urls import path


# project view applications
from .views import (
    UserSignUpAPIView,
    UserInformationRetrieveAPIView,
    UserProfileUpdateAPIView,
)


urlpatterns = [
    # basic login, sign in and logout pages
    path('signup/', UserSignUpAPIView.as_view(), name='signup'),

    # update profile
    path('profile/update/<str:username>/', UserProfileUpdateAPIView.as_view(), name='profile_update_by_serializer'),

    # dump user information if needed
    path('profile/<str:username>/',  UserInformationRetrieveAPIView.as_view(), name='profile_info'),
    
]