import './App.css'
import Navbar from './components/Navbar'
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
    <div className='min-h-screen dark:bg-black'>
      <Navbar/>
    </div>
  )
}

export default App
