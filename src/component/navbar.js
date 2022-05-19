import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import SearchBar from "../features/SearchBar/searchBar";

const Navbar = ({ background, show }) => {
  return (
    <div
      className={`w-screen h-24 fixed top-0 right-0 left-0 z-30 ${background} active:bg-white flex justify-between items-center  border-gray-200`}
    >
      {/* menu and logo */}
      <div className="flex items-center justify-evenly w-2/12">
        <div className="cursor-pointer">
          <IoMdMenu className="h-7 w-7" />
        </div>
        <div className="cursor-pointer">
          <span className="text-3xl">Uber</span>
          <span className="text-3xl font-semibold"> Eats</span>
        </div>
      </div>
      {/* Search */}
      <div className="w-8/12">
        <div
          className={`h-14 w-4/6 ml-5 ${show} transition-all duration-500 ease-in`}
        >
          <SearchBar color="bg-gray-100" radius="rounded-sm" />
        </div>
      </div>
      {/* account */}
      <div className="flex w-2/12">
        <div className="py-3 px-5 bg-white rounded-full flex justify-evenly items-center cursor-pointer shadow-lg drop-shadow-lg  hover:bg-gray-200">
          <FaUserAlt className="h-5 w-4" />
          <span className="ml-2 whitespace-nowrap">Log in</span>
        </div>
        <div className="py-3 px-5 bg-black whitespace-nowrap text-white rounded-full flex justify-evenly items-center ml-3 cursor-pointer hover:opacity-60">
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
