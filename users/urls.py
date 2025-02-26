from django.contrib.auth.views import LogoutView
from django.urls import path

from users.views import index_view, login_view, register_view

urlpatterns = [
    path("", index_view, name="index"),
    path("login/", login_view, name="login"),
    path("logout/", LogoutView.as_view(next_page="/users/login/"), name="logout"),
    path("register/", register_view, name="register"),
]
