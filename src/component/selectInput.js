import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { BsFillBasketFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";

const SelectInput = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  const options = [
    {
      name: "Delivery",
      icon: <BsFillBasketFill className="h-4 w-4" />,
    },
    {
      name: "Pickup",
      icon: <FaWalking className="h-4 w-4" />,
    },
  ];

  return (
    <div className="w-full h-full overflow-visible bg-white ">
      {/* selected item */}
      <div
        className="h-full w-full bg-white flex justify-around items-center  cursor-pointer "
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="ml-3">{options[active].icon}</div>
        <div className="font-semibold">{options[active].name}</div>

        <div className=" text-left mr-2">
          <CgChevronDown className="font-bold  w-6 h-6" />
        </div>
      </div>
      {/* overlap */}
      <div
        className={`w-full bg-white flex-col items-start transition-all duration-300 ease-in cursor-pointer ${
          show ? "flex" : "hidden"
        }`}
      >
        {options.map((element, index) => {
          return (
            <div
              key={index}
              className="p-2 font-[500] w-full flex justify-between  items-center hover:bg-gray-100 "
              onClick={() => {
                setActive(index);
                setShow(!show);
              }}
            >
              <div className="ml-3">{element.icon}</div>
              <div className="">{element.name}</div>
              <span className="w-6 h-6"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectInput;
