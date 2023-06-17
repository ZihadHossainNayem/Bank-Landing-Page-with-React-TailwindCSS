import React from "react";

const Newsletter = () => {
  return (
    //newsletter
    <div className="w-full ">
      {/* container */}
      <div className="md:max-w-[1500px] max-w-[700px] m-auto w-full h-full px-6 ">
        {/* bg color */}
        <div className="bg-[#FCE0EF] bg-opacity-40 sm:py-28 py-16 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">Newsletter</h1>
          <p className="py-6 text-gray-700 px-4 max-w-[550px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac
            quis aliquam arcu lacus.
          </p>
          {/* email */}
          <div className="flex gap-6 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="your email..."
              className="rounded-lg py-3 w-[250px]  sm:w-[400px] border shadow focus:outline-none px-4"
            />
            <button className="bg-[#ff0088] py-3 px-6 text-white rounded-lg">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
