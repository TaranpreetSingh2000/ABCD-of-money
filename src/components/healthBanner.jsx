import React from "react";
import bannerData from "../data/healthBanner.json";

const HealthBanner = () => {
  const banner = bannerData[0]; // ✅ Access first object in the array

  return (
    <div className="relative rounded-[30px] overflow-hidden h-36">
      <img
        src="/images/protect-now-bg1.png"
        alt="Health Banner Background"
        className="absolute inset-0 h-36 w-full"
      />

      <div className="relative z-10 p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center h-full">
        <div className="max-w-xl">
          <h2 className="text-[26px] leading-[32px] text-[#111111] mb-2 font-[var(--dev_semi_bold) 	font-medium text-black mb-2">
            {banner.heading}
          </h2>
          <p className="text-[16px] leading-[17px] font-[var(--dev_med)] text-black opacity-80 overflow-hidden">
            {banner.subText}
          </p>
        </div>

        <button className="relative mt-4 sm:mt-0 px-6 py-3 border-2 cursor-pointer border-red-700 text-red-700 font-semibold rounded-full overflow-hidden transition-all duration-300 group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            {banner.buttonText}
          </span>
          <span className="absolute inset-0 bg-red-700 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 rounded-full z-0"></span>
        </button>
      </div>
    </div>
  );
};

export default HealthBanner;
