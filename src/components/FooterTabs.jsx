"use client";

import Link from "next/link";
import React, { useState } from "react";

const tabs = [
  {
    label: "COMPANY",
    items: [
      "About Us",
      "Locate Us",
      "Press and Media",
      "CSR and Sustainability",
      "Investor Relations",
      "Careers",
    ],
  },
  {
    label: "SOLUTIONS",
    items: [
      "Insurance Plans",
      "Loans",
      "Investments",
      "Retirement",
      "Tax Saving",
      "About Us",
      "Locate Us",
      "Press and Media",
      "CSR and Sustainability",
      "Investor Relations",
      "Careers",
    ],
  },
  {
    label: "TOOLS & RESOURCES",
    items: [
      "Premium Calculator",
      "EMI Calculator",
      "FAQs",
      "Downloads",
      "Fund Tracker",
    ],
  },
  {
    label: "USEFUL LINKS",
    items: [
      "Customer Support",
      "Branch Locator",
      "Regulatory Disclosures",
      "Terms & Conditions",
    ],
  },
  {
    label: "TOOLS & RESOURCES",
    items: [
      "Premium Calculator",
      "EMI Calculator",
      "FAQs",
      "Downloads",
      "Fund Tracker",
    ],
  },
  {
    label: "USEFUL LINKS",
    items: [
      "Customer Support",
      "Branch Locator",
      "Regulatory Disclosures",
      "Terms & Conditions",
    ],
  },
  {
    label: "TOOLS & RESOURCES",
    items: [
      "Premium Calculator",
      "EMI Calculator",
      "FAQs",
      "Downloads",
      "Fund Tracker",
    ],
  },
  {
    label: "USEFUL LINKS",
    items: [
      "Customer Support",
      "Branch Locator",
      "Regulatory Disclosures",
      "Terms & Conditions",
    ],
  },
];

export default function FooterTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Desktop Tabs */}
      <div
        aria-label="Footer Navigation Tabs"
        className="hidden w-full lg:block lg:w-3/5 pb-8"
      >
        <div className="overflow-x-auto no-scrollbar">
          <ul role="tablist" aria-orientation="horizontal" className="inline-flex gap-2">
            {tabs.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <li key={index} className="flex-shrink-0 w-1/6 xl:w-1/5">
                  <button
                    id={`tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${index}`}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left font-mono text-xs xl:text-sm flex items-start xl:items-center p-2 ${
                      isActive ? "bg-[#ebebeb] text-gray-900 rounded-t-lg font-bold" : "font-bold"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 flex items-start justify-center text-2xl font-normal text-gray-400 transform transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      {isActive ? <img src="/darker-minus.svg" alt="" /> : <img src="/darker-plus.svg" />}
                    </span>
                    <span className={`pl-1 text-xs xl:text-sm ${isActive ? "text-[#353941]" : "text-[#5d6167]"}`}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {tabs.map((item, index) => {
          const isActive = activeTab === index;
          return (
            <div
              key={index}
              id={`tabpanel-${index}`}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
              className={`transition-opacity duration-200 ease-in-out ${
                isActive ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <ul className="bg-[#ebebeb] rounded-b-lg py-5 flex max-xl:p-2.5 flex-wrap px-7 gap-2 text-sm text-[#353941] list-none">
                {item.items.map((subItem, idx) => (
                  <li
                    key={idx}
                    className="border-r border-r-gray-400 text-xs xl:text-sm font-medium pr-2"
                  >
                    <Link href='#'>{subItem}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Mobile Accordion */}
      <div aria-label="Mobile Footer Accordion" className="block lg:hidden w-full mx-auto">
        {tabs.map((section, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`group transition-colors duration-500 ${isOpen ? "bg-[#EBEBEB]" : ""} rounded-lg`}>
              <button
                onClick={() => handleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`mobile-panel-${index}`}
                id={`mobile-tab-${index}`}
                className="w-full text-left text-sm text-[#353941] px-4 py-2 font-semibold flex gap-2 items-center"
              >
                <span
                  className={`w-4 h-4 flex items-center justify-center text-2xl font-medium text-[#86888d] transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <img src="/darker-minus.svg" alt="" /> : <img src="/darker-plus.svg" />}
                </span>
                {section.label}
              </button>

              <div
                id={`mobile-panel-${index}`}
                role="region"
                aria-labelledby={`mobile-tab-${index}`}
                className={`px-5 transition-all duration-500 overflow-hidden ${
                  isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {(
                  <ul className="pl-5 list-disc">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="py-2 list-none text-sm text-[#353941] last:pb-3 font-medium"
                      >
                        <Link href='#'>{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}



