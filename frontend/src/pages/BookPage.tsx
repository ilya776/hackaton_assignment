import { useState, useMemo } from 'react';
import BookItem from "@/components/books/BookItem.tsx";
import { useGetBooksQuery } from "@/modules/books/services/booksApi.ts";

interface Book {
  id: number;
  title: string;
  genre: string[];
  year: number;
  image: string;
}

const AllBooks = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const {
    data: books = [],
    error,
    isLoading
  } = useGetBooksQuery() as {
    data: Book[];
    error: any;
    isLoading: boolean;
  };

  const years = ["all", "2023", "2022", "2021", "2020"];
  console.log(books);
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || book.genre.includes(selectedGenre);
      const matchesYear = selectedYear === 'all' || book.year.toString() === selectedYear;
      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [books, searchQuery, selectedGenre, selectedYear]);

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка при завантаженні книг</p>;
  if (!filteredBooks.length) return <p>Книги не знайдено</p>;

  const buttonBase = "p-2 rounded";
  const active = "bg-blue-500 text-white";
  const inactive = "bg-gray-200";
  const genres = useMemo(() => {
    const allGenres = books.flatMap(book => book.genre);
    const uniqueGenres = Array.from(new Set(allGenres));
    return ['all', ...uniqueGenres];
  }, [books]);

  return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-white p-4 rounded-lg shadow">
          <div className="flex flex-wrap gap-4">
            <input
                type="text"
                placeholder="Пошук книг..."
                className="p-2 border rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
                className="p-2 border rounded"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre === 'all' ? 'Всі жанри' : genre}
                  </option>
              ))}
            </select>

            <select
                className="p-2 border rounded"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'Всі роки' : year}
                  </option>
              ))}
            </select>

            <div className="flex gap-2">
              <button
                  className={`${buttonBase} ${viewMode === 'grid' ? active : inactive}`}
                  onClick={() => setViewMode('grid')}
              >
                Сітка
              </button>
              <button
                  className={`${buttonBase} ${viewMode === 'list' ? active : inactive}`}
                  onClick={() => setViewMode('list')}
              >
                Список
              </button>
            </div>
          </div>
        </div>

        <div className={
          viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
              : 'flex flex-col gap-4'
        }>
          {filteredBooks.map(book => (
              <div key={book.id} className={viewMode === 'list' ? 'w-full' : ''}>
                <BookItem id={book.id} title={book.title} image={book.image} viewMode={viewMode} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default AllBooks;
