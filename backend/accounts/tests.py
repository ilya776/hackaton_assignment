from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import User


class AuthenticationTests(APITestCase):
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(
            email="test@example.com", name="Test User", password="testpassword123"
        )

        # URLs
        self.register_url = reverse("register")
        self.login_url = reverse("login")

    def test_register_user(self):
        """
        Test user registration.
        """
        data = {
            "email": "newuser@example.com",
            "name": "New User",
            "password": "newpassword123",
        }

        response = self.client.post(self.register_url, data, format="json")

        # Check response status and data
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn("user", response.data)
        self.assertIn("tokens", response.data)
        self.assertEqual(response.data["user"]["email"], data["email"])
        self.assertEqual(response.data["user"]["name"], data["name"])

        # Check that user was created in database
        self.assertTrue(User.objects.filter(email=data["email"]).exists())

    def test_register_user_invalid_data(self):
        """
        Test user registration with invalid data.
        """
        # Missing required fields
        data = {"email": "invalid@example.com"}

        response = self.client.post(self.register_url, data, format="json")

        # Check response status
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_user(self):
        """
        Test user login.
        """
        data = {"email": "test@example.com", "password": "testpassword123"}

        response = self.client.post(self.login_url, data, format="json")

        # Check response status and data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("tokens", response.data)
        self.assertIn("access", response.data["tokens"])
        self.assertIn("refresh", response.data["tokens"])

    def test_login_user_invalid_credentials(self):
        """
        Test user login with invalid credentials.
        """
        data = {"email": "test@example.com", "password": "wrongpassword"}

        response = self.client.post(self.login_url, data, format="json")

        # Check response status
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
