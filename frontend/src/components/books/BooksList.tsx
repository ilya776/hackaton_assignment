import BookItem from "./BookItem";

const BooksList= () => {
    // Sample data for demonstration
    const sampleBooks = [
        { id: 1, title: "Comic Book 1", image: "/placeholder1.jpg" },
        { id: 2, title: "Comic Book 2", image: "/placeholder2.jpg" },
        { id: 3, title: "Comic Book 3", image: "/placeholder3.jpg" },
        { id: 4, title: "Comic Book 4", image: "/placeholder4.jpg" }
    ];

    return <div>
        <h1 className={'text-[#4d504c] mt-10'}>Top Rated Comics</h1>
        <div className={'mt-5 flex flex-row gap-5'}>
            {sampleBooks.map(book => (
                <BookItem 
                    key={book.id}
                    id={book.id} 
                    title={book.title} 
                    image={book.image}
                />
            ))}
        </div>
    </div>
}

export default BooksList;
