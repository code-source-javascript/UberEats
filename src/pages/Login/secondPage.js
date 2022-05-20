import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SecondPage = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl ">
          Enter the 4-digit code sent to you at *******79.
        </h1>
      </div>
      <div className="md:w-4/6 w-full flex justify-between mt-3">
        <input
          type="text"
          className="h-14 w-14 bg-gray-100 text-center outline-black"
        />
        <input
          type="text"
          className="h-14 w-14 bg-gray-100 text-center outline-black"
        />
        <input
          type="text"
          className="h-14 w-14 bg-gray-100 text-center outline-black"
        />
        <input
          type="text"
          className="h-14 w-14 bg-gray-100 text-center outline-black"
        />
      </div>
      <div className="mt-7">
        <span className="text-sm font-semibold h-10 w-44 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full flex justify-center items-center ">
          I didn't receive a code{" "}
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

export default SecondPage;
