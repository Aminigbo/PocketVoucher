/* eslint-disable no-unused-vars */
import React from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";

function Box() {
  const info = [
    {
      icon: <MdCreateNewFolder className="text-4xl text-pink-600 " />,
      title: "Create merchant Voucher",
      scribe:
        "Vouchers are created in simple steps to enhance payments to the merchant",
    },
    {
      icon: <BsCreditCard2BackFill className="text-4xl text-gray-600 " />,
      title: "Virtual & Physical Cards",
      scribe:
        "Owning physical and virtual USD & NGN cards has never been this easy",
    },
    {
      icon: <GiReceiveMoney className="text-4xl text-green-500" />,
      title: "Receive Fund",
      scribe: "Receive funds in your selected currency",
    },
  ];

  return (
    <div
      className="flex flex-wrap justify-center gap-20 p-6 mb-10"
      data-aos="fade-up"
    >
      {info.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 shadow-sm flex flex-col items-start text-left w-80 hover:scale-105 transition-transform border-t-2"
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
