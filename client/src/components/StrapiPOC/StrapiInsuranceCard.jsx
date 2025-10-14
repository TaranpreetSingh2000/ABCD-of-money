import React from "react";
const StrapiInsuranceCard = () => {
  return (
    <div className="mx-auto w-full max-w-[910px] flex flex-col gap-4 px-4">
      {insuranceData.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col sm:flex-row items-start sm:items-center md:gap-[30px] bg-[#FFFFFF] border border-[#EFEFEF] rounded-[20px] p-[17px] transition-all duration-700 ease-in-out hover:bg-[#fff6f7] hover:border-[#c91429]"
        >
          {/* IMAGE */}
          <img
            src="/images/blog-sub-cat-1.jpg"
            alt={item.title}
            className="w-full sm:w-[262.8px] h-[180px] sm:h-[148.9px] object-cover rounded-[12px] cursor-pointer transition-all duration-700 ease-in-out"
          />

          {/* TEXT SECTION */}
          <div className="flex flex-col justify-between w-full mt-4 sm:mt-0 transition-all duration-700 ease-in-out">
            <div className="transition-all duration-700 translate-y-3.5 group-hover:translate-y-0">
              {/* CATEGORY TAG */}
              <span
                className="inline-block font-anek font-normal text-[12px] leading-[16px] uppercase text-[#111111] mb-2 px-[13px] py-[6px] bg-[#FFD65C] border border-[#FFD65C] rounded-[20px] cursor-pointer transition-all duration-700 ease-in-out hover:bg-[#FFD65C]/30 hover:border-[#FFD65C]"
              >
                {item.category}
              </span>

              {/* TITLE */}
              <h2 className="font-anek font-medium text-2xl leading-8 text-[#111111] mb-2 cursor-pointer transition-all duration-700 ease-in-out group-hover:text-[#c91429]">
                {item.title}
              </h2>

              {/* META INFO */}
              <div className="flex items-center gap-2 text-sm leading-5 font-anek font-normal text-[#111111CC] capitalize transition-all duration-700 ease-in-out">
                <span>{item.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-[#0000004D] inline-block"></span>
                <span>{item.date}</span>
              </div>
            </div>

            {/* READ MORE */}
            <a
              href={item.link}
              className="flex items-center text-sm font-bold text-[#c91429] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mt-2"
            >
              READ MORE
              <span className="ml-1 transition-all duration-700 group-hover:ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
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
export default StrapiInsuranceCard;