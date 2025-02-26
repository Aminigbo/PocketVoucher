/* eslint-disable no-unused-vars */
import React from "react";
import { IoHeart } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";

function Left2() {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 md:px-10 lg:px-0 py-10">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-950 mb-6">
          Three Step Payment
        </h1>
        <p className="text-lg md:text-lg text-gray-700 mb-8">
          You do not need to do more than this; It is fast, simple and secure.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="bg-gray-100 p-4 md:p-5 rounded-full">
            <IoHeart className="text-cyan-900 text-2xl md:text-3xl" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-semibold text-cyan-950">
              Verify Receiver
            </h4>
            <p className="text-gray-700 text-base md:text-lg">
              Who do you want to send money to?
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="bg-green-100 p-4 md:p-5 rounded-full">
            <FaUser className="text-green-700 text-2xl md:text-3xl" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-semibold text-cyan-950">
              Enter & Verify Amount
            </h4>
            <p className="text-gray-700 text-base md:text-lg">
              Confirm the amount you want to send.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="bg-gray-100 p-4 md:p-5 rounded-full">
            <IoMdLock className="text-cyan-950 text-2xl md:text-3xl" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-semibold text-cyan-950">
              Authorise
            </h4>
            <p className="text-gray-700 text-base md:text-lg">
              Authorise your payment and you are good to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left2;
