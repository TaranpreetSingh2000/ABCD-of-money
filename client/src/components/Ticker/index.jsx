"use client";
import { useState } from "react";

export default function TickerBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="w-full bg-[#FFF4D9]">
      <div className="relative max-w-7xl mx-auto flex items-center justify-center px-4 py-2">
        <p className="flex items-center gap-2 text-[15px] text-center flex-wrap">
          <img src="/noun-discount-icon.svg" />
          Give
          <strong className=" text-red-700 font-extrabold">₹10K/MONTH</strong>
          for 10 years and Get
          <strong className=" text-red-700 font-extrabold">
            ₹30.48 lakhs<sup>6</sup>
          </strong>
          lumpsum at maturity
          <button className="ml-2 bg-[#ffffff]  hover:bg-red-700 text-red-700 hover:text-white px-3 py-1 rounded-full text-xs font-semibold">
            Buy Online
          </button>
        </p>

        <img
          src="/ticker-close.png"
          className="absolute right-0 top-1/2 cursor-pointer w-4 -translate-y-1/2"
          onClick={() => setShow(false)}
          aria-label="Close banner"
        />
      </div>
    </div>
  );
}
