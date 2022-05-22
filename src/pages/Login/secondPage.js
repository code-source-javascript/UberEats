import React, { useState, useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SecondPage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    (function handleChange() {
      if (input1 === "") {
        ref1.current.focus();
      }
      if (input1 !== "") {
        ref2.current.focus();
      } else {
        setInput1(input2);
        setInput2(input3);
        setInput3(input4);
        setInput4("");
      }

      if (input2 !== "") {
        ref3.current.focus();
      } else {
        setInput2(input3);
        setInput3(input4);
        setInput4("");
      }
      if (input3 !== "") {
        ref4.current.focus();
      } else {
        setInput3(input4);
        setInput4("");
      }
      if (input4 !== "") {
        // submit here
      }
    })();

    function handleDelete(e) {
      // input 2
      if (
        ref2.current.focus &&
        (e.key === "Delete" || e.key === "Backspace") &&
        input2 === ""
      ) {
        setInput1("");
        ref1.current.focus();
      }
      // input 3
      if (
        ref3.current.focus &&
        (e.key === "Delete" || e.key === "Backspace") &&
        input3 === ""
      ) {
        setInput2("");
        ref2.current.focus();
      }
      // input 4
      if (
        ref4.current.focus &&
        (e.key === "Delete" || e.key === "Backspace") &&
        input4 === ""
      ) {
        setInput3("");
        ref3.current.focus();
      }
    }

    document.addEventListener("keydown", handleDelete);

    return () => {
      document.removeEventListener("keydown", handleDelete);
    };
  }, [input1, input2, input3, input4]);

  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl ">
          Enter the 4-digit code sent to you at *******79.
        </h1>
      </div>
      <div className="md:w-4/6 w-full flex justify-between mt-3">
        <input
          className="h-14 w-14 bg-gray-100 text-center outline-black"
          type="text"
          value={input1}
          onChange={(e) => {
            setInput1(e.target.value);
          }}
          ref={ref1}
        />
        <input
          className="h-14 w-14 bg-gray-100 text-center outline-black"
          type="text"
          value={input2}
          onChange={(e) => {
            setInput2(e.target.value);
          }}
          ref={ref2}
        />
        <input
          className="h-14 w-14 bg-gray-100 text-center outline-black"
          type="text"
          value={input3}
          onChange={(e) => {
            setInput3(e.target.value);
          }}
          ref={ref3}
        />
        <input
          className="h-14 w-14 bg-gray-100 text-center outline-black"
          type="text"
          value={input4}
          onChange={(e) => {
            setInput4(e.target.value);
          }}
          ref={ref4}
        />
      </div>
      <div className="mt-7">
        <span className="text-sm font-semibold h-10 w-44 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full flex justify-center items-center ">
          I didn't receive a code{" "}
        </span>
      </div>
      <div className="flex justify-between items-center my-10 fixed right-0 left-0 bottom-0 md:relative md:bottom-0 z-10">
        <span className=" bg-gray-100 px-3 py-3 rounded-full cursor-pointer hover:bg-gray-200 ml-5 md:ml-0">
          <HiOutlineArrowLeft className="h-7 w-7" />
        </span>
        <span className="flex mr-5 items-center justify-center px-4 py-3  bg-gray-100 rounded-full w-24 float-right my-4 hover:bg-gray-200 cursor-pointer">
          Next <BsArrowRight className="h-5 w-5 font-body ml-2" />
        </span>
      </div>
    </div>
  );
};

export default SecondPage;
