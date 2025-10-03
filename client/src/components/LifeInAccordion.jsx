"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function TaxBenefitsAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
    { title: "Understanding The Importance Of Life Insurance: A Comprehensive Guide", link: "#" },
  ];

  return (
    <div className="flex justify-center p-4">
      {/* Accordion */}
      <div className="relative group w-[768.4px] rounded-2xl border border-gray-200 hover:border-[#c91429] bg-gray-50 shadow-sm overflow-hidden transition-all duration-500">
        
        {/* Accordion Heading */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-[84px] w-full items-center justify-between px-[22px] pr-[30px] text-[22px] leading-[1.2] capitalize font-semibold text-black transition-all duration-500
            ${isOpen ? "bg-red-50" : "bg-[#f9f9f9] hover:bg-[#fff6f7]"}`}
        >
          Top Pages In Life Insurance
          {isOpen ? (
            <ChevronUp className="text-red-600" />
          ) : (
            <ChevronDown className="text-red-600" />
          )}
        </button>

        {/* border line */}
        <hr className="border-t border-gray-200 mx-6" />

        {/* Accordion Content */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-red-50 px-6 py-6">
            {/* Scrollable container when >10 */}
            <div
              className={`${
                pages.length > 10 ? "max-h-[400px] overflow-y-auto pr-2 custom-scrollbar" : ""
              }`}
            >
              {/* Grid of children */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pages.map((page, index) => (
                  <a
                    key={index}
                    href={page.link}
                    className="group/card relative flex items-center justify-between rounded-xl border border-[#e9e9e9] bg-white px-4 py-3 transition-all duration-500 ease-in-out hover:bg-[rgba(201,20,41,0.1)] hover:no-underline"
                  >
                    {/* Text always #c91429 */}
                    <span className="text-[#c91429] font-medium text-sm transition-all duration-500">
                      {page.title}
                    </span>
                    <ArrowRight
                      className="origin-center rotate-[334deg] transition-transform duration-500 ease-in-out 
                                 text-black group-hover/card:text-[#c91429] group-hover/card:rotate-[360deg]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Yellow underline */}
        <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#faa61a] transition-all duration-500 group-hover:h-[10px]" />
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c91429;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a50f20;
        }
      `}</style>
    </div>
  );
}
