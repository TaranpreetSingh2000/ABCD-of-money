"use client";
import React, { useState } from "react";
import benefits from "@/constant/modaltabData.js";

const FormTab = () => {
  const [showTabs, setShowTabs] = useState(0);
  const [selectedCard, setSelectedCard] = useState("0-0");

  const handleTab = (index) => {
    setShowTabs(index);
  };

  const handleSelect = (tabIndex, cardIndex) => {
    const id = `${tabIndex}-${cardIndex}`;
    setSelectedCard(id);
  };

  const currentCards = benefits[showTabs]?.cards || [];

  return (
    <div className={`${currentCards.length > 4 ? 'mb-5' : 'mb-0'}`}>
      <div className="w-full overflow-x-auto relative top-[1px] no-scrollbar">
        <ul className="flex flex-row w-max">
          {benefits.map((item, index) => (
            <li key={index} >
              <button
                type="button"
                role="tab"
                onClick={() => handleTab(index)}
                tabIndex={0}
                className={`text-sm px-4 font-semibold ${
                  index === showTabs
                    ? "text-[#c91429] border-b-2 border-[#c91429]"
                    : "text-gray-400"
                }`}
              >
                {item.tabLabel}
              </button>
            </li>
          ))}
        </ul>
      </div>
        <hr className="h-[1.5px] border-0 mb-3.5 w-full bg-gray-300" />

      <div className="grid grid-cols-4 gap-2 pb-5 max-h-28 max-w-md w-auto h-auto overflow-y-auto overflow-hidden ">
        {currentCards.map((val, index) => {
          const id = `${showTabs}-${index}`;
          return (
            <div
              key={id}
              className="flex flex-row justify-center border w-auto h-auto relative border-gray-300 rounded-lg hover:bg-amber-50 hover:border hover:border-red-300"
            >
              <input
                type="checkbox"
                id={`benefit-${id}`}
                name="check-group"
                checked={selectedCard === id}
                onChange={() => handleSelect(showTabs, index)}
                className={`absolute right-1 top-1 bg-white w-0 h-0 border-0 before:content-["✔"] before:absolute before:text-[9px] before:top-0 before:right-0 before:text-sm before:rounded-full before:flex before:justify-center before:items-center before:w-4 before:p-0.5 before:bg-green-500 before:text-white ${
                  selectedCard === id ? "block" : "hidden"
                }`}
              />
              {/* {selectedCard === id && <div className={`absolute left-[74px] top-0 w-full`}>
                <span className="text-sm text-white bg-green-500 border-0 px-1 rounded-full">+</span>
              </div>} */}
              
              <label
                htmlFor={`benefit-${id}`}
                className={`flex flex-row h-12 px-2 py-4 overflow-hidden justify-center hover:shadow-[0_14px_20px_#00000014] items-center gap-2 cursor-pointer`}
              >
                <img  
                  src={val.imageURL}
                  alt={`Benefit ${index}`}
                  className="w-4 h-5"
                />
                <span className={`text-xs font-medium text-wrap leading-3 }`}>
                  {val.text}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormTab;

