import Navigation from "@/components/Navigation.tsx";
import { APP_ROUTES_NAMES } from "@/router/AppRouterNames";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router";


const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className={"w-[350px] h-[calc(100vh-60px)] px-10 pb-10 flex flex-col justify-between gap-5"}>
      <Navigation />
      <div className={"space-y-2"}>
        <Link
          to={""}
          className="cursor-pointer space-x-3 text-[#7ea375] flex items-center text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis hover:text-gr-dark hover:scale-105 transition-all duration-200"
        >
          <MdOutlineSettings /> <p>Settings</p>
        </Link>
        <div
          onClick={() => {
            localStorage.clear();
            navigate(APP_ROUTES_NAMES.Auth)
          }}
          className="cursor-pointer space-x-3 text-[#7ea375] flex items-center text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis hover:text-gr-dark hover:scale-105 transition-all duration-200"
        >
          <LuLogOut /> <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
