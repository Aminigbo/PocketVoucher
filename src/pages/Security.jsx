/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../assets/images/Group 5975.png";
import Right from "../components/Right";
import { Colors } from "../components/colors";

// eslint-disable-next-line react/prop-types
function Security({ scrollRef2 }) {
  return (
    <div
      ref={scrollRef2}
      className="flex flex-col lg:flex-row items-center justify-around gap-8 px-6 py-10 lg:px-20 lg:py-16 "
    >
      <div className="w-full ml-20 max-w-md lg:max-w-lg">
        <img
          src={Image}
          alt="Security"
          className="w-full mr-30 max-w-sm md:max-w-md lg:max-w-80"
        />
      </div>
      <Right />
    </div>
  );
}

export default Security;
