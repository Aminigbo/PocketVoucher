import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/images/image (4).webp";
import { Colors } from "./colors";

function Header({ handleScroll, handleScroll1, handleScroll2 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Change background on scroll
  useEffect(() => {
    const headerHandleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", headerHandleScroll);
    return () => window.removeEventListener("scroll", headerHandleScroll);
  }, []);

  // Function to handle navigation and scrolling
  const handleNavigation = (scrollFunction) => {
    if (location.pathname !== "/") {
      navigate("/"); // Go to homepage
      setTimeout(() => {
        scrollFunction(); // Scroll after navigating
      }, 300); // Delay to ensure page load
    } else {
      scrollFunction();
    }
    setMenuOpen(false); // Close mobile menu
  };

  // Function to navigate to the waitlist page
  const handleWaitlistNavigation = () => {
    navigate("/wait-list");
    setMenuOpen(false); // Close the menu
  };

  return (
    <header
      className={`sticky top-0 w-full z-40 px-6 py-4 transition-all duration-300 ${
        scrolling ? "bg-white opacity-85 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="ml-4 md:ml-20">
          <img src={Image} alt="Logo" className="h-16 w-auto" />
        </div>

        <button
          className="md:hidden text-black bg-gray-200 p-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <nav
          className={`absolute right-0 left-0 top-16 w-full md:static md:w-auto md:flex md:items-center md:space-x-6 transition-all mr-20 duration-300 ${
            menuOpen
              ? "bg-white shadow-lg py-4"
              : "hidden md:flex md:bg-transparent md:shadow-none"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
            <li>
              <span
                onClick={() => handleNavigation(handleScroll)}
                className="text-black hover:text-red-400 block py-2 md:py-0 cursor-pointer"
              >
                How It Works
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavigation(handleScroll1)}
                className="text-black hover:text-red-400 block py-2 md:py-0 cursor-pointer"
              >
                Benefits
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavigation(handleScroll2)}
                className="text-black hover:text-red-400 block py-2 md:py-0 cursor-pointer"
              >
                Monirates Features
              </span>
            </li>
          </ul>

          <button
            onClick={handleWaitlistNavigation}
            style={{ backgroundColor: Colors.primary }}
            className="text-white px-4 py-3 rounded-md w-full md:w-auto mt-4 md:mt-0"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
