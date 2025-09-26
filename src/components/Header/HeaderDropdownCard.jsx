import React from "react";

const HeaderDropdownCard = ({ title, description, image, isActive }) => {
  return (
    <div
      className={`flex flex-col bg-white group transition-colors duration-300 border-1 border-white rounded-2xl p-4 h-[170px] ${
        isActive
          ? "bg-[#fff6f7] border-[#db959d]"
          : "hover:bg-[#fff6f7] hover:border-[#db959d]"
      }`}
    >
      <div className="w-[25px] h-25px">
        <img
          src={
            image?.url ||
            "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan4.webp?extension=webp"
          }
          alt={image?.alt || ""}
          className="object-contain w-full h-full"
        />
      </div>
      <h2
        className={`text-[13px] transition-colors text-[#2e343e] duration-300 font-bold mt-2.5 mb-1.5 group-hover:text-[var(--primary)]`}
      >
        {title || "Home Loan"}
      </h2>
      <p className="text-[12px] text-[#2e343e] leading-[1.3] line-clamp-4">
        {description ||
          "Find customised home loan solutions for your unique needs"}
      </p>
    </div>
  );
};

export default HeaderDropdownCard;
