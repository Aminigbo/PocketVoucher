import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/image (1).webp";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="w-full bg-gray-100 py-8 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row border-b-2 pb-5 lg:items-center md:items-center md:justify-between md:space-x-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2 text-center md:text-left">
          <strong className="text-2xl font-bold text-gray-900 pb-5">
            LEGALS
          </strong>
          <p className="text-gray-700 text-lg hover:text-red-400 transition">
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </p>
          <p className="text-gray-700 text-lg hover:text-red-400 transition">
            <Link to="/privacy-policy">Privacy and Policy</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <strong className="text-2xl font-bold text-gray-900 pb-5">
              United States
            </strong>
            <p className="text-gray-700 text-lg">
              2055 Limestone Rd STE 200-C, Wilmington, DE, Wilmington, US, 19808
              (6344054)
            </p>
          </div>

          <div>
            <strong className="text-2xl font-bold text-gray-900">
              United Kingdom
            </strong>
            <p className="text-gray-700 text-lg">
              Building 3, City West Business Park, Gelderd Road, Leeds, England,
              LS12 6LX (13982798)
            </p>
          </div>

          <div>
            <strong className="text-2xl font-bold text-gray-900">
              Nigeria
            </strong>
            <p className="text-gray-700 text-lg">
              A10, Mammy Market, Ibereko Army Barracks, Lagos, Lagos State,
              Nigeria (1898944)
            </p>
          </div>
        </div>

        <div
          id="footer"
          className="flex flex-wrap sm:flex-row justify-center items-center lg:gap-6 p-4 rounded-lg mt-6 md:mt-0"
        >
          <img
            src={Image}
            alt="StartupBootcamp Logo"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
          <div className="text-center md:text-left">
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              Backed by
            </p>
            <p className="font-bold text-gray-900 text-lg md:text-xl">
              StartupBootcamp
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between border-b-2 w-full mt-5 max-w-7xl mx-auto text-center md:text-left pb-5">
        <p className="text-sm md:text-base text-gray-900">
          © 2024 Monirates. All Rights Reserved
        </p>

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
        <p className="text-lg sm:text-base">
          Monirates Limited is registered and regularised by the Financial
          Transactions and Report Analysis Centre of Canada as a Money Service
          Business. MSB registration number:
          <span className="text-gray-800 font-bold"> M24750531</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
