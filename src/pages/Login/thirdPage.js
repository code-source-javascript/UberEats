import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
const ThirdPage = () => {
  return (
    <div className="w-full">
      <div className="text-2xl mb-6">Welcome back, Caleb.</div>
      <div className="underline mb-3 font-semibold">Not you?</div>
      <div className="bg-gray-100 flex h-12 items-center justify-between px-4">
        <input
          type="password"
          placeholder="Enter your password"
          className="h-full bg-transparent outline-none w-11/12 "
        />
        <AiFillEye />
      </div>
      <div className="mt-8">
        <span className="px-4 py-3 cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-full font-[500] text-sm">
          I forgot my password
        </span>
      </div>
      <div className="my-7">
        <span className="px-4 py-3 cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-full font-[500] text-sm">
          More options
        </span>
      </div>
      <div className="flex justify-between items-center my-10 fixed right-0 left-0 bottom-0 md:relative md:bottom-0 z-10">
        <span className=" bg-gray-100 px-3 py-3 rounded-full cursor-pointer hover:bg-gray-200 ml-5 md:ml-0">
          <HiOutlineArrowLeft className="h-7 w-7" />
        </span>
        <span className="flex mr-5 items-center justify-center px-4 py-3  bg-gray-100 rounded-full w-24 float-right my-4 hover:bg-gray-200 cursor-pointer">
          Next <BsArrowRight className="h-5 w-5 font-body ml-2" />
        </span>
      </div>
    </div>
  );
};

export default ThirdPage;
