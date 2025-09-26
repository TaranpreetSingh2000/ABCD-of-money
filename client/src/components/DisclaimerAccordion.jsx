"use client";
import { useState } from "react";

const legalSections = [
  {
    title:
      'Aditya Birla Capital Digital Limited ("ABCDL") U64990MH2023PLC399485 CA0871 270149',
    content: [
      {
        registered_address:
          "18th Floor, One World Center, Tower 1, Jupiter Mills Compound, 841 Senapati Bapat Marg, Elphinstone Road Delisle Road, Mumbai Maharashtra 400013",
      },
      {
        disclaimer:
          "Participation by the ABCDL’s clients in the insurance products is purely on a voluntary basis. The Trade Logo “Aditya Birla Capital” Displayed Above Is Owned By ADITYA BIRLA MANAGEMENT CORPORATION PRIVATE LIMITED (Trademark Owner) And Used By ADITYA BIRLA CAPITAL DIGITAL LIMITED (ABCDL) under the License. This policy is underwritten by Aditya Birla Sun Life Insurance Company Limited (ABSLI). Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance of the schemes is neither an indicator nor a guarantee of future performance. Terms and conditions of the website/app are applicable. Privacy policy of the website is applicable.",
      },
    ],
  },
  {
    title: "BEWARE OF SPURIOUS / FRAUD PHONE CALLS!",
    content: [
      {
        disclaimer:
          "IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.",
      },
    ],
  },
];

export default function DisclaimerAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-[#c6c6c6]">
      <div aria-label="Legal and Disclaimer Sections">
        {legalSections.map((section, index) => {
          const isOpen = openIndex === index;
          const panelId = `panel-${index}`;
          const headingId = `heading-${index}`;
          console.log(panelId, '--panelId');
          console.log(headingId, '--HeadingId');
      
          return (
            <div
              key={index}
              className={`border-stone-400 border-b first:border-t ${isOpen ? '' : 'transform-all duration-500'}`}
            >
              <div id={headingId}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="max-w-[1440px] mx-auto xl:px-[72px] w-full text-left px-6 lg:px-7 py-3.5 font-semibold flex items-center justify-between text-sm text-[#353941]"
                  aria-expanded={`panel-${index}`}
                  aria-controls={`heading-${index}`}
                >
                  {section.title}
                  <span
                    className={`w-4 h-4 font-semibold text-[#86888d] flex shrink-0 transition-transform duration-500 ${
                      isOpen ? "-rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <img src="/darker-minus.svg" alt="" /> : <img src="/darker-plus.svg" />}
                  </span>
                </button>
              </div>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className={`max-w-[1440px] mx-auto xl:px-[72px] px-6 lg:px-7 text-xs transition-all duration-500 overflow-hidden bg-[#c6c6c6] ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="space-y-2 font-medium mb-7">
                  {section.content.map((entry, i) => {
                    const key = Object.keys(entry)[0];
                    return (
                      <p key={i}>
                        <b>
                          {key.replace("_", " ")}:
                        </b>{" "}
                        {entry[key]}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
