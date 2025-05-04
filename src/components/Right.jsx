/* eslint-disable no-unused-vars */
import React from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";
import { Colors } from "./colors";
import { MdAddBusiness } from "react-icons/md";
function Right() {
  return (
    <div
      className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-10 mx-auto"
      data-aos="fade-left"
    >
      <div className="text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5" style={{ color: Colors.primary }}>
          Merchants are waiting to resolve your Your Pocket Voucher tokens
        </h1>
        <p className="text-lg sm:text-lg text-gray-700 mb-6">
          Your vouchers tokens can be used as means of payment for products
          and services.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-2xs mb-4">
        <div className=" p-4 sm:p-5 rounded-full" style={{ backgroundColor: Colors.secondary }}>
          <MdAddBusiness className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-950">
            Create Voucher
          </h4>
          <p className="text-gray-600 text-base sm:text-lg">
            Create a voucher token that can be used as means of payment for products
            and services.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-sm">
        <div className="bg-green-100 p-4 sm:p-5 rounded-full" style={{ backgroundColor: Colors.secondary }}>
          <RiRefund2Line className="text-green-700 w-6 h-6 sm:w-8 sm:h-8" style={{ color: Colors.primary }} />
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-950">
            Share & Spend
          </h4>
          <p className="text-gray-600 text-base sm:text-lg">
            Share your voucher tokens with friends and spend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Right;
