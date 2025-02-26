/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../assets/images/image(3).webp";
import Image2 from "../assets/images/nearpay.78c1a934.svg";
import Image3 from "../assets/images/SafeHaven.de40d185.svg";

function Trusted() {
  return (
    <div className="w-full pb-12 px-6 md:px-16">
      <header className="text-2xl lg:text-3xl font-bold text-center text-cyan-950 mb-6">
        Trusted By:
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
        <img src={Image3} alt="SafeHaven" className="h-12 object-contain" />
        <img src={Image2} alt="NearPay" className="h-12 object-contain" />
        <img src={Image} alt="Partner Logo" className="h-12 object-contain" />
      </div>
    </div>
  );
}

export default Trusted;
