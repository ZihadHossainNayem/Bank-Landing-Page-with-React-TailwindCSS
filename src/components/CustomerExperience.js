import React from "react";
import { ce } from "../data/customerExperience";

const CustomerExperience = () => {
  return (
    //customer experience
    <div className="w-full bg-white">
      {/* container */}
      <div className="md:max-w-[1500px] max-w-[700px] m-auto w-full h-full px-6 sm:py-28 py-32">
        {/* top section - text */}
        <div className="text-center">
          <h1 className="md:text-5xl text-2xl sm:text-3xl font-bold">
            Creating Extraordinary Customer Experience
          </h1>
          <p className="text-gray-700 py-6 max-w-[1000px] mx-auto text-sm sm:text-base">
            Empowering customers with seamless digital banking for exceptional
            financial journeys. Unlocking convenience and innovation to redefine
            the future of banking.
          </p>
        </div>

        {/* bottom section grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-20 md:pt-32 pt-4 pb-8 px-2">
          {ce.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="itemImg" className="w-16" />
              <h1 className="py-4 text-xl font-semibold"> {item.title}</h1>
              <p className="text-gray-700 max-w-[250px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
