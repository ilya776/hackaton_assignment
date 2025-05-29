import BookItem from "@/components/BookItem.tsx";

const BooksList= () => {
    return <div>
        <h1 className={'text-[#4d504c] mt-10'}>Top Rated Comics</h1>
        <div className={'mt-5 flex flex-row gap-5'}>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
        </div>
    </div>
}

export default BooksList;