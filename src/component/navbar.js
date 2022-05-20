import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { EatContext } from "../App";

const Navbar = ({ background, show, children }) => {
  const { setSideBar } = useContext(EatContext);
  return (
    <div
      className={`w-screen h-24 xl:fixed absolute top-0 right-0 left-0 z-30 ${background} bg-transparent  transition-all duration-300 ease-in-out flex justify-between items-center  border-gray-200 `}
    >
      {/* menu and logo */}
      <div className="flex items-center justify-evenly md:ml-3 ">
        <div
          className="cursor-pointer"
          onClick={() => {
            setSideBar(true);
          }}
        >
          <IoMdMenu className="h-7 w-7" />
        </div>
        <div className="cursor-pointer md:ml-3 ml-1 font-sans">
          <span className="text-3xl mr-1">Uber</span>
          <span className="text-3xl font-semibold">Eats</span>
        </div>
      </div>
      {/* Search */}
      <div className="hidden xl:block w-1/2">
        <div
          className={`h-14 w-full ml-5 ${show} transition-all duration-300 ease-in`}
        >
          {children}
        </div>
      </div>
      {/* account */}
      <div className="flex md:mr-3 ">
        <div className="md:py-3 md:px-4 p-2 bg-white rounded-full flex justify-evenly items-center text-sm cursor-pointer shadow-lg drop-shadow-lg  hover:bg-gray-200">
          <FaUserAlt className="md:h-4 md:w-3  h-2 w-3" />
          <span className="ml-2 whitespace-nowrap hidden xl:block">Log in</span>
        </div>
        <div className="md:py-3 md:px-4 p-2 text-xs md:text-sm bg-black whitespace-nowrap text-white rounded-full sm:flex justify-evenly items-center ml-3 cursor-pointer hover:opacity-60  ">
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
