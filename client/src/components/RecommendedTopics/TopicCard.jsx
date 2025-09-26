import Link from 'next/link'
import React from 'react'

const TopicCard = ({ borderBase, title, readTime, date }) => {
  return (
    <div className="group relative overflow-hidden bg-white border border-gray-300 rounded-3xl px-5 py-4 flex flex-col justify-between hover:bg-red-50 hover:border hover:border-red-600 transition-colors duration-500">
      <Link
        href="#"
        className="text-base lg:text-lg font-medium mb-1 lg:mb-2 leading-5 transition-colors duration-500 group-hover:text-red-700"
      >
        {title}
      </Link>
      <ul
        className={`flex flex-row font-medium text-black/80 text-xs lg:text-sm gap-6 after:content-[''] after:border-b-7 after:border-b-${borderBase} after:absolute after:bottom-0 after:left-0 after:right-0 after:rounded-b-xl`}
      >
        <li className="leading-6">{readTime}</li>
        <li className="relative before:content-['•'] before:text-gray-400 before:text-3xl lg:before:text-3xl before:absolute before:-left-4 before:-top-1.5 lg:before:top-1 xl:before:-top-1.5 leading-6">
          {date}
        </li>
      </ul>
    </div>
  );
};

export default TopicCard;

