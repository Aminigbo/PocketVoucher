/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for dropdown

function Right2() {
  const faqs = [
    {
      question: "What is Pocket Voucher?",
      answer:
        "Pocket Voucher is a digital voucher system that allows users to make purchases and redeem discounts seamlessly.",
    },
    {
      question: "How do I use a Pocket Voucher?",
      answer:
        "Simply enter the voucher code at checkout to apply the discount or redeem it at participating stores.",
    },
    {
      question: "Where can I redeem my Pocket Voucher?",
      answer:
        "You can redeem your Pocket Voucher at all partnered stores listed in our app and website.",
    },
  ];

  // State to track open FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300"
          >
            {/* Question (Clickable) */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h5 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h5>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>

            {/* Answer (Dropdown Animation) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right2;
