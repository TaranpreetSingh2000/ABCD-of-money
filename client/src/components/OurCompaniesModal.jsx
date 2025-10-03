"use client";
import React, { useState } from "react";
import companies from "../constant/ourComanyData";
import Link from "next/link";
export default function OurCompaniesModal({ isOpen, onClose }) {
  return (
    <>
      <div className="relative z-50">
        <div onClick={onClose} className={`fixed inset-0 bg-black transition-opacity duration-500 ${isOpen ? "opacity-55" : "opacity-0 pointer-events-none"}`}></div>
          
        <div
          className={`fixed top-0 h-full max-w-lg w-full bg-white shadow-lg transform transition-all duration-500 ease-in-out p-12 ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          <button onClick={onClose} className="text-3xl absolute top-5 right-5">
             <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e" alt="" className="w-3.5 h-3.5" />
          </button>
          <div className="w-full">
            <h1 className="text-4xl fixed bg-white w-full font-semibold text-black mb-3.5">
              Our Companies
            </h1>
          </div>
          <div className="mt-14 overflow-y-auto max-h-[calc(100vh-152px)]">
            {companies.map((item, index) => (
              <Link href="#" key={index}>
                <div className="group hover:bg-[#FFF6F7] hover:border-red-700 grid grid-cols-[38px_68%_auto] h-[60px] items-center gap-2.5 px-5 border mb-3.5 rounded-xl">
                  <span>
                    <img className="max-w-5" src={item.iconURL} alt="" />
                  </span>
                  <div className="max-w-[80%] text-base leading-5 group-hover:text-red-700">
                    {item.name}
                  </div>
                  <img
                    className="max-w-5 transition-all duration-500 group-hover:ease-in-out group-hover:rotate-45"
                    src="https://www.adityabirlacapital.com/assets/images/arrow_up_reidrect.svg"
                    alt="img"
                  />
                </div>
              </Link>
            ))}
          </div>
          {/* <div ></div> */}
        </div>
      </div>
    </>
  );
}
