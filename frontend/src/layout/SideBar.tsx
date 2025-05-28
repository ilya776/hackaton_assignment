import Navigation from "@/components/Navigation.tsx";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import {Link} from "react-router";

const SideBar = () => {
    return <div className={'w-[300px] h-screen px-10 py-5 flex flex-col justify-between gap-5'}>
        <div>
            <h1 className={'text-[#ddf5d7] font-bold uppercase'}>Library.</h1>
            <Navigation/>
        </div>
        <div className={'space-y-2'}>
            <Link
                to={''}
                className="cursor-pointer space-x-3  text-[#7ea375]   rounded-[15px] flex items-center    text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis"
            >
                <MdOutlineSettings/> <p>Settings</p>
            </Link>
            <Link
                to={''}
                className="cursor-pointer space-x-3  text-[#7ea375]   rounded-[15px] flex items-center    text-2xl pl-4 whitespace-nowrap overflow-hidden text-ellipsis"
             >
                <LuLogOut/> <p>Log out</p>
             </Link>
        </div>
    </div>
}

export default SideBar