from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(
        label="Username", widget=forms.TextInput(attrs={"class": "input-field"})
    )
    password = forms.CharField(
        label="Password", widget=forms.PasswordInput(attrs={"class": "input-field"})
    )
