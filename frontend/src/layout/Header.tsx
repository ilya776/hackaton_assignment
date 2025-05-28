import Navigation from "@/components/Navigation";

const Header = () => {
  return (
    <header className="py-4 px-20 flex justify-between items-center bg-gr-light">
      <h1 className="text-xl font-bold">Your Library</h1>
      <Navigation/>
    </header>
  );
};

export default Header;
