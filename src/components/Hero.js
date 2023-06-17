import React from "react";
import hero from "../assets/hero.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Hero = () => {
  return (
    //hero
    <div className="w-full bg-white">
      {/* container */}
      <div
        className="md:max-w-[1500px] max-w-[700px] m-auto w-full h-full px-6 grid md:grid-cols-2 items-center"
        style={{ height: "calc(100vh - 120px)" }}
      >
        {/* left grid */}
        <div className=" pr-12">
          {/* text */}
          <div className="pt-8 md:pt-0">
            <h1 className="font-bold md:text-7xl text-4xl ">
              Chase Your Dream with us
            </h1>
            <p className="py-8 text-justify text-gray-700">
              The harder you work for something, the greater you will feel when
              you achieve it.
            </p>
          </div>

          {/* buttons */}
          <div className="flex gap-8">
            <button className="bg-[#ff0088] py-3 px-6 text-white rounded-lg">
              APPLY ONLINE
            </button>
            <button className="border border-[#ff0088] py-3 px-6 rounded-lg text-[#ff0088]">
              LOAN CALCULATOR
            </button>
          </div>

          {/* socials and contact */}
          <div className="flex md:pt-32 pt-8 items-center">
            {/* contact */}
            <div className="flex gap-4 ">
              <IoCallOutline size={25} className="text-[#ff0088]" />
              <p className="border-r pr-4 font-semibold ">16521</p>
            </div>
            {/* socials */}
            <div className="flex pl-4 gap-4">
              <GrFacebookOption size={25} className="text-[#5398ff]" />
              <AiFillYoutube size={25} className="text-[#ff1d1d]" />
              <AiOutlineInstagram size={25} className="text-[#ff0088]" />
              <FaLinkedinIn size={25} className="text-[#4A71FB]" />
            </div>
          </div>
        </div>
        {/* right grid */}
        <div className="md:order-last order-first bg-[#FFEAF5] ">
          <img src={hero} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
