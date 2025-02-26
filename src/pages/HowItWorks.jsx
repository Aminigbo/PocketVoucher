import React from "react";
import Box from "../components/Box";

function HowItWorks({scrollRef}) {
  return (
    <div ref={scrollRef}>
      <header className="mt-10 text-center text-3xl text-cyan-950 font-medium mb-5">
        How monirates work?
      </header>
      <p className="mb-10 text-center text-xl">
        Easy and simple as 5 Clicks to transfer money
      </p>
      <Box />
    </div>
  );
}

export default HowItWorks;
