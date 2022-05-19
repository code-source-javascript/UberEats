import React from "react";

const HomeFeed = ({ image, topic, detail, alt }) => {
  return (
    <div className="xl:m-5 my-5 cursor-pointer ">
      <div className="w-full lg:h-80  shadow-lg lg:rounded flex justify-center border border-gray-50">
        <img
          src={image}
          alt="something"
          className="h-full w-full rounded hidden lg:block"
        />
        <img src={alt} alt="something" className=" w-full  lg:hidden" />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-[500] text-black">{topic}</h1>
        <span className="text-sm mt-2 border-b border-black ">{detail}</span>
      </div>
    </div>
  );
};

export default HomeFeed;
