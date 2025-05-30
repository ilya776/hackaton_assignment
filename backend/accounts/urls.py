from django.urls import path

from .views import LoginView, RegisterView , CurrentUserView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path('user/', CurrentUserView.as_view(), name='current-user'),
]
