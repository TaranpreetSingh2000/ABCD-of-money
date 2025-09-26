import React, { useRef, useState, useEffect } from "react";
import HeaderSidebarData from "../HeaderSidebarData";
import ScreenOverlay from "../../ScreenOverlay/ScreenOverlay";
import { createPortal } from "react-dom";

const HeaderDropdown = ({
  isDropdownOpen,
  setActiveDropdown,
  hideSecNav,
  navData,
}) => {
  const [activeSidebar, setActiveSidebar] = useState("Categories");
  const dropdownRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isDropdownOpen]);

  useEffect(() => {
    setMounted(true);
    toggleSidebar(navData?.items[0]?.title);
    return () => setMounted(false);
  }, []);

  const toggleSidebar = (sidebarName) => {
    setActiveSidebar(sidebarName);
  };

  if (!mounted) return null;

  // console.log(navData?.items);

  return createPortal(
    <>
      {isDropdownOpen && (
        <ScreenOverlay
          offsetTop={hideSecNav ? 54 : 106.5}
          onClick={() => setActiveDropdown(null)}
          zIndex={25}
        />
      )}
      <div
        ref={dropdownRef}
        className={`w-[80%] mx-auto left-[50%] translate-x-[-50%] flex max-h-0 h-[80vh] fixed z-50 bg-white m-auto overflow-hidden rounded-2xl transition-all duration-700 ${
          isDropdownOpen ? "max-h-[80vh] opacity-100" : "opacity-0"
        }`}
        style={{ top: `${hideSecNav ? "60px" : "110px"}` }}
      >
        <div className="w-[25.25%] flex flex-col overflow-y-auto text-[20px] font-semibold h-full bg-white shadow-md">
          {navData?.items.map((item, index) => {
            if (item.title == "Tools" || item.title == "Related Reads") {
              return;
            }
            return (
              <div
                key={index}
                className={`px-10 py-4 border-b border-b-gray-300 flex justify-between items-center group ${
                  activeSidebar === item.title
                    ? "text-[var(--primary)]"
                    : "text-[var(--secondary)]"
                }`}
                onMouseOver={() => toggleSidebar(item.title)}
              >
                {item.title}
                <svg
                  className={`w-4 h-4 flex-shrink-0 font-bold transition duration-500 ${
                    activeSidebar === item.title ? "rotate-45" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
                  />
                </svg>
              </div>
            );
          })}
          {navData?.items.map((item, index) => {
            return (
              <div
                key={index}
                className={`mx-10 pt-[30px] pb-[60px] ${
                  activeSidebar == item.title ? "block" : "hidden"
                } `}
              >
                <div className="mb-4 text-[24px] leading-[26px] font-normal">
                  <span>{item?.leftBtn?.firstHeading}</span>{" "}
                  <span className="text-[#8b151b] font-bold">
                    {item?.leftBtn?.secondHeading}
                  </span>
                </div>
                <a
                  href={item.leftBtn?.cta?.url}
                  className="py-[5px] px-5 text-xs font-normal cursor-pointer uppercase transition-colors duration-200 text-[#C91429] border-1 border-[#C91429] hover:text-white hover:bg-[#C91429] rounded-2xl"
                >
                  {item?.leftBtn?.cta?.text}
                </a>
              </div>
            );
          })}
        </div>
        <HeaderSidebarData navData={navData} activeSidebar={activeSidebar} />
      </div>
    </>,
    document.body
  );
};

export default HeaderDropdown;

// import React, { useRef, useState, useEffect } from "react";
// import HeaderSidebarData from "./HeaderSidebarData";
// import ScreenOverlay from "../ScreenOverlay/ScreenOverlay";
// import { createPortal } from "react-dom";

// const HeaderDropdown = ({ isDropdownOpen, setActiveDropdown, hideSecNav, navData }) => {
//   const [activeSidebar, setActiveSidebar] = useState(null);
//   const dropdownRef = useRef(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     if (isDropdownOpen) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [isDropdownOpen]);

//   useEffect(() => {
//     setMounted(true);
//     return () => setMounted(false);
//   }, []);

//   const toggleSidebar = (sidebarName) => {
//     setActiveSidebar(sidebarName);
//   };

//   if (!mounted) return null;

//   return createPortal(
//     <>
//       {isDropdownOpen && (
//         <ScreenOverlay
//           offsetTop={hideSecNav ? 54 : 106.5} // 54 : 150
//           onClick={() => setActiveDropdown(null)}
//           zIndex={25}
//         />
//       )}
//       {
//         <div
//           ref={dropdownRef}
//           className={`w-[80%] mx-auto left-[50%] translate-x-[-50%] flex max-h-0 h-[80vh] fixed z-50 bg-white m-auto overflow-hidden rounded-2xl transition-all duration-700 ${
//             isDropdownOpen ? "max-h-[80vh] opacity-100" : "opacity-0"
//           }`}
//           style={{ top: `${hideSecNav ? "60px" : "110px"}` }} // "60px" : "156px"
//         >
//           <div className="w-[25%] flex flex-col overflow-y-scroll text-[20px] font-semibold h-full bg-white shadow-md">
//             {[
//               "Housing Loans",
//               "Personal Loans",
//               "Business Loans",
//               "Education Loans",
//               "Vehicle Loans",
//               "Home Improvement Loans",
//               "Debt Consolidation Loans",
//               "Medical Loans",
//               "Agricultural Loans",
//               "Travel Loans",
//             ].map((data, index) => (
//               <div
//                 key={index}
//                 className={`px-10 py-4 border-b border-b-gray-300 flex justify-between items-center group ${
//                   activeSidebar === data
//                     ? "text-[var(--primary)]"
//                     : "text-[var(--secondary)]"
//                 }`}
//                 onMouseOver={() => toggleSidebar(data)}
//               >
//                 {data}
//                 {/* <img
//                     src="/images/icons/dropdown-menu-sidebar-arrow.svg"
//                     className={`w-4 h-4 font-bold transition duration-500 ${
//                       activeSidebar === data ? "rotate-45" : "rotate-0"
//                     }`}
//                     alt=""
//                   /> */}
//                 <svg
//                   className={`w-4 h-4 flex-shrink-0 font-bold transition duration-500 ${
//                     activeSidebar === data ? "rotate-45" : "rotate-0"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2.5}
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
//                   />
//                 </svg>
//               </div>
//             ))}
//           </div>
//           <HeaderSidebarData data={activeSidebar} />
//         </div>
//       }
//     </>,
//     document.body
//   );

//   // return (
//   //   <>
//   //     {isDropdownOpen && (
//   //       <ScreenOverlay
//   //         offsetTop={157}
//   //         onClick={() => setActiveDropdown(null)}
//   //         zIndex={25}
//   //       />
//   //     )}
//   //     {
//   //       <div
//   //         ref={dropdownRef}
//   //         className={`w-[80%] flex max-h-0 overflow-hidden h-[85vh] fixed top-[165px] z-50 bg-white m-auto rounded-2xl transition-all duration-700 ${
//   //           isDropdownOpen ? "max-h-[85vh] opacity-100" : "opacity-0"
//   //         }`}
//   //       >
//   //         <div className="w-[25%] flex flex-col text-[20px] font-semibold h-full bg-white shadow-md">
//   //           {["Housing Loans", "Personal Loans", "Business Loans"].map(
//   //             (data, index) => (
//   //               <div
//   //                 key={index}
//   //                 className={`px-10 py-4 border-b border-b-gray-300 flex justify-between items-center group text-[var(--secondary)] hover:text-[var(--primary)] hover:bg-opacity-10 ${
//   //                   activeSidebar === data
//   //                     ? "text-[var(--primary)] bg-opacity-10"
//   //                     : ""
//   //                 }`}
//   //                 onClick={() => toggleSidebar(data)}
//   //               >
//   //                 {data}
//   //                 <img
//   //                   src="/images/icons/dropdown-menu-sidebar-arrow.svg"
//   //                   className={`w-4 h-4 font-bold group-hover:rotate-45 transition duration-500 ${
//   //                     activeSidebar === data ? "rotate-45" : ""
//   //                   }`}
//   //                   alt=""
//   //                 />
//   //               </div>
//   //             )
//   //           )}
//   //         </div>
//   //         <HeaderSidebarData data={activeSidebar} />
//   //       </div>
//   //     }
//   //   </>
//   // );
// };

// export default HeaderDropdown;
