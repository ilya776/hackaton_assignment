import { type FC } from "react";
import { Link } from "react-router";
import { APP_ROUTES_NAMES } from "@/router/AppRouterNames";

type BookItemType = {
    id: number;
    title: string;
    image: string;
};

const BookItem: FC<BookItemType> = ({ id, title, image  }) => {
    return (
        <Link to={`${APP_ROUTES_NAMES.Book}/${id}`} className="block hover:opacity-90 transition-opacity">
            <div className="cursor-pointer">
                <img src={image} alt={title} className="w-[200px] h-[220px] rounded-[10px] bg-white" />
                <h1 className="text-[#4d504c] w-[90%] truncate font-bold text-[15px] mt-2">{title}</h1>
            </div>
        </Link>
    );
};

export default BookItem;
