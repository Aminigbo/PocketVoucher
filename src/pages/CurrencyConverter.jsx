/* eslint-disable no-unused-vars */
import React from "react";
import Left from "../components/Left";
import Image from "../assets/images/new_images/3.png";

function CurrencyConverter() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-around w-full px-5 py-10 md:px-10 lg:px-10 md:py-16 lg:py-10 gap-6 md:gap-10">
      <Left />
      <div
        className="w-full mt-30 mr-10 ml-10 max-w-md lg:max-w-sm"
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

export default CurrencyConverter;
