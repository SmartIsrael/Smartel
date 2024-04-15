# authentication/urls.py
from django.urls import path
from authentication.views import signup, user_login, home, api_signup, api_login

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', user_login, name='login'),
    path('api/signup/', api_signup, name='api_signup'),
    path('api/login/', api_login, name='api_login'),
    path('', home, name='home'),
]
