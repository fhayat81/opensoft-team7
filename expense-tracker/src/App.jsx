import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import BalanceAndHistory from "./pages/BalanceAndHistory";
import Settings from "./pages/Settings";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 300, // Set default animation duration (optional)
      easing: "ease-in-out", // Set default easing (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);

  return (
    <div className="min-h-screen dark:bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/balance" element={<BalanceAndHistory />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
