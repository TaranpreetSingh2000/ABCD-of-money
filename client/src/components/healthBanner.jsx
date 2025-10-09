"use client";
import React from "react";
import bannerData from "../data/healthBanner.json";

const HealthBanner = () => {
  const banner = bannerData[0];

  return (
    <div className="relative md:w-[70%] gap-5 rounded-3xl overflow-hidden flex flex-col md:flex-row items-start justify-between md:items-center px-[30px] py-[28px]">
      {/* Background Image */}
      <img
        src="/images/protect-now-bg1.png"
        alt="Health Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col md:max-w-md justify-center gap-2">
        <h2 className="text-[#111111] font-semibold text-lg md:text-[26px] leading-6">
          {banner.heading}
        </h2>
        <p className="text-[#111111] font-normal mb-4 md:mb-0 text-xs md:text-[16px] opacity-90">
          {banner.subText}
        </p>
      </div>

      {/* Button */}
      <button className="relative z-10 md:py-3 md:px-8 py-3 px-8 rounded-[40px] border border-[#C91429] text-[#C91429] font-normal text-xs md:text-sm flex justify-center items-center overflow-hidden transition-all duration-300 group">
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          {banner.buttonText}
        </span>
        <span className="absolute inset-0 bg-[#C91429] transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded-[40px] z-0"></span>
      </button>
    </div>
  );
};

export default HealthBanner;
