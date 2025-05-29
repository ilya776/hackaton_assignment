from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book
from .serializers import BookListSerializer, BookDetailSerializer
import pandas as pd
import io
from django.http import HttpResponse


class BookListView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer


class BookDetailView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookDetailSerializer

class BookExcelExportView(APIView):
    def get(self, request):
        books = Book.objects.all().values('title', 'price', 'rating', 'genre')
        df = pd.DataFrame(list(books))

        # Create a buffer to save the Excel file
        buffer = io.BytesIO()

        # Write the DataFrame to an Excel file
        with pd.ExcelWriter(buffer, engine='xlsxwriter') as writer:
            df.to_excel(writer, sheet_name='Books', index=False)

        # Set up the response
        buffer.seek(0)
        response = HttpResponse(
            buffer.getvalue(),
            content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )
        response['Content-Disposition'] = 'attachment; filename=books.xlsx'

        return response
