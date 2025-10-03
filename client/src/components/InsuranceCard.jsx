import React from "react";
import insuranceData from "../data/insuranceData.json";

const InsuranceCard = () => {
  return (
    <div className="mx-auto">
      {insuranceData.map((item, index) => (
        <div
          key={index}
          className="group/up flex items-center gap-[30px] p-4 rounded-2xl border border-white mb-4 transition-all duration-700 ease-in-out hover:bg-[#fff6f7] hover:border-[#c91429]"
        >
          <img
            src="/images/blog-sub-cat-1.jpg"
            alt={item.title}
            className="w-55 h-31 cursor-pointer object-cover rounded-xl transition-all duration-700 ease-in-out"
          />

          {/* Text Content */}
          <div className="flex flex-col  justify-between transition-all duration-700 ease-in-out w-full">
            <div className="transition-all duration-700 translate-y-3.5 group-hover/up:translate-y-0">
              <span
                className="font-bold cursor-pointer text-[12px] leading-4 uppercase bg-[#ffd65c] px-3 py-[5px] rounded-[20px] text-[#111111] block w-fit mb-0 border border-transparent transition-all duration-700 ease-in-out"
                style={{ backgroundColor: "#facc15", borderColor: "#facc15" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffd65c47";
                  e.currentTarget.style.borderColor = "#ffd5c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#facc15";
                  e.currentTarget.style.borderColor = "#facc15";
                }}
              >
                {item.category}
              </span>

              <h2 className="text-[24px] cursor-pointer leading-[32px] mb-1 transition-all duration-700 ease-in-out group-hover/up:text-[#c91429]">
                {item.title}
              </h2>

              <div className="text-base capitalize text-[rgba(0,0,0,0.8)] flex gap-2 items-center mb-2 transition-all duration-700 ease-in-out">
                <span>{item.readTime}</span>
                <span className="text-gray-400 text-xl">•</span>
                <span>{item.date}</span>
              </div>
            </div>
            {/* READ MORE */}
            <a
              href={item.link}
              className="flex opacity-0 group/right cursor-pointer group-hover/up:opacity-100 transition-all duration-700 ease-in-out items-center text-sm font-bold text-[#c91429]"
            >
              READ MORE{" "}
              <span className=" ml-1 cursor-pointer transition-all duration-700 group-hover/right:ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsuranceCard;
