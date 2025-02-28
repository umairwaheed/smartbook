from django.contrib import admin
from django.urls import include, path, re_path

from frontend.views import index

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", include("users.urls")),
    path("api/", include("books.urls")),
    re_path(r"^(?:.*)/?$", index, name="index"),
]
