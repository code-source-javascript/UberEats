import React from "react";

import FooterLink from "./footerLink";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-screen px-5 py-16 bg-black text-white  ">
      <div className="flex  md:flex-row flex-col justify-end md:items-end items-center pb-5 border-b  relative">
        <div className="flex flex-col md:absolute top-0 bottom-0 left-0 justify-between mb-5 md:mb-0">
          <div className="cursor-pointer flex md:ml-5  ">
            <span className="text-3xl">Uber {""}</span>
            <span className="text-3xl font-semibold"> Eats</span>
          </div>
          <div className="flex justify-start items-center md:w-1/2 w-full">
            <img
              src="./asset/images/appStore.svg"
              alt="App Store"
              className="object-cover mr-2 cursor-pointer"
            />
            <img
              src="./asset/images/playStore.png"
              alt="Play Store"
              className="h-14 object-cover cursor-pointer"
            />
          </div>
        </div>

        <div className="md:grid grid-cols-2 md:w-1/2 w-3/4 items-center flex flex-col">
          <FooterLink title="Get help" />
          <FooterLink title="Restaurants near me" />
          <FooterLink title="Buy gift cards" />
          <FooterLink title="View all cities" />
          <FooterLink title="Add your restaurant" />
          <FooterLink title="View all countries" />
          <FooterLink title="Sign up to deliver" />
          <FooterLink title="Pick-up near me" />
          <FooterLink title="Create a business account" />
          <FooterLink title="About Uber Eats" />
          <FooterLink title="Save on your first order" />
          <FooterLink title="English" />
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="flex items-center justify-center md:justify-start ">
          <FaFacebookSquare className="h-5 w-5 cursor-pointer  m-3" />
          <FaTwitter className="h-5 w-5 cursor-pointer  m-3" />
          <FaInstagram className="h-5 w-5 cursor-pointer  m-3" />
        </div>
        <div>
          <div className="flex md:justify-end justify-center mt-2">
            <FooterLink title="Pravicy Policy" />
            <FooterLink title="Terms" />
            <FooterLink title="Pricing" />
            <FooterLink title="Do not sell info (California)" />
          </div>
          <div className=" mt-2  text-sm font-light flex flex-col md:flex-row ">
            <div className="md:mb-0 mb-5 text-center" >
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="cursor-pointer hover:underline">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              apply.
            </div>
            <div className="mx-3 text-center md:text-left ">
              &copy; 2022 Uber Technology
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
