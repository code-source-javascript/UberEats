import React from "react";

const FooterLink = ({ title }) => {
  return (
    <h1 className=" text-sm font-light hover:underline m-2 cursor-pointer">
      {title}
    </h1>
  );
};

export default FooterLink;
