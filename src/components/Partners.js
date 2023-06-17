import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import ekushe from "../assets/ekushe.png";
import summit from "../assets/summit.png";
import holcim from "../assets/holcim.png";
import westin from "../assets/westin.png";
import leaf from "../assets/leaf.png";

import { BsArrowRightShort } from "react-icons/bs";

const Partners = () => {
  return (
    //business partner
    <div className="w-full bg-white">
      {/* container */}
      <div className="md:max-w-[1500px] max-w-[700px] m-auto w-full h-full px-6 ">
        {/* top section - sponsors */}
        <div className="bg-[#FCE0EF] bg-opacity-40">
          <h1 className="text-center text-2xl tracking-[3px] py-12">
            BUSINESS PARTNERS
            <div>
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                navigation
                breakpoints={{
                  340: {
                    width: 200,
                    slidesPerView: 1,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                  1040: {
                    width: 1040,
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  dynamicBullets: true,
                  bulletClass: "swiper-pagination-bullet",
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={westin} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={summit} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={holcim} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={ekushe} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={westin} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={summit} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={holcim} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={ekushe} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={westin} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={summit} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={holcim} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12  flex justify-center">
                    <img src={ekushe} alt="" className="w-48" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </h1>
        </div>
        {/* bottom section - 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* img */}
          <div>
            <img
              src={leaf}
              alt="leafImg"
              className="h-[560px] object-cover hidden sm:flex"
            />
          </div>
          {/* text */}
          <div className="flex flex-col  justify-center py-8 px-4">
            <h1 className="font-semibold text-3xl">IPDC AT A GLANCE</h1>
            <p className="text-gray-700 max-w-[600px] text-justify py-6">
              IPDC Finance Limited (previously known as "Industrial Promotion
              and Development Company of Bangladesh Limited") is the first
              private sector financial institution of the country established in
              1981 by a distinguished group of shareholders namely International
              Finance Corporation (IFC), USA, German Investment and Development
              Company (DEG), Germany, The Aga Khan Fund for Economic Development
              (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
              UK and the Government of Bangladesh
            </p>

            {/* button */}

            <button className="text-[#ff0088] font-semibold flex items-center ">
              Read More
              <BsArrowRightShort size={30} className="text-[#ff0088] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
