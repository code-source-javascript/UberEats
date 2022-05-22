import React, { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { EatContext } from "../App";
import CountryCode from "./countryCode";
const PhoneInput = () => {
  const { countryCodeBar, setCountryCodeBar } = useContext(EatContext);
  return (
    <div className="relative w-full h-full z-50 ">
      <div className="w-full h-full flex ">
        <div
          className="bg-gray-200 w-1/5 h-full mr-2 flex justify-between px-2 items-center"
          onClick={() => {
            setCountryCodeBar(!countryCodeBar);
          }}
        >
          <img
            src="./asset/images/ghanaflag.png"
            alt="here"
            className="h-5 m-auto "
          />
          <FiChevronDown />
        </div>
        <div className=" w-4/5 h-full flex  items-center">
          <input
            type="text"
            className="w-full h-full bg-gray-200 outline-black px-2"
          />
        </div>
      </div>

      <div
        className={`w-full  h-96 bg-white z-50 border overflow-scroll overflow-y-scroll ${
          countryCodeBar ? "block" : "hidden"
        }`}
      >
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
        <CountryCode
          image="./asset/images/ghanaflag.png"
          title="Ghana (Gaana)"
          code="+233"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
