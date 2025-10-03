"use client";

import { useState, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BackgroundImage from "../../public/abc-money-background.png";

export default function RelatedArticles() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const articles = useMemo(
    () => [
      { id: 1, tag: "INVESTMENT", tagColor: "#FBBF24", strip: "#FBBF24", title: "Net Avenue Technologies IPO GMP (Grey Market Premium)", time: "05 Min Read", date: "20 July 2023" },
      { id: 2, tag: "INVESTMENT", tagColor: "#84CC16", strip: "#84CC16", title: "Net Avenue Technologies IPO GMP (Grey Market Premium)", time: "05 Min Read", date: "20 July 2023" },
      { id: 3, tag: "INVESTMENT", tagColor: "#FBBF24", strip: "#FBBF24", title: "Net Avenue Technologies IPO GMP (Grey Market Premium)", time: "05 Min Read", date: "20 July 2023" },
      { id: 4, tag: "INVESTMENT", tagColor: "#84CC16", strip: "#84CC16", title: "Net Avenue Technologies IPO GMP (Grey Market Premium)", time: "05 Min Read", date: "20 July 2023" },
    ],
    []
  );

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="px-8 py-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      role="region"
    >
      {/* Heading */}
      <h2 id="related-articles-heading" className="text-[42px] font-extralight mb-10">
        <span className="text-[#111111]">Related</span>{" "}
        <span className="text-[#C91429]">Articles</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={30}
        slidesPerView={3}
        className="pb-20 relative"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        aria-roledescription="carousel"
      >
        {articles.map((item, index) => (
          <SwiperSlide className="pb-5" key={item.id}>
            <article
              className="relative rounded-2xl border bg-white transition-all duration-300 overflow-hidden border-gray-200 hover:border-[#C91429] hover:bg-[#FFF6F7]"
              role="article"
              aria-label={`Article ${index + 1}: ${item.title}`}
            >
              {/* Inner Padding */}
              <div className="pt-[32px] pr-[44px] pb-[36px] pl-[44px] relative z-10">
                {/* Tag */}
                <span
                  className="inline-block text-black font-medium text-[12px] px-3 py-1 rounded-md"
                  style={{ backgroundColor: item.tagColor }}
                >
                  {item.tag}
                </span>

                {/* Count */}
                <span
                  className="absolute top-[32px] right-[44px] text-[13px] text-gray-700 border border-gray-300 px-3 py-1 rounded-full bg-white z-10"
                  aria-label={`Article ${index + 1} of ${articles.length}`}
                >
                  {index + 1}/{articles.length}
                </span>

                {/* Title */}
                <h3 className="text-[18px] font-semibold leading-snug mt-6">{item.title}</h3>

                {/* Meta Info */}
                <div
                  className="flex items-center text-[14px] text-gray-600 mt-6"
                  aria-label={`Reading time ${item.time}, published on ${item.date}`}
                >
                  <span>{item.time}</span>
                  <span className="mx-2">•</span>
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Bottom Strip inside border */}
              <div
                className="h-[6px] w-full absolute bottom-0 left-0 rounded-b-2xl"
                style={{ backgroundColor: item.strip }}
                aria-hidden="true"
              />
            </article>
          </SwiperSlide>
        ))}

        {/* Arrows */}
        <div className="relative">
        <button
          className={`custom-prev absolute w-10 h-10 border cursor-pointer border-[#C91429] rounded-full flex justify-center items-center text-[#C91429]
            hover:bg-[#C91429] hover:text-white transition z-20
            ${isBeginning ? "opacity-50 pointer-events-none" : ""}`}
          disabled={isBeginning}
          aria-label="Previous slide"
        > 
          ←
        </button>

        <button
          className={`custom-next w-10 h-10 border cursor-pointer border-[#C91429] rounded-full flex justify-center items-center text-[#C91429]
            hover:bg-[#C91429] hover:text-white absolute left-14 transition z-20
            ${isEnd ? "opacity-50 pointer-events-none" : ""}`}
          disabled={isEnd}
          aria-label="Next slide"
        >
          →
        </button></div>

       {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-5 mb-6 gap-2"></div>
      </Swiper>
    </section>
  );
}
