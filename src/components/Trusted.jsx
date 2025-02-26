import React from "react";
import Image from "../assets/images/image(3).webp";
import Image2 from "../assets/images/nearpay.78c1a934.svg";
import Image3 from "../assets/images/SafeHaven.de40d185.svg";

function Trusted() {
  return (
    <div className="w-full py-12 px-6 md:px-16 lg:flex">
      <header className="text-2xl lg:text-5xl ml-5 mr-20 font-semibold text-center text-cyan-950 mb-6">
        Trusted By:
      </header>
      <div className="flex items-center justify-center gap-8 lg:gap-8 flex-wrap">
        <img
          src={Image3}
          alt="SafeHaven"
          className="h-14 lg:h-17 object-contain"
        />
        <img
          src={Image2}
          alt="NearPay"
          className="h-14 lg:h-17 object-contain"
        />
        <img
          src={Image}
          alt="Partner Logo"
          className="h-14 lg:h-17 object-contain"
        />
      </div>
    </div>
  );
}

export default Trusted;
