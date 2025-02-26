import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Features from "./pages/Features.jsx";
import CurrencyConverter from "./pages/CurrencyConverter.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Security from "./pages/Security.jsx";
import Payments from "./pages/Payments.jsx";
import Foot from "./pages/Foot.jsx";
import Header from "./components/Header.jsx";

function Home() {
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handles scrolling when clicked
  const handleScroll = () => {
    if (location.pathname !== "/") {
      navigate("/#how-it-works"); // Update URL without reloading
    }
    setTimeout(() => scrollToSection(scrollRef), 100); // Delay to ensure navigation
  };

  const handleScroll1 = () => {
    if (location.pathname !== "/") {
      navigate("/#benefits");
    }
    setTimeout(() => scrollToSection(scrollRef1), 100);
  };

  const handleScroll2 = () => {
    if (location.pathname !== "/") {
      navigate("/#features");
    }
    setTimeout(() => scrollToSection(scrollRef2), 100);
  };

  // Scrolls to the correct section when the URL hash changes
  useEffect(() => {
    if (location.hash === "#how-it-works") {
      scrollToSection(scrollRef);
    } else if (location.hash === "#benefits") {
      scrollToSection(scrollRef1);
    } else if (location.hash === "#features") {
      scrollToSection(scrollRef2);
    }
  }, [location]);

  return (
    <div>
      <Header
        handleScroll={handleScroll}
        handleScroll1={handleScroll1}
        handleScroll2={handleScroll2}
      />
      <main className="relative -top-30">
        <Features scrollRef1={scrollRef1} />
        <CurrencyConverter />
        <HowItWorks scrollRef={scrollRef} />
        <Security scrollRef2={scrollRef2} />
        <Payments />
      </main>
      <Foot />
    </div>
  );
}

export default Home;
