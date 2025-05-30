import { type FC } from "react";

type BookItemType = {
    title: string;
    image: string;
};

const BookItem: FC<BookItemType> = ({ title, image }) => {
    return (
        <div>
            <img src={image} alt={title} className="w-[200px] h-[220px] rounded-[10px] bg-white" />
            <h1 className="text-[#4d504c] w-[90%] truncate font-bold text-[15px] mt-2">{title}</h1>
        </div>
    );
};

export default BookItem;
