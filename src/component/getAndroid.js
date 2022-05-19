import React from "react";

const GetAndroid = () => {
  return (
    <div className="w-full ">
      <div className="flex  items-center">
        <img
          src="./asset/images/logoEat.svg"
          alt="logo"
          className="h-14 w-14 mr-5"
        />
        <h1 className="text-3xl font-sans font-[500]">
          There's more to love in the Android app.
        </h1>
      </div>
      <div className="w-full flex justify-center items-center bg-gray-200 mt-5 h-14 cursor-pointer hover:bg-gray-100">
        <img src="" alt="" />
        <h1 className="font-[450] font-sans text-lg">Get the app</h1>
      </div>
    </div>
  );
};

export default GetAndroid;
