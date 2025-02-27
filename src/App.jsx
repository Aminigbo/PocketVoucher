/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Home.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {

  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:50,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/wait-list" element={<GetStarted />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
