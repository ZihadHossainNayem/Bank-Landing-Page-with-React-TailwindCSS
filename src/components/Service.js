import React from "react";
import ServiceCard from "./ServiceCard";

import saving from "../assets/saving.png";
import personal from "../assets/personal.png";
import deposit from "../assets/deposit.png";
import loan from "../assets/loan.png";

const Service = () => {
  return (
    //our service
    <div className="w-full ">
      {/* container */}
      <div className="md:max-w-[1500px] max-w-[700px] m-auto w-full h-full px-6 ">
        {/* bg color */}
        <div className="bg-[#FCE0EF] bg-opacity-40 sm:py-28 py-16 ">
          {/* top section - text */}
          <div className="text-center">
            <h1 className="md:text-5xl text-2xl sm:text-3xl font-bold">
              Our Services
            </h1>
            <p className="text-gray-700 py-6 max-w-[1000px] mx-auto text-sm sm:text-base px-4 ">
              Empowering customers with seamless digital banking for exceptional
              financial journeys. Unlocking convenience and innovation to
              redefine the future of banking.
            </p>
          </div>
          {/* bottom section - services */}
          <div className="py-8 flex justify-center px-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 ">
              <ServiceCard img={saving} text="IPDC SAVING SCHEMES" />
              <ServiceCard img={personal} text="IPDC PERSONAL LOAN" />
              <ServiceCard img={deposit} text="IPDC DEPOSIT SCHEMES" />
              <ServiceCard img={loan} text="IPDC AUTO LOAN" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
