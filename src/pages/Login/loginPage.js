import React from "react";

import AuthNav from "../../component/authNav";
import PhoneInput from "../../component/phoneInput";
import FirstPage from "./firstPage";
import FourthPage from "./fourthPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <AuthNav />
      <div className="relative w-full h-full flex justify-center md:items-center mt-24 md:mt-0 z-10 ">
        <div className="w-5/6 md:w-96">
          <FourthPage />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
