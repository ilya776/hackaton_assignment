import { APP_ROUTES_NAMES } from "@/router/AppRouterNames";
import type { FC } from "react";
import { Link } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const routes = [
  {
    to: APP_ROUTES_NAMES.Root,
    name: "Dashboard",
    icon : <MdDashboard/>,
  },
  {
    to: APP_ROUTES_NAMES.Library,
    name: "Library",
    icon: <FaBookOpen/>,
  },
  {
    to:'',
    name: "Favourites",
    icon: <FaBookmark/>,
  },
];

const Navigation:FC = () => {
  return (
    <nav className="flex mt-15 flex-col justify-end gap-3 items-start font-semibold">
      {routes.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.to}
            className="cursor-pointer space-x-3 bg-[#3d5c3d] text-[#ddf5d7] w-[250px] rounded-[15px] flex items-center  h-[50px] text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis hover:scale-105 transition-all duration-200"
          >
            {item.icon} <p>{item.name}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
