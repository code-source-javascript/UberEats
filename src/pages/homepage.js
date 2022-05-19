import React, { useEffect, useState } from "react";

import HomeFeed from "../component/homeFeed";
import Navbar from "../component/navbar";
import SelectInput from "../component/selectInput";
import SearchBar from "../features/SearchBar/searchBar";
import Footer from "../component/footer";

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}

const Homepage = () => {
  const y = useScroll();

  return (
    <div className=" w-screen bg-white overflow-scroll overflow-y-scroll overflow-x-hidden font-body">
      <Navbar
        background={y > 5 ? "bg-white border-b" : "bg-transparent"}
        show={y > 460 ? " opacity-100" : " opacity-0"}
      />
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
            <span className="border-b border-black cursor-pointer">
              Sign In
            </span>
            <span> for your recent addresses</span>
          </div>
        </div>
      </div>
      <div className="w-screen grid grid-cols-3 gap-3 px-5">
        <HomeFeed
          image="./asset/images/image123.webp"
          topic="Feed your employees"
          detail="Create a business account"
        />
        <HomeFeed
          image="./asset/images/image124.webp"
          topic="Your restaurant, delivered"
          detail="Add your restaurant"
        />
        <HomeFeed
          image="./asset/images/image125.webp"
          topic="Deliver with Uber Eats"
          detail="Sign up to deliver"
        />
      </div>
      {/* city and map */}
      <div className="my-10 w-screen px-5">
        {/* heading */}
        <div className="flex w-full justify-between ">
          <h1 className="text-4xl font-[500]">Cities near me</h1>
          <h1 className="text-lg cursor-pointer underline font-[500]">
            View all 500+ cities
          </h1>
        </div>
        {/* map */}
        <div className="w-full h-96 border my-5 flex justify-center items-center">
          MAP GOES HERE
        </div>
        {/* cities */}
        <div className=" w-full grid grid-cols-4 ">
          <h1 className="text-gray-600 m-3 cursor-pointer">Accra</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Kumasi</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Suyani</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Tamale</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Koforidua</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Akim Oda</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Akroso</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Assin Fosu</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Kasoa</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Adenta</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Winneba</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Apam</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Tema</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Wa</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Ho</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Tarkoradi</h1>
        </div>
      </div>
      {/* Country */}
      <div className="my-10 w-screen px-5">
        {/* heading */}
        <div className="flex w-full justify-start ">
          <h1 className="text-4xl font-[500]">Countries with Uber Eats</h1>
        </div>
        <div className=" w-full grid grid-cols-4 mt-5">
          <h1 className="text-gray-600 m-3 cursor-pointer">Ghana</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Togo</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">UK</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Mali</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Koforidua</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Akim Oda</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Akroso</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Assin Fosu</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Kasoa</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Adenta</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Winneba</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Apam</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Tema</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Wa</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Ho</h1>
          <h1 className="text-gray-600 m-3 cursor-pointer">Tarkoradi</h1>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
