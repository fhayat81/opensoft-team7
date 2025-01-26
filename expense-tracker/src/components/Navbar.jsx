import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const menuClose = () => {
      setMenu(false);
    }
    window.addEventListener('click', menuClose);

    return () => {
      window.removeEventListener('click', menuClose);
    };
  }, []);


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div>
      <div className="py-2 px-4 dark:shadow-[0_4px_10px_rgba(255,255,255,0.2)] shadow-lg flex justify-between items-center dark:text-white dark:bg-black/80 ">
        <div className="mx-2">
          <p className="font-extrabold text-3xl">.EXPENSE TRACKER</p>
        </div>
        <div className="mx-2 flex items-center gap-x-3">
          <button className="text-2xl active:scale-90 transition-all duration-300" onClick={()=>{setDarkMode(!darkMode)}}>
            {darkMode?<MdOutlineLightMode />:<MdOutlineDarkMode />}
          </button>
          <button
            className="text-3xl active:scale-90 transition-all duration-300"
            onClick={(e) => {
              setMenu(!menu);
              e.stopPropagation();
            }}
          >
            {menu ? <MdOutlineCancel /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      <div>
        <div
          className={`absolute ${
            menu ? "" : "translate-x-[200px]"
          } transition-all duration-300 right-0 w-[200px] bg-white shadow-2xl p-2 h-full flex flex-col space-y-1 dark:bg-black/60 dark:text-white`}
        >
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black dark:hover:bg-slate-800/60 hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black dark:hover:bg-slate-800/60 hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black dark:hover:bg-slate-800/60 hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black dark:hover:bg-slate-800/60  hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black dark:hover:bg-slate-800/60  hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
