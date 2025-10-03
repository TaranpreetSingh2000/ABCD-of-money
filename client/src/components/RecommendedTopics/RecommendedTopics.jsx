"use client";
import React, { useEffect, useState } from "react";
import topicsData from "@/constant/topicsData.json";
import TopicsTabs from "./TopicsTabs";

const RecommendedTopics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabs = (idx) => {
    setActiveTab(idx);
  };

  let filterActiveData = 0;
  filterActiveData =
    topicsData.tabs.findIndex((tab, i) => i === activeTab);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 px-6 lg:px-7 xl:px-16 lg:gap-10 bg-[#f8f6f4]">
        <h2 className="text-3xl lg:text-[45px] tracking-tighter font-extralight max-lg:mb-6">
          Recommended <span className="text-red-700">Topics</span>
        </h2>

        <div className="w-full mx-auto">
          <div className="flex flex-row justify-center gap-3">
            {topicsData.tabs.map((tab, idx) => (
              <button
                onClick={() => {
                  handleTabs(idx);
                }}
                key={idx}
                className={`px-5 py-3 font-medium text-xs lg:text-[15px] ${
                  activeTab === idx
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <hr className="border-[#ccccc9] w-full" />
        </div>
        <TopicsTabs
          activeTab={activeTab}
          data={topicsData.content[topicsData.tabs[activeTab]]}
          filterActiveData={filterActiveData}
        />
      </div>
    </>
  );
};

export default RecommendedTopics;
