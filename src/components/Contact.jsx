/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="w-full bg-gray-100 py-8 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:justify-between border-b-1 border-b-gray-200 w-full max-w-7xl mx-auto text-center md:text-left pt-5 pb-5">
        <div className="flex">
          <p className="hover:underline mr-5">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </p>
          <p className="hover:underline ">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
        <div className="flex space-x-5 mt-3 md:mt-0">
          <Link to="">
            <FaFacebookSquare className="text-xl md:text-2xl text-red-500 hover:text-blue-500 transition" />
          </Link>
          <Link to="">
            <FaLinkedin className="text-xl md:text-2xl text-red-500 hover:text-blue-500 transition" />
          </Link>
          <Link to="">
            <FaSquareXTwitter className="text-xl md:text-2xl text-red-500 hover:text-blue-500 transition" />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-100 text-gray-800 py-4 px-6 text-center">
        <p className="text-sm md:text-base text-gray-900">
          © 2025 Pocket Voucher. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Contact;
