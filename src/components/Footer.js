import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    //footer
    <div className="w-full bg-white">
      {/* container */}
      <div className="md:max-w-[1500px] max-w-[700px] m-auto w-full h-full px-6 py-12 ">
        {/* grid */}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-12">
          {/* 1st grid */}
          <div>
            <h1 className="font-semibold text-xl">About the Company</h1>
            <p className="py-8 text-gray-700">
              Learn To Love Growth And Change And You Will Be A Success.
              Microsoft Patch
            </p>
            {/* socials */}
            <div className="flex gap-4">
              <GrFacebookOption size={25} className="text-[#5398ff]" />
              <AiFillYoutube size={25} className="text-[#ff1d1d]" />
              <AiOutlineInstagram size={25} className="text-[#ff0088]" />
              <FaLinkedinIn size={25} className="text-[#4A71FB]" />
            </div>
            <p className="flex pt-8 items-center ">
              <IoCallOutline size={25} className="text-[#ff0088]" />
              <span className=" pl-4 font-semibold ">16521</span>
            </p>
          </div>

          {/* 2nd grid */}
          <div>
            <h1 className="font-semibold text-xl">Products</h1>
            <ul className="py-4 space-y-4 text-gray-700">
              <li>CSR Activities</li>
              <li>Green Banking</li>
              <li>News</li>
              <li>Ongoing Campaign</li>
              <li>Updates</li>
            </ul>
          </div>

          {/* 3rd grid */}
          <div>
            <h1 className="font-semibold text-xl">Get Started</h1>
            <ul className="py-4 space-y-4 text-gray-700">
              <li>Career</li>
              <li>Contact Us</li>
              <li>Government Securities</li>
              <li>Examples</li>
              <li>NIS</li>
            </ul>
          </div>

          {/* 4th grid */}
          <div>
            <h1 className="font-semibold text-xl">Products</h1>
            <ul className="py-4 space-y-4 text-gray-700">
              <li>IPDC at a Glance</li>
              <li>Mission, VIsion & Values</li>
              <li>Corporate Governanace</li>
              <li>Shareholders</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
