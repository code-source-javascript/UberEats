import React, { useContext, useRef, useEffect } from "react";

import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { EatContext } from "../App";

const SideNav = () => {
  const { sideBar, setSideBar } = useContext(EatContext);
  const closeSideRef = useRef(null);

  useEffect(() => {
    function closeSideBar(event) {
      if (
        closeSideRef.current &&
        !closeSideRef.current.contains(event.target)
      ) {
        setSideBar(false);
      }
    }

    document.addEventListener("mousedown", closeSideBar);
    return () => {
      document.removeEventListener("mousedown", closeSideBar);
    };
  }, [closeSideRef, setSideBar]);

  return (
    <div
      className={`fixed left-0  top-0 bottom-0 right-0 z-50 flex ${
        sideBar ? "flex" : "hidden"
      }`}
    >
      <div
        className="h-screen w-1/2 sm:w-1/3 lg:w-1/5 bg-white "
        ref={closeSideRef}
      >
        <div className="h-full w-full flex flex-col justify-between ">
          {/* top */}
          <div>
            {/* account */}
            <div className="mt-7">
              <div
                className="px-5 py-3 bg-black text-white mx-3 my-2 text-lg cursor-pointer flex justify-center items-center hover:opacity-75 "
                onClick={() => {
                  setSideBar(false);
                }}
              >
                Sign up
              </div>
              <div
                className="px-5 py-3 bg-gray-200 text-black mx-3 my-2 text-lg cursor-pointer flex justify-center items-center hover:bg-gray-300"
                onClick={() => {
                  setSideBar(false);
                }}
              >
                Log in
              </div>
            </div>
            {/* links */}
            <div className="mt-7">
              <h1
                className="text-sm  my-4 mx-4 cursor-pointer hover:text-gray-500"
                onClick={() => {
                  setSideBar(false);
                }}
              >
                Create a business account
              </h1>
              <h1
                className="text-sm  my-4 mx-4 cursor-pointer hover:text-gray-500"
                onClick={() => {
                  setSideBar(false);
                }}
              >
                Add your restaurant
              </h1>
              <h1
                className="text-sm  my-4 mx-4 cursor-pointer hover:text-gray-500"
                onClick={() => {
                  setSideBar(false);
                }}
              >
                Sign up to deliver
              </h1>
            </div>
          </div>
          {/* bottom */}
          <div className="mb-10 mx-5">
            <div className="flex items-center ">
              <img
                src="./asset/images/logoEat.svg"
                alt="logo"
                className="h-14 w-14"
              />
              <h1 className="ml-3 text-lg">
                There is more to love in the app.
              </h1>
            </div>
            <div className="flex   items-center mt-5">
              <div
                className="flex mr-2 px-4 py-3 bg-gray-200 rounded-full items-center cursor-pointer hover:bg-gray-300"
                onClick={() => {
                  setSideBar(false);
                }}
              >
                <AiFillApple className="h-4 w-4 mr-1" />
                <h1 className="text-sm">iPhone</h1>
              </div>
              <div
                className="flex ml-2 px-4 py-3 bg-gray-200 rounded-full items-center cursor-pointer hover:bg-gray-300"
                onClick={() => {
                  setSideBar(false);
                }}
              >
                <AiFillAndroid className="h-4 w-4 mr-1" />
                <h1 className="text-sm">Android</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-1/2 sm:w-2/3 lg:w-4/5 opacity-40"></div>
    </div>
  );
};

export default SideNav;
