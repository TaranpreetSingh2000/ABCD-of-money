import React from "react";
const TipCard = () => {
  return (
    <div className="w-full bg-[#fff8e5] border-l-4 border-yellow-400 rounded-2xl p-4 shadow-md relative flex items-start">
      {/* Lightbulb Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg mr-4">
        <span className="text-yellow-500 text-2xl">
          <img
            src="/images/tip1.png"
            className=" h-9 w-9  cursor-pointer object-cover rounded-xl transition-all duration-700 ease-in-out"
          />
        </span>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <p className="text-black text-base">
          <span className="font-bold text-red-700">Tip:</span> Aliquam
          vestibulum luctus at gravida sit iaculis bibendum augue. In aliquam
          duis habitasse pellentesque. Ridiculus facilisi congue porttitor dolor
          arcu nisl eleifend.
        </p>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-b-2xl"></div>
    </div>
  );
};

export default TipCard;
