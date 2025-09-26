"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa";

// Slides data
const slides = [
  {
    title: "Invest in Mutual Funds",
    image: "/images/invest_mf.png",
    buttonText: "KNOW MORE",
  },
  {
    title: "Secure Your Retirement",
    image: "/images/invest_mf.png",
    buttonText: "KNOW MORE",
  },
  {
    title: "Grow Your Wealth",
    image: "/images/invest_mf.png",
    buttonText: "KNOW MORE",
  },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#fff7e6] h-40 rounded-xl flex items-center justify-between px-6">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {slide.title}
                </h2>
                <button className="mt-2 flex cursor-pointer items-center text-red-600 font-bold text-sm">
                  {slide.buttonText} <FaArrowRight className="ml-1" />
                </button>
              </div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-20 h-20 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
