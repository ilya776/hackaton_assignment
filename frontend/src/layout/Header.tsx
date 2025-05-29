import { APP_ROUTES_NAMES } from "@/router/AppRouterNames";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className={"flex justify-between items-center px-10 h-[60px] w-full flex-row"}>
      <h1 className={"text-[#ddf5d7] font-bold uppercase text-4xl"}>Library.</h1>
      <div className="relative w-full max-w-sm">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Пошук..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Link to={APP_ROUTES_NAMES.Profile}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 cursor-pointer hover:scale-110 hover:opacity-70 transition-all duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </Link>
    </header>
  );
};

export default Header;
