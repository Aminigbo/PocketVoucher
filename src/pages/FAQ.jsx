/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../assets/images/Screenshot 2025-02-20 at 10.27.11.png";
import Right2 from "../components/Right2";

function FAQ() {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex justify-between flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left - Image */}
        <div className="w-full lg:w-96 flex justify-center">
          <img
            src={Image}
            alt="FAQ Banner"
            className="w-64 lg:w-70 "
          />
        </div>

        {/* Right - FAQ Content */}
        <div className="w-full lg:w-1/2">
          <Right2 />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
