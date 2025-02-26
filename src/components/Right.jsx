import React from "react";
import { IoMdLock } from "react-icons/io";
import { BiGridSmall } from "react-icons/bi";

function Right() {
  return (
    <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-10 mx-auto">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-950 mb-5">
          Secure wallet for all your supported currency.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Easily receive funds to your wallet. You can create different wallets
          for each supported currency.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-sm mb-4">
        <div className="bg-gray-100 p-4 sm:p-5 rounded-full">
          <IoMdLock className="text-cyan-950 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-950">
            Fully Secured
          </h4>
          <p className="text-gray-600 text-base sm:text-lg">
            Your currency wallet is fully secure. Store your currencies with no
            worries.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-sm">
        <div className="bg-green-100 p-4 sm:p-5 rounded-full">
          <BiGridSmall className="text-green-700 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-950">
            Multiple Options
          </h4>
          <p className="text-gray-600 text-base sm:text-lg">
            Easily manage multiple currency wallets within a single account,
            we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Right;
