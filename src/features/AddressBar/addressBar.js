import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import AddressComponent from "../../component/addressComponent";

const AddressBar = ({ color, radius }) => {
  const [value, setValue] = useState("");
  return (
    <div className=" w-full">
      <div
        className={`h-14 w-full flex ${color} ${radius} hover:border-b-2 border-black`}
      >
        <span className="w-1/12 h-full flex items-center justify-center">
          <HiLocationMarker className="h-6 w-6" />
        </span>
        <input
          type="text"
          placeholder="Enter delivery address"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={`w-10/12 h-full outline-none text-gray-700 bg-transparent `}
        />
      </div>
      <div className="w-full  bg-white z-50 border ">
        
      </div>
    </div>
  );
};

export default AddressBar;
