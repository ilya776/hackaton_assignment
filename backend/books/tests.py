from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Book

class BookAPITests(APITestCase):
    def setUp(self):
        # Create test books
        self.book1 = Book.objects.create(
            title="Test Book 1",
            image="https://example.com/book1.jpg",
            price=19.99,
            description="This is test book 1",
            rating=4
        )

        self.book2 = Book.objects.create(
            title="Test Book 2",
            image="https://example.com/book2.jpg",
            price=29.99,
            description="This is test book 2",
            rating=5
        )

        # URLs
        self.book_list_url = reverse('book-list')
        self.book1_detail_url = reverse('book-detail', args=[self.book1.id])

    def test_get_book_list(self):
        """
        Test retrieving the list of books.
        """
        response = self.client.get(self.book_list_url)

        # Check response status and data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

        # Check that only id, title, and image fields are included
        self.assertIn('id', response.data[0])
        self.assertIn('title', response.data[0])
        self.assertIn('image', response.data[0])
        self.assertNotIn('price', response.data[0])
        self.assertNotIn('description', response.data[0])
        self.assertNotIn('rating', response.data[0])

    def test_get_book_detail(self):
        """
        Test retrieving a specific book's details.
        """
        response = self.client.get(self.book1_detail_url)

        # Check response status and data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['id'], self.book1.id)
        self.assertEqual(response.data['title'], self.book1.title)
        self.assertEqual(response.data['image'], self.book1.image)

        # Check that all fields are included
        self.assertIn('price', response.data)
        self.assertIn('description', response.data)
        self.assertIn('rating', response.data)

    def test_get_nonexistent_book(self):
        """
        Test retrieving a book that doesn't exist.
        """
        nonexistent_url = reverse('book-detail', args=[999])
        response = self.client.get(nonexistent_url)

        # Check response status
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
