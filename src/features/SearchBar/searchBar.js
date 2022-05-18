import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ color, radius }) => {
  return (
    <div
      className={`h-full w-full flex ${color} ${radius} hover:border-b-2 border-black`}
    >
      <span className="w-1/12 h-full flex items-center justify-center">
        <HiLocationMarker className="h-6 w-6" />
      </span>
      <input
        type="text"
        placeholder="Enter delivery address"
        className={`w-11/12 h-full outline-none text-gray-700 bg-transparent `}
      />
    </div>
  );
};

export default SearchBar;
