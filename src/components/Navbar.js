import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    //navbar
    <div className="w-full h-[120px] bg-white ">
      {/* container */}
      <div className="md:max-w-[1500px] max-w-[700px] w-full h-full px-6 m-auto flex items-center justify-between">
        {/* left section ,logo section */}
        <div className="w-32">
          <img src={logo} alt="" />
        </div>
        {/* middle section , menu section */}
        <div className="hidden md:flex">
          <ul className="flex gap-8 cursor-pointer tracking-[2px]">
            <li>RETAIL</li>
            <li>SME</li>
            <li>CORPORATE</li>
            <li>ABOUT US</li>
            <li>CAMPAIGNS</li>
            <li>RETAIL</li>
          </ul>
        </div>

        {/* right section */}
        <div className="hidden md:flex gap-8">
          {/* search */}
          <button>
            <BsSearch size={25} className="my-auto text-[#ff0088]" />
          </button>
          {/* button */}

          <button className="my-auto bg-[#ff0088] py-3 px-6 text-white tracking-[2px] rounded-lg">
            iSERVICE
          </button>
        </div>
        {/* menu button */}
        <div onClick={() => setMenu(!menu)} className="md:hidden">
          {menu ? <MdMenu size={30} /> : <MdClose size={30} />}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          menu
            ? "hidden"
            : "md:hidden w-full h-screen flex flex-col z-9999 absolute border bg-[#ffedf7] pt-[80px]  items-center"
        }
      >
        {/* menus */}
        <ul className="flex flex-col items-center gap-8 text-3xl pb-12">
          <li>RETAIL</li>
          <li>SME</li>
          <li>CORPORATE</li>
          <li>ABOUT US</li>
          <li>CAMPAIGNS</li>
          <li>RETAIL</li>
        </ul>

        {/* buttons */}
        <div className="py-12">
          {/* button */}

          <button className="bg-[#ff0088] py-3 px-20 text-white tracking-[2px] rounded-lg">
            iSERVICE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
