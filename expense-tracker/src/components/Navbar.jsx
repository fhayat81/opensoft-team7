import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

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
  return (
    <div>
      <div className="py-2 px-4 shadow-lg flex justify-between items-center">
        <div className="mx-2">
          <p className="font-extrabold text-3xl">.EXPENSE TRACKER</p>
        </div>
        <div className="mx-2">
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
          } transition-all duration-300 right-0 w-[200px] bg-white shadow-2xl p-2 h-full flex flex-col space-y-1`}
        >
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
          <p className="px-2 hover:scale-105 active:scale-95 cursor-pointer py-1 hover:bg-black hover:text-white rounded-sm transition-all duration-300">Dashboard</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
