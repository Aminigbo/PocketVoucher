import React from "react";
import { PiSquaresFourBold } from "react-icons/pi";
import { BsHandbagFill } from "react-icons/bs";
import { HiDocumentCurrencyEuro } from "react-icons/hi2";

function Box() {
  const info = [
    {
      icon: <PiSquaresFourBold className="text-4xl text-pink-600 "  />,
      title: "Create multi-currencies",
      scribe:
        "View wallet, select and create your desired currency from a list of currencies",
    },
    {
      icon: <HiDocumentCurrencyEuro className="text-4xl text-gray-600 " />,
      title: "Convert",
      scribe:
        "Select your desired currency pairs for exchange, convert at the best rate",
    },
    {
      icon: <BsHandbagFill className="text-4xl text-green-500" />,
      title: "Get Funded",
      scribe:
        "Receive funds in your selected currency wallet or external account",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-20 p-6 mb-10">
      {info.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-lg flex flex-col items-start text-left w-80 hover:scale-105 transition-transform border-t-2"
        >
          <div className="mb-5 mt-5">{item.icon}</div>
          <h4 className="text-xl font-semibold text-cyan-950 mb-5">
            {item.title}
          </h4>
          <p className="text-gray-600 mb-5 text-lg">{item.scribe}</p>
        </div>
      ))}
    </div>
  );
}

export default Box;
