import React from "react";

const HomeFeed = ({ image, topic, detail }) => {
  return (
    <div className="m-5 cursor-pointer ">
      <div className="w-full h-80 shadow-lg rounded flex justify-center border border-gray-50">
        <img src={image} alt="something" className="h-full w-full rounded" />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-[500] text-black">{topic}</h1>
        <span className="text-sm mt-2 border-b border-black ">{detail}</span>
      </div>
    </div>
  );
};

export default HomeFeed;
