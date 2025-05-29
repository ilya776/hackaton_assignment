import { useState } from 'react';
import BookItem from "@/components/books/BookItem.tsx";

interface Book {
    id: number;
    title: string;
    genre: string;
    year: number;
    imageUrl: string;
}

const AllBooks = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');

     const books: Book[] = [
        { id: 1, title: "Книга 1", genre: "Фантастика", year: 2023, imageUrl: "/path-to-image1.jpg" },
        { id: 2, title: "Книга 2", genre: "Детектив", year: 2022, imageUrl: "/path-to-image2.jpg" },
     ];

    const genres = ["all", "Фантастика", "Детектив", "Романтика", "Пригоди"];
    const years = ["all", "2023", "2022", "2021", "2020"];

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
        const matchesYear = selectedYear === 'all' || book.year.toString() === selectedYear;
        return matchesSearch && matchesGenre && matchesYear;
    });

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
                            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setViewMode('grid')}
                        >
                            Сітка
                        </button>
                        <button
                            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setViewMode('list')}
                        >
                            Список
                        </button>
                    </div>
                </div>
            </div>

            <div className={`
                ${viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                : 'flex flex-col gap-4'}
            `}>
                {filteredBooks.map(book => (
                    <div key={book.id} className={viewMode === 'list' ? 'w-full' : ''}>
                        <BookItem book={book} viewMode={viewMode} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;