"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileHeader = ({ headerData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [isBottomExpanded, setIsBottomExpanded] = useState(false);

  const [activeNavSection, setActiveNavSection] = useState("PERSONAL");
  const openActiveNav = (dropdownName) => {
    setActiveNavSection(dropdownName);
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col w-full z-50 lg:hidden">
      <div className="flex flex-row bg-white items-center">
        <div className="flex gap-2.5 flex-[0_0_190px] py-4 pl-6 pr-2">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen == !true ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            )}
          </button>
          <div className="flex items-center">
            <Link href="/" className=" h-[30px] w-[131px]">
              <Image
                width={130}
                height={30}
                src="/images/logo/aditya-birla-logo.webp"
                alt="Logo"
                className=""
              />
            </Link>
          </div>
        </div>
        <div className="bg-[#c91429] flex gap-2 justify-end w-full py-4 px-6 rounded-bl-2xl">
          <div className="flex justify-center items-center w-8 h-8 rounded-full border">
            <img
              src="https://www.adityabirlacapital.com/assets/images/call_dark.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full border">
            <img
              src="https://www.adityabirlacapital.com/assets/images/user_red.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Side Navigation */}
      <div
        className={`fixed top-16 left-0 h-[calc(100%-64px)] w-full z-50 bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" bg-gray-100">
          {/* Top Navigation Links */}
          <div className=" flex justify-between text-sm font-semibold overflow-auto items-center bg-white">
            <Link
              className={`${
                activeNavSection === "PERSONAL" ? "bg-[#c91429] text-white" : ""
              } p-3`}
              href="#"
              onClick={() => openActiveNav("PERSONAL")}
            >
              PERSONAL
            </Link>
            <Link
              className={`${
                activeNavSection === "BUSINESS" ? "bg-[#c91429] text-white" : ""
              } p-3`}
              href="#"
              onClick={() => openActiveNav("BUSINESS")}
            >
              BUSINESS
            </Link>
            <Link
              className={`${
                activeNavSection === "CORPORATES"
                  ? "bg-[#c91429] text-white"
                  : ""
              } p-3`}
              href="#"
              onClick={() => openActiveNav("CORPORATES")}
            >
              CORPORATES
            </Link>
            <Link
              className={`${
                activeNavSection === "ADVISORS" ? "bg-[#c91429] text-white" : ""
              } p-3`}
              href="#"
              onClick={() => openActiveNav("ADVISORS")}
            >
              ADVISORS
            </Link>
            <Link
              className={`${
                activeNavSection === "CAREERS" ? "bg-[#c91429] text-white" : ""
              } p-3`}
              href="#"
              onClick={() => openActiveNav("CAREERS")}
            >
              CAREERS
            </Link>
          </div>

          {/* Accordion Sections */}
          <div className="mt-4 flex gap-3 flex-col p-4">
            {["Loans", "Investments", "Insurance", "Payments"].map(
              (item, index) => (
                <div
                  key={index}
                  className="border overflow-hidden border-gray-200 rounded-xl bg-white px-4 "
                >
                  <button
                    onClick={() => toggleSection(item)}
                    className="flex items-center justify-between w-full py-3 text-sm  bg-white border-b"
                  >
                    <div className="flex items-center font-semibold">
                      {/* Placeholder icon */}
                      <span className="mr-2">
                        <img
                          src="https://www.adityabirlacapital.com/-/media/abccorp/data/media/img/nav-ico3.svg?extension=webp"
                          alt=""
                        />
                      </span>
                      {item}
                    </div>
                    <span className="text-red-600 text-lg transition duration-500">
                      {openSection === item ? "-" : "+"}
                    </span>
                  </button>
                  {openSection === item && (
                    <div className="py-4 text-sm ">
                      <h2 className="text-lg font-semibold ">Housing Loans</h2>
                      <p className=" leading-[30px] text-gray-700 ">
                        Details about {item}
                      </p>
                      <p className=" leading-[30px] text-gray-700 ">
                        Details about {item}
                      </p>
                      <p className=" leading-[30px] text-gray-700 ">
                        Details about {item}
                      </p>
                      <p className=" leading-[30px] text-gray-700 ">
                        Details about {item}
                      </p>
                      <p className=" leading-[30px] text-red-600 underline cursor-pointer">
                        View All
                      </p>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <div className=" flex flex-col p-4 pt-0">
            {["Tools", "Quick Services", "About Us"].map((item, index) => (
              <div
                key={index}
                className=" overflow-hidden border-gray-200  px-4 "
              >
                <button
                  onClick={() => toggleSection(item)}
                  className="flex items-center justify-between w-full py-1 text-sm"
                >
                  <div className="flex text-red-600 items-center font-semibold">
                    {/* Placeholder icon */}
                    {item}
                  </div>
                  <span className="text-red-600 text-lg transition duration-500">
                    {openSection === item ? "-" : "+"}
                  </span>
                </button>
                {openSection === item && (
                  <div className="py-4 text-sm ">
                    <h2 className="text-lg font-semibold ">Housing Loans</h2>
                    <p className=" leading-[30px] text-gray-700 ">
                      Details about {item}
                    </p>
                    <p className=" leading-[30px] text-gray-700 ">
                      Details about {item}
                    </p>
                    <p className=" leading-[30px] text-gray-700 ">
                      Details about {item}
                    </p>
                    <p className=" leading-[30px] text-gray-700 ">
                      Details about {item}
                    </p>
                    <p className=" leading-[30px] text-red-600 underline cursor-pointer">
                      View All
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 font-semibold ">
            <button className="py-3 uppercase px-8 border rounded-full bg-white text-red-700 border-red-700">
              Get In Touch
            </button>
            <button className="py-3 uppercase px-14 border rounded-full bg-red-700 text-white ">
              Login
            </button>
          </div>
        </div>

        {/* Bottom Expandable Section */}
        <div
          className={`fixed z-[5555] bottom-0 left-0 w-full bg-white border-t-2 border-red-500 rounded-2xl  p-4 cursor-pointer flex flex-col ${
            isBottomExpanded ? "h-[45vh]" : "h-11"
          } transition-all duration-300`}
          onClick={() => setIsBottomExpanded((prev) => !prev)}
        >
          <div className="flex items-center justify-center gap-2 relative w-full h-fit">
            <span className=" absolute left-1/2 -translate-x-1/2 -top-8 shadow-2xl bg-red-600 rounded-full text-white p-1">
              {isBottomExpanded ? "↓" : "↑"}
            </span>
            <span className="text-xs font-bold  text-red-600">DOWNLOAD</span>
            <span>
              <img
                src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/mob_app_ico.ashx"
                className="max-w-5"
                alt=""
              />
            </span>
          </div>
          <div className="flex flex-col text-center mt-4 ">
            <h2 className="text-2xl font-semibold mb-2">
              Download the ABCD app
            </h2>
            <p className="text-xs px-5 mb-1.5">
              Unlock Financial Tools, Investment Insights, And Expert Guidance –
              All In One Convenient App !
            </p>
            <p className="mb-4">
              Visit Our{" "}
              <span className="text-red-700 font-semibold underline">ABCD</span>{" "}
              Page
            </p>
            <div className="flex justify-between  text-white">
              <button className="flex items-center uppercase bg-red-700 rounded-full gap-2 p-4">
                <img
                  src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/playstore.ashx"
                  alt=""
                />{" "}
                play Store
              </button>
              <button className="flex items-center bg-red-700 uppercase rounded-full gap-2 p-4">
                <img
                  src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/downloadapp/apple-store.ashx"
                  alt=""
                />{" "}
                AppStore
              </button>
            </div>
          </div>
          {/* {isBottomExpanded && (
            <div className="mt-4 text-sm z-[555555] w-full">
              <p>Download our mobile app to explore more features.</p>
              <button className="mt-2 p-2 bg-white text-red-600 rounded-md">Get App</button>
            </div>
          )} */}
        </div>
      </div>

      {/* Background Overlay */}
      {/* {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )} */}
    </div>
  );
};

export default MobileHeader;
