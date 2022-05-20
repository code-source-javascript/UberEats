import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const AddressComponent = ({ value }) => {
  return (
    <div className="flex justify-start items-center m-3 p-2 hover:bg-gray-100  cursor-pointer ">
      <div className="p-1 rounded-full bg-gray-200">
        <HiLocationMarker className="h-5 w-5" />
      </div>

      <h1 className="mx-3 text-sm">{value}</h1>
    </div>
  );
};

export default AddressComponent;
