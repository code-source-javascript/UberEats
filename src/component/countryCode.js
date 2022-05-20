import React, { useContext } from "react";
import { EatContext } from "../App";

const CountryCode = ({ image, title, code }) => {
  const { setCountryCodeBar } = useContext(EatContext);
  return (
    <div
      className="w-full px-4 py-2 my-3 cursor-pointer  hover:bg-gray-50 flex justify-between items-center "
      onClick={() => {
        setCountryCodeBar(false);
      }}
    >
      <div className="flex items-center">
        <img src={image} alt={title} className="h-5 w-8" />
        <h1 className="ml-5 text-sm font-light">{title}</h1>
      </div>

      <h1 className="text-sm font-normal">{code}</h1>
    </div>
  );
};

export default CountryCode;
