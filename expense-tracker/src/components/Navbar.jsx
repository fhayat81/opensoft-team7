import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div className='py-2 px-4 shadow-lg flex justify-between items-center'>
      <div className='mx-2'>
        <p className='font-extrabold text-3xl'>.EXPENSE TRACKER</p>
      </div>
      <div className='mx-2'>
        <button className='text-3xl active:scale-90 transition-all duration-300' onClick={()=>{setMenu(!menu)}}>{(menu?<MdOutlineCancel />:<GiHamburgerMenu />)}</button>
      </div>
    </div>
  );
}

export default Navbar;
