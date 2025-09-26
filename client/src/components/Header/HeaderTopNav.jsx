"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ScreenOverlay from "../ScreenOverlay/ScreenOverlay";
import { createPortal } from "react-dom";

const HeaderTopNav = ({
  secondaryNavigation,
  activeDropdown,
  setActiveDropdown,
  toggleDropdown,
  hideSecNav,
}) => {
  const leftNav = secondaryNavigation?.leftNav || [];
  const rightNav = secondaryNavigation?.rightNav?.[0] || null;
  const [mounted, setMounted] = useState(false);
  const [activeNonDropdown, setActiveNonDropdown] = useState("PERSONAL");

  // console.log(secondaryNavigation);
  console.log(activeDropdown);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const renderDropdown = (item) => {
    return createPortal(
      <div
        className={`absolute flex right-0 w-fit max-w-150 max-h-0 bg-white text-black rounded-2xl shadow-lg z-50 transition-opacity duration-700 ${
          activeDropdown === item.text
            ? "max-h-[85vh] p-5 opacity-100"
            : "opacity-0 max-h-0 h-0"
        }`}
        style={{ top: `${hideSecNav ? "70px" : "52px"}`, right: "125px" }}
      >
        {item.dropdown?.items?.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`min-w-[135px] ${
              activeDropdown === item.text ? "" : "hidden"
            } ${sectionIndex > 0 ? "pl-2 border-l" : ""}`}
          >
            <h4 className="font-bold mb-2 text-lg">{section.title}</h4>
            <ul className="gap-2.5 flex flex-col font-normal text-xs leading-5">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <div className="max-lg:hidden z-40 relative bg-white">
      <div className="mx-auto flex justify-end items-center max-w-[1440px]">
        <div className="flex gap-1 text-xs font-normal pr-4 py-2.5 items-center">
          {leftNav.map((item, index) => {
            // console.log(item.text);
            return (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.text);
                      }}
                      className={`px-1 py-2 flex items-center rounded-sm transition
                    ${
                      activeDropdown === item.text
                        ? "text-white bg-[#C91429]"
                        : "hover:bg-[rgba(202,31,52,0.1)] text-[#2A2E34]"
                    }`}
                    >
                      {item.text}
                      <svg
                        className={`ml-1 h-3 w-3 transform transition-transform duration-300 ${
                          activeDropdown === item.text ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.text && (
                      <ScreenOverlay
                        offsetTop={hideSecNav ? 0 : 52}
                        onClick={() => setActiveDropdown(null)}
                        zIndex={35}
                      />
                    )}

                    {renderDropdown(item)}
                  </>
                ) : (
                  <Link
                    href={item.url || "#"}
                    onClick={() => setActiveNonDropdown(item.text)}
                    className={`rounded-sm px-2.5 py-[5px] transition
                  ${
                    activeNonDropdown === item.text
                      ? "text-white bg-[#C91429]"
                      : "hover:bg-[rgba(202,31,52,0.1)] text-[#2A2E34]"
                  }`}
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {rightNav && (
          <div className="font-bold pl-[25px] py-1 border-l border-gray-400 text-sm text-[#c91429] flex gap-1">
            <img
              src={rightNav.icon?.webpUrl || rightNav.icon?.url}
              alt={rightNav.icon?.alt || ""}
              className="max-w-3"
            />
            <Link href={rightNav.url}>{rightNav.text}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTopNav;
