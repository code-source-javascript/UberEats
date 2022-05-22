import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FirstPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-lg md:text-2xl my-2 pr-2">
        What's your phone number or email?
      </h1>
      <div className="w-full h-12 my-2 z-50  ">
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="h-full w-full   bg-gray-100 px-3 outline-black"
        />
        {/* this will come when number is entered in the input */}
        {/* <PhoneInput /> */}
      </div>
      <h1 className="text-sm my-5 text-gray-500 z-10">
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </h1>
      <div className="fixed right-0 left-0 bottom-8 md:relative md:bottom-0 z-10">
        <div className="w-full h-20">
          <div className="flex mr-5 items-center justify-center px-3 py-2 bg-gray-200 rounded-full w-24 float-right my-4 hover:bg-gray-300 cursor-pointer">
            Next <BsArrowRight className="h-5 w-5 font-body ml-2" />
          </div>
        </div>
        {/* protection */}
        <div className="md:mb-0 mb-5 text-center text-xs ">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="cursor-pointer font-light hover:underline">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="cursor-pointer font-light hover:underline">
            Terms of Service
          </span>{" "}
          apply.
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
