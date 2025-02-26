import React from "react";
import { IoHeart } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

function Left() {
  return (
    <div className="w-full max-w-lg mt-10 py-10 px-5 md:px-10 lg:mr-10">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-950 mb-5 md:mb-7">
          Send Money in a Heartbeat
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8">
          Sign up today and experience the convenience of effortless
          international transfers.
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 lg:p-10 mb-6 md:mb-8 lg:mb-10 rounded-lg shadow-sm">
          <div className="bg-gray-100 p-4 md:p-5 rounded-full">
            <IoHeart className="text-cyan-900 text-2xl md:text-3xl" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <h4 className="text-xl md:text-2xl mb-2 font-semibold text-cyan-950">
              Efficiency
            </h4>
            <p className="text-gray-700 text-base md:text-lg">
              Our platform simplifies financial transactions for maximum
              efficiency.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
          <div className="bg-green-100 p-4 md:p-5 rounded-full">
            <FaUser className="text-green-700 text-2xl md:text-3xl" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <h4 className="text-xl md:text-2xl mb-2 font-semibold text-cyan-950">
              Seamless Transfers
            </h4>
            <p className="text-gray-700 text-base md:text-lg">
              Join our community and enjoy effortless money transfers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
