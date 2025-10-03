import Link from "next/link";
import React from "react";

const TopicCard = ({ title, readTime, date, color }) => {
  return (
    <div className="group relative overflow-hidden bg-white border border-gray-300 rounded-3xl px-5 py-4 lg:px-4 xl:px-5 flex flex-col justify-between hover:bg-red-50 hover:border hover:border-red-600 transition-colors duration-500 min-h-[104px]">
      <div
        className="border-b-6 absolute left-0 bottom-0 right-0"
        style={{ borderColor: color }}
      ></div>

      <div className="flex flex-col justify-between h-full">
        <Link
          href="#"
          className="text-base lg:text-lg font-medium mb-1 lg:mb-2 leading-5 transition-colors duration-500 group-hover:text-red-700"
        >
          {title}
        </Link>
        <ul
          className={`flex flex-row font-medium text-black/80 text-xs lg:text-sm gap-6`}
        >
          <li className="leading-6">{readTime}</li>
          <li className="relative before:content-['•'] before:text-gray-400 before:text-3xl lg:before:text-3xl before:absolute before:-left-4 before:-top-1.5 leading-6">
            {date}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopicCard;
