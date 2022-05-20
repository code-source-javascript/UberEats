import React from "react";

const VerificationInput = ({ value, ref, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      ref={ref}
      onChange={onChange}
      className="h-14 w-14 bg-gray-100 text-center outline-black"
    />
  );
};

export default VerificationInput;
