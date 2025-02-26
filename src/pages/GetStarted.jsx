import React, { useState } from "react";
import Header from "../components/Header";
import Image from "../assets/images/modal-illustration.bfede9f5.svg";
import Contact from "../components/Contact";
import { FaCheckCircle } from "react-icons/fa";

function GetStarted() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(100);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields!");
      return;
    }

    setShowSuccess(true);
    setProgress(100);

    // Smoothly decrease progress bar over 3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 5 : 0));
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      setShowSuccess(false);
    }, 3000);

    // Clear input fields after successful submission
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-center mb-10 px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-3xl w-full text-center">
          <div className="flex justify-center mb-6">
            <img src={Image} alt="App Coming Soon" className="w-lg md:w-lg" />
          </div>

          <div className="mb-10 mt-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
              Our New App is on the Way 🚀
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Join our VIP waitlist today!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-52 bg-orange-400 text-white py-3 rounded-md font-semibold text-lg hover:bg-orange-500 transition"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-0 z-50 right-6 bg-white shadow-lg rounded-lg p-4 flex items-center gap-3 border-l-4 border-green-600">
          <FaCheckCircle className="text-green-600 w-6 h-6" />
          <span className="text-gray-800 font-semibold">
            Waitlist member added successfully 
          </span>
          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-green-400"
            style={{ width: `${progress}%`, transition: "width 0.15s linear" }}
          ></div>
        </div>
      )}

      <Contact />
    </div>
  );
}

export default GetStarted;
