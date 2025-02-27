import React from "react";
import Image from "../assets/images/Group 10.png";
import Left2 from "../components/Left2";

function Payments() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-8 px-6 py-10 lg:px-20 lg:py-16 ">
      <Left2 />
      <div
        className="w-full mr-10 ml-10 max-w-md lg:max-w-sm"
        data-aos="fade-left"
      >
        <img
          src={Image}
          alt="Payment"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Payments;
