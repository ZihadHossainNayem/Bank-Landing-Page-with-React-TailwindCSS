import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ServiceCard = ({ img, text }) => {
  return (
    /* service card */
    <div>
      {/* top image */}
      <div>
        <img src={img} alt={"img"} className="w-[254px]" />
      </div>
      {/* bottom text */}
      <div className="py-4">
        <button>
          <div className="flex items-center justify-between px-2  gap-2 sm:gap-8 md:gap-6">
            <p className="text-start font-semibold">{text}</p>
            <div>
              <BsArrowRightShort size={30} className="text-[#ff0088] " />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
