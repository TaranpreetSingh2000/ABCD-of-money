"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ScreenOverlay from "../ScreenOverlay/ScreenOverlay";

const HeaderBottomNav = ({
  subCategoryNavigation,
  activeDropdown,
  setActiveDropdown,
  toggleDropdown,
}) => {
  const links = subCategoryNavigation?.links || [];
  const dropdownRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // JSON data from previous response
  const navData = {
    items: [
      {
        heading: "Tax Filing Tips",
        totalBlogs: 70,
        subItems: [
          { text: "Deductions And Credits", blogsCount: 10 },
          { text: "Tax Filing Deadlines", blogsCount: 10 },
          { text: "Common Mistakes To Avoid", blogsCount: 10 },
          { text: "Organizing Tax Documents", blogsCount: 10 },
          { text: "Maximizing Refunds", blogsCount: 10 },
        ],
      },
      {
        heading: "Tax Filing Tips",
        totalBlogs: 70,
        subItems: [
          { text: "Year-End Tax Planning", blogsCount: 10 },
          { text: "Retirement Planning", blogsCount: 10 },
          { text: "Estate Planning", blogsCount: 10 },
          { text: "Tax-Efficient Investments", blogsCount: 10 },
          { text: "Capital Gains And Losses Management", blogsCount: 10 },
        ],
      },
      {
        heading: "Tax Filing Tips",
        totalBlogs: 70,
        subItems: [
          { text: "Understanding Tax Codes", blogsCount: 10 },
          { text: "Recent Tax Law Changes", blogsCount: 10 },
          { text: "Compliance And Reporting", blogsCount: 10 },
          { text: "Tax Audits And Investigations", blogsCount: 10 },
          { text: "International Taxation Issues", blogsCount: 10 },
        ],
      },
    ],
  };

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // useEffect(() => {
  //   if (activeDropdown) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  //   return () => document.body.classList.remove("no-scroll");
  // }, [activeDropdown]);

  const handleLinkClick = (dataTarget) => {
    toggleDropdown(dataTarget);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="bg-white max-lg:hidden z-20">
        <div className="BottomNav mx-auto max-w-[1440px] flex justify-start pl-[140px] py-[15px]">
          <div className="flex text-sm items-center gap-7.5">
            {links.map((link, index) => {
              // console.log(
              //   link.dataTarget,
              //   "BottomHeader ---------------------------"
              // );
              return (
                <div key={index}>
                  <button
                    key={index}
                    onClick={() =>
                      handleLinkClick(`bottom-nav-${link.dataTarget}`)
                    }
                    className={`relative font-normal text-black hover:text-[#c91429] transition-colors ${
                      activeDropdown === `bottom-nav-${link.dataTarget}`
                        ? "active !text-[#c91429]"
                        : ""
                    }`}
                  >
                    {link.text}
                  </button>
                  {createPortal(
                    <>
                      {activeDropdown === `bottom-nav-${link.dataTarget}` && (
                        <ScreenOverlay
                          offsetTop={154}
                          onClick={() => setActiveDropdown(null)}
                          zIndex={25}
                        />
                      )}
                      <div
                        ref={dropdownRef}
                        className={`w-[80%] mx-auto left-[50%] overflow-y-auto translate-x-[-50%] max-h-0 h-[80vh] fixed z-50 bg-white overflow-hidden rounded-2xl transition-all duration-700 ${
                          activeDropdown === `bottom-nav-${link.dataTarget}`
                            ? "max-h-[60vh] opacity-100"
                            : "opacity-0"
                        }`}
                        style={{ top: "160px" }}
                      >
                        <div className="p-10 overflow-y-auto">
                          {navData?.items.map((item, index) => (
                            <div key={index} className="mb-6">
                              <div className="">
                                <Link
                                  href="#"
                                  className="text-lg font-normal opacity-80 text-[#111]"
                                >
                                  {item.heading}{" "}
                                  <span className="text-xs">
                                    ({item.totalBlogs} Blogs)
                                  </span>
                                </Link>
                              </div>
                              <div className="flex flex-wrap pt-2.5 pl-2">
                                {item.subItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href="#"
                                    className={`relative whitespace-pre opacity-80 flex items-center text-sm text-[#111] font-normal py-1 ${
                                      subIndex < item.subItems.length - 1
                                        ? "after:content-[''] after:inline-block after:w-px after:h-6 after:bg-[#AEB0B3] after:mx-4"
                                        : ""
                                    }`}
                                  >
                                    {subItem.text}{" "}
                                    <span className="text-xs">
                                      ({subItem.blogsCount} Blogs)
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>,
                    document.body
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottomNav;

// "use client";
// import Link from "next/link";
// import { useState } from "react";

// const HeaderBottomNav = ({
//   subCategoryNavigation,
//   activeDropdown,
//   setActiveDropdown,

// }) => {
//   const [activeTarget, setActiveTarget] = useState(null);
//   const links = subCategoryNavigation?.links || [];

//   const handleLinkClick = (dataTarget) => {
//     setActiveTarget((prev) => (prev == dataTarget ? null : dataTarget));
//   };

//   return (
//     <div className="bg-white z-20">
//       <div className="BottomNav mx-auto max-w-[1440px] flex justify-start pl-[140px] py-[15px]">
//         <div className="flex text-sm items-center gap-10">
//           {links.map((link, index) => {
//             const isActive = activeTarget === link.dataTarget;

//             return (
//               <>
//                 <button
//                   key={index}
//                   onClick={() => handleLinkClick(link.dataTarget)}
//                   className={`relative font-normal text-black hover:text-[#c91429] transition-colors ${
//                     isActive ? "active" : ""
//                   }`}
//                   data-target={link.dataTarget}
//                 >
//                   {link.text}
//                 </button>
//                 <SecondaryDropdown
//                   setActiveDropdown={setActiveDropdown}
//                   isDropdownOpen={activeDropdown === `${navItem.text}`}
//                   hideSecNav={hideSecNav}
//                   navData={navData}
//                 />
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderBottomNav;
