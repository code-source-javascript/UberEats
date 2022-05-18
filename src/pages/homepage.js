import React from "react";
import Navbar from "../component/navbar";
import SelectInput from "../component/selectInput";
import SearchBar from "../features/SearchBar/searchBar";

const Homepage = () => {
  return (
    <div className="h-screen w-screen bg-red-400 overflow-scroll overflow-y-scroll ">
      <Navbar />
      <div className="relative h-screen w-screen">
        <img
          src="./asset/images/landing.webp"
          alt="landingImage"
          className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen object-cover z-10"
        />
        <div className="absolute top-0 left-10 right-0 bottom-0 z-20 flex justify-center h-screen w-screen flex-col">
          {/* text on  top ofdelivery */}
          <div className="my-10">
            <h1 className="text-6xl font-semibold self-stretch">
              Order food to your door
            </h1>
          </div>
          {/* delivery search */}
          <div className="flex h-14  w-1/2 justify-between">
            {/* select */}
            <div className="h-full w-3/12 m-1 z-20 flex justify-center items-center bg-white">
              <SelectInput />
            </div>
            {/* Search space for text */}
            <div className="h-full w-7/12 m-1">
              <SearchBar color="bg-white" />
            </div>

            <div className="h-full w-2/12 m-1 flex justify-center items-center bg-black text-white text-lg cursor-pointer hover:opacity-80">
              Find Food
            </div>
          </div>

          {/* Sign in option */}
          <div className="my-5 text-sm font-[500]">
            <span className="border-b border-black">Sign In</span>
            <span> for your recent addresses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
