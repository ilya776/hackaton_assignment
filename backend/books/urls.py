from django.urls import path
from .views import BookListView, BookDetailView, BookExcelExportView

urlpatterns = [
    path('books/', BookListView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
    path('books/export/excel/', BookExcelExportView.as_view(), name='book-export-excel'),
]
