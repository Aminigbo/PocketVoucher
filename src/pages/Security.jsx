import React from "react";
import Image from "../assets/images/Screenshot 2025-02-20 at 10.27.11.png";
import Right from "../components/Right";
import { Colors } from "../components/colors";

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
          className="w-65 mr-30 max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
      <Right />
    </div>
  );
}

export default Security;
