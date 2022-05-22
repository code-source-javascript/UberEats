import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const FourthPage = () => {
  return (
    <div className="w-full">
      <div>
        <div className="bg-black h-12 w-12 rounded-full flex justify-center items-center border-2 border-[#030ffc]">
          <AiOutlineCheck className="text-white  h-6 w-6" />
        </div>
      </div>
      <div className="text-2xl my-8">All set!</div>
      <div className="text-sm text-gray-800">
        You'll be signed in to your account momentarily. If nothing happens,
        click continue.
      </div>
      <div className="ml-6 md:ml-0 my-10 fixed right-0 left-0 bottom-0 md:relative md:bottom-0 z-10">
        <span className="flex mr-5 items-center justify-center px-4 py-3  bg-gray-100 rounded-full w-32  my-4 hover:bg-gray-200 cursor-pointer">
          Continue <BsArrowRight className="h-5 w-5 font-body ml-2" />
        </span>
      </div>
    </div>
  );
};

export default FourthPage;
