import { CiSearch } from "react-icons/ci";

const MainHeader = () => {
  return <header className={"flex justify-between items-center px-10 h-[60px] w-full flex-row"}>
    <h1 className={'text-[#ddf5d7] font-bold uppercase text-4xl'}>Library.</h1>
    <div className="relative w-full max-w-sm">
      <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      <input
          type="text"
          placeholder="Пошук..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <p>Profile</p>
  </header>;
};

export default MainHeader;
