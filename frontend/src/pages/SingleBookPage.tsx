import {useParams} from "react-router";
import { useGetBookByIdQuery } from '@/modules/books/services/booksApi';
import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  genre: string;
}

const SingleBookPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const {
    data: book,
    error,
    isLoading,
  } = useGetBookByIdQuery(bookId) as {
    data: Book;
    error: any;
    isLoading: boolean;
  };

  if (isLoading) return <div className="text-center py-10">Завантаження...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Помилка при завантаженні книги</div>;
  if (!book) return <div className="text-center py-10">Книгу не знайдено</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-4 flex justify-center">
            <div className="relative w-full max-w-[300px]">
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  Завантаження...
                </div>
              )}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto rounded-lg"
                onLoad={() => setIsImageLoaded(true)}
                style={{ display: isImageLoaded ? 'block' : 'none' }}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h1>
            
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2">
                {book.genre}
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                Рейтинг: {book.rating}/5
              </span>
            </div>
            
            {book.price && (
              <div className="text-xl font-semibold text-green-600 mb-4">
                Ціна: {book.price} грн
              </div>
            )}
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Опис</h2>
              <p className="text-gray-700 whitespace-pre-line">{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;