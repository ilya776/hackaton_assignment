import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gr-lightest text-gr-dark text-4xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
