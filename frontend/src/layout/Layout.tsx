import SideBar from "@/layout/SideBar.tsx";
import MainHeader from "@/components/MainHeader.tsx";

const Layout = () => {
  return (
      <div className="flex flex-row  bg-[#bed7b8] text-gr-dark text-4xl">
        <SideBar/>
          <section>
              <MainHeader/>
          </section>
    </div>
  );
};

export default Layout;
