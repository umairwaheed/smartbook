from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import RedirectView

from frontend.views import index

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users/", include("users.urls")),
    path("api/", include("books.urls")),
    path("favicon.ico", RedirectView.as_view(url="/static/favicon.ico", permanent=True)),
    re_path(r"^(?:.*)/?$", index, name="index"),
]
