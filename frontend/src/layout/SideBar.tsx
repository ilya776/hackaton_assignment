import Navigation from "@/components/Navigation.tsx";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className={"w-[350px] h-[calc(100vh-60px)] px-10 pb-10 flex flex-col justify-between gap-5"}>
      <Navigation />
      <div className={"space-y-2"}>
        <Link
          to={""}
          className="cursor-pointer space-x-3  text-[#7ea375]   rounded-[15px] flex items-center    text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <MdOutlineSettings /> <p>Settings</p>
        </Link>
        <Link
          to={""}
          className="cursor-pointer space-x-3  text-[#7ea375]   rounded-[15px] flex items-center    text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <LuLogOut /> <p>Log out</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
