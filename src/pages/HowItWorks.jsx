/* eslint-disable no-unused-vars */
import React from "react";
import Box from "../components/Box";

// eslint-disable-next-line react/prop-types
function HowItWorks({scrollRef}) {
  return (
    <div ref={scrollRef}>
      <header
        className="mt-10 text-center text-3xl text-cyan-950 font-bold mb-5"
        data-aos="fade-up"
      >
        WHAT MORE CAN I DO?
      </header>
      <Box />
    </div>
  );
}

export default HowItWorks;
