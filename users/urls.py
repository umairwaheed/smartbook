from django.contrib.auth.views import LogoutView
from django.urls import path

from users.views import login_view, register_view

urlpatterns = [
    path("login/", login_view, name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("register/", register_view, name="register"),
]
