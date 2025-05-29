import SideBar from "@/layout/SideBar.tsx";
import MainHeader from "@/layout/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-[#bed7b8] text-gr-dark">
      <div className="fixed top-0 left-0 right-0 bg-[#bed7b8]">
        <MainHeader />
      </div>

      <div className="fixed top-[60px] left-0 bottom-0 bg-[#bed7b8]">
        <SideBar />
      </div>

      <div className="ml-[350px] mt-[60px] bg-[#bed7b8] pb-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
