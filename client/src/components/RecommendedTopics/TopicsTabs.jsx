import React from "react";
import TopicCard from "./TopicCard";
import colorGenerator from "@/utils/colorGenerator";
import { GLOBAL_COLOR_CODES } from "@/constant/colors";

const TopicsTabs = ({ data, filterActiveData }) => {
  return (
    <div className="mt-2 max-md:px-2.5 max-lg:px-5 lg:flex-row w-full">
      {/* Recent Tab */}
      <section
        className={`flex flex-col gap-4 lg:gap-0 lg:flex-row transition-opacity duration-700 ease-linear ${
          filterActiveData
            ? "opacity-100 max-h-fit"
            : "max-h-0 opacity-0 overflow-hidden"
        } ${
          filterActiveData === 0
            ? "opacity-100 max-h-fit"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {data?.length > 0 &&
          data?.map((section, idx) => {
            const updatedData = colorGenerator(
              section?.items,
              GLOBAL_COLOR_CODES
            );
            return (
              <div
                key={idx}
                className="px-4 py-6 lg:p-8 border border-[#ddd] text-left bg-white rounded-3xl w-full"
              >
                <h2 className="mb-4 font-bold text-xl tracking-wide">
                  {`Recent In ${section.category}`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6 auto-rows-fr lg:gap-x-0">
                  {updatedData?.length > 0 &&
                    updatedData?.map((item, i) => (
                      <TopicCard key={i} {...item} color={item.color} />
                    ))}
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default TopicsTabs;
