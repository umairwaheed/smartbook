from django import forms
from django.contrib.auth.forms import UserCreationForm

from users.models import User


class LoginForm(forms.Form):
    username = forms.CharField(
        label="Username", widget=forms.TextInput(attrs={"class": "input-field"})
    )
    password = forms.CharField(
        label="Password", widget=forms.PasswordInput(attrs={"class": "input-field"})
    )


class RegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "password1", "password2"]
