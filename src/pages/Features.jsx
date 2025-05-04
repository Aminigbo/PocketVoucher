/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/appstore.50df6f67.svg";
import Image2 from "../assets/images/googleplay.bc4400ce.svg";
import Image1 from "../assets/images/new_images/1.png";
import { Colors } from "../components/colors";

// eslint-disable-next-line react/prop-types
function Features({ scrollRef1 }) {
  return (
    <main
      ref={scrollRef1}
      className="pt-16 md:pt-20 pb-12 md:pb-10 lg:pb-10 lg:pt-20"
      style={{ backgroundColor: Colors.background }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20 items-center gap-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Left Text Content */}
        <div
          className="text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: Colors.primary }}>
            Simplifying Payments through Vouchers tokens
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl" style={{ color: Colors.primary }}>
            Create a voucher token that can be used as means of payment for products
            and services. Share your voucher tokens with friends and spend.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center mt-10 md:justify-start gap-4 ">
            <Link to="">
              <img
                src={Image}
                alt="App Store"
                className="w-36 sm:w-40 hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <Link to="#">
              <img
                src={Image2}
                alt="Google Play"
                className="w-36 sm:w-40 hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Right Image Content */}
        <div
          className="flex justify-center max-w-6xl md:justify-end"
          data-aos="fade-left"
        >
          <img
            className="w-65 mr-0 max-w-sm md:max-w-md lg:max-w-lg"
            src={Image1}
            alt="Payment Illustration"
          />
        </div>
      </div>
    </main>
  );
}

export default Features;
