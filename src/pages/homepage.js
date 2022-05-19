import React, { useEffect, useState } from "react";

import HomeFeed from "../component/homeFeed";
import Navbar from "../component/navbar";
import SelectInput from "../component/selectInput";
import AddressBar from "../features/AddressBar/addressBar";
import Footer from "../component/footer";
import LocationItem from "../component/locationItem";

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
        background={y > 5 ? "xl:bg-white xl:border-b" : "xl:bg-transparent"}
        show={y > 460 ? " opacity-100" : " opacity-0"}
      >
        <AddressBar color="bg-gray-200" />
      </Navbar>
      <div className="fixed top-0 left-0 right-0 w-screen h-14 xl:hidden z-40">
        {y > 460 ? <AddressBar color="bg-gray-200" /> : ""}
      </div>
      <div className="relative h-screen w-screen">
        <img
          src="./asset/images/landing.webp"
          alt="landingImage"
          className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen object-cover z-10"
        />
        <div className="absolute top-0 xl:left-10 left-0 right-0 bottom-0 z-20 flex justify-center h-screen w-screen flex-col items-center xl:items-start">
          {/* text on  top ofdelivery */}
          <div className="my-8">
            <h1 className="text-4xl xl:text-6xl font-semibold self-stretch font-sans text-center">
              Order food to your door
            </h1>
          </div>
          {/* delivery search */}
          <div className="flex flex-col xl:flex-row xl:h-14  md:w-1/2  w-full  justify-between items-center">
            {/* select */}
            <div className=" xl:w-3/12  w-2/3 m-1 h-14 z-20 flex justify-center items-center bg-white">
              <SelectInput />
            </div>
            {/* Search space for text */}
            <div className="h-14 xl:w-7/12 w-2/3 m-1">
              <AddressBar color="bg-white" />
            </div>

            <div className="h-14 xl:w-2/12 w-2/3 m-1 flex justify-center items-center bg-black text-white text-lg cursor-pointer hover:opacity-80">
              Find Food
            </div>
          </div>

          {/* Sign in option */}
          <div className="my-5 text-sm font-[500] md:w-1/3  w-2/3 ">
            <span className="border-b border-black cursor-pointer">
              Sign In
            </span>
            <span> for your recent addresses</span>
          </div>
        </div>
      </div>
      <div className="w-screen px-5 my-8 md:hidden">
       
      </div>
      
      <div className="w-screen grid lg:grid-cols-3  gap-3 md:px-5  px-3">
        <HomeFeed
          image="./asset/images/image123.webp"
          alt="./asset/images/image1241.png"
          topic="Feed your employees"
          detail="Create a business account"
        />
        <HomeFeed
          image="./asset/images/image124.webp"
          alt="./asset/images/image1231.png"
          topic="Your restaurant, delivered"
          detail="Add your restaurant"
        />
        <HomeFeed
          image="./asset/images/image125.webp"
          alt="./asset/images/image1251.png"
          topic="Deliver with Uber Eats"
          detail="Sign up to deliver"
        />
      </div>
      {/* city and map */}
      <div className="my-10 w-screen px-5">
        {/* heading */}
        <div className="flex w-full justify-between ">
          <h1 className="md:text-4xl text-2xl font-[500]">Cities near me</h1>
          <h1 className="text-lg cursor-pointer underline font-[500] hidden md:block">
            View all 500+ cities
          </h1>
        </div>
        {/* map */}
        <div className="w-full h-96 border my-5 flex justify-center items-center">
          MAP GOES HERE
        </div>
        {/* cities */}
        <div className=" w-full grid md:grid-cols-4 grid-cols-2 ">
          <LocationItem title=" Accra" />
          <LocationItem title=" Kumasi" />
          <LocationItem title=" Suyani" />
          <LocationItem title=" Tamale" />
          <LocationItem title=" Koforidua" />
          <LocationItem title=" Akim Oda" />
          <LocationItem title=" Akroso" />
          <LocationItem title=" Assin Fosu" />
          <LocationItem title=" Kasoa" />
          <LocationItem title=" Adenta" />
          <LocationItem title=" Winneba" />
          <LocationItem title=" Apam" />
          <LocationItem title=" Tema" />
          <LocationItem title=" Wa" />
          <LocationItem title=" Ho" />
          <LocationItem title=" Tarkoradi" />
        </div>
      </div>
      {/* Country */}
      <div className="my-10 w-screen px-5">
        {/* heading */}
        <div className="flex w-full justify-start ">
          <h1 className="md:text-4xl text-2xl font-[500]">
            Countries with Uber Eats
          </h1>
        </div>
        <div className=" w-full grid md:grid-cols-4 grid-cols-2 mt-5">
          <LocationItem title=" Ghana" />
          <LocationItem title=" Togo" />
          <LocationItem title=" UK" />
          <LocationItem title=" Mali" />
          <LocationItem title=" Koforidua" />
          <LocationItem title=" Akim Oda" />
          <LocationItem title=" Akroso" />
          <LocationItem title=" Assin Fosu" />
          <LocationItem title=" Kasoa" />
          <LocationItem title=" Adenta" />
          <LocationItem title=" Winneba" />
          <LocationItem title=" Apam" />
          <LocationItem title=" Tema" />
          <LocationItem title=" Wa" />
          <LocationItem title=" Ho" />
          <LocationItem title=" Tarkoradi" />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
