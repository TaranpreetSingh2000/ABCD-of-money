"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const tags = [
  "INCOME TAX",
  "ABC OF LIFE INSURANCE",
  "HOME FINANCE",
  "WEALTH CREATION",
  "TRAVEL INSURANCE",
  "RETIREMENT",
  "STOCKS",
  "MUTUAL FUNDS",
  "ANNUITIES",
  "TERM INSURANCE",
];

const articles = [
  { title: "Top 10 Life Insurance Policies in India 2024", url: "#" },
  { title: "Best Health Insurance Plans 2024", url: "#" },
  { title: "Income Tax Basics 2024", url: "#" },
  { title: "Home Finance Tips for 2024", url: "#" },
  { title: "Wealth Creation Strategies for Beginners", url: "#" },
  { title: "Travel Insurance Guide 2024", url: "#" },
  { title: "Retirement Planning Checklist", url: "#" },
  { title: "How to Start Investing in Stocks", url: "#" },
  { title: "Mutual Funds 101", url: "#" },
];

const MAX_VISIBLE_TAGS = 8;

const InsurancePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const moreBtnRef = useRef(null);
  const moreMenuRef = useRef(null);

  // --- Filtering ---
  const runFilter = useCallback((value) => {
    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }
    const results = articles.filter((article) =>
      article.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
    runFilter(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredResults([]);
  };

  const handleTagClick = (tag) => {
    handleSearch(tag); // populate search box + filter
    setIsMoreOpen(false); // close menu (if open)
  };

  // --- Outside click / Esc to close "More" menu ---
  useEffect(() => {
    if (!isMoreOpen) return;

    const handleClickOutside = (e) => {
      if (
        moreBtnRef.current &&
        moreMenuRef.current &&
        !moreBtnRef.current.contains(e.target) &&
        !moreMenuRef.current.contains(e.target)
      ) {
        setIsMoreOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMoreOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMoreOpen]);

  // --- Split visible vs overflow tags ---
  const showMore = tags.length > MAX_VISIBLE_TAGS;
  const visibleTags = showMore ? tags.slice(0, MAX_VISIBLE_TAGS) : tags;
  const overflowTags = showMore ? tags.slice(MAX_VISIBLE_TAGS) : [];

  return (
    <div className="bg-[#f7f0e3] min-h-screen p-6 font-sans">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
        <span className="cursor-pointer hover:underline">HOME</span> &gt;{" "}
        <span className="cursor-pointer hover:underline">DIGITAL</span> &gt;{" "}
        <span className="cursor-pointer hover:underline">ABC OF MONEY</span>{" "}
        &gt; <span className="font-bold text-black">INSURANCE</span>
      </nav>

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-8">Insurance</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8 relative">
        <div className="flex items-center w-full max-w-3xl bg-white rounded-full shadow-md px-4 py-3">
          <FiSearch className="text-gray-500 text-xl mr-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Article"
            className="w-full outline-none text-lg placeholder-gray-500"
            aria-label="Search Articles"
          />
          {searchTerm && (
            <IoClose
              className="text-red-500 text-2xl cursor-pointer ml-2"
              onClick={handleClear}
              aria-label="Clear Search"
            />
          )}
        </div>

        {/* Search Dropdown */}
        {filteredResults.length > 0 && (
          <div
            className="absolute top-14 w-full max-w-3xl bg-white rounded-xl shadow-lg p-4 z-10"
            role="listbox"
            aria-label="Search results"
          >
            {filteredResults.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex justify-between items-center py-2 border-b last:border-b-0 text-gray-800 hover:text-red-600 focus:text-red-600 focus:outline-none"
              >
                {item.title}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Tags Row */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto relative">
        {visibleTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            {tag}
          </button>
        ))}

        {showMore && (
          <div className="relative" ref={moreBtnRef}>
            <button
              onClick={() => setIsMoreOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={isMoreOpen}
              className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-200
    ${
      isMoreOpen
        ? "border-red-500 text-red-500 bg-white hover:bg-red-50"
        : "border-black text-black bg-white"
    }`}
            >
              MORE +
            </button>

            {isMoreOpen && (
              <div
                ref={moreMenuRef}
                role="menu"
                aria-label="More tags"
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 sm:w-64 max-h-64 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200 z-20 p-2"
              >
                {overflowTags.map((tag, i) => (
                  <button
                    key={i}
                    role="menuitem"
                    onClick={() => handleTagClick(tag)}
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-red-600 font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InsurancePage;
