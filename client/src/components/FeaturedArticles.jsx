"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import IPO_Image from "../../public/IPO_image.png";

export default function FeaturedArticles() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const articles = [
    {
      id: 1,
      category: "INSURANCE",
      categoryColor: "#FFD65C",
      title:
        "Habitasse risus at in proin amet. Elementum pellentesque est orci...",
      description:
        "Mattis integer consectetur tincidunt tincidunt viverra. Lectus purus vitae ultricies nibh tempor ligula adipiscing...",
      readTime: "05 Min Read",
      date: "20 July 2023",
      image: IPO_Image,
    },
    {
      id: 2,
      category: "INSURANCE",
      categoryColor: "#BDD753",
      title:
        "Habitasse risus at in proin amet. Elementum pellentesque est orci...",
      description:
        "Mattis integer consectetur tincidunt tincidunt viverra. Lectus purus vitae ultricies nibh tempor ligula adipiscing...",
      readTime: "05 Min Read",
      date: "20 July 2023",
      image: IPO_Image,
    },
    {
      id: 3,
      category: "INSURANCE",
      categoryColor: "#FAA61A",
      title:
        "Habitasse risus at in proin amet. Elementum pellentesque est orci...",
      description:
        "Mattis integer consectetur tincidunt tincidunt viverra. Lectus purus vitae ultricies nibh tempor ligula adipiscing...",
      readTime: "05 Min Read",
      date: "20 July 2023",
      image: IPO_Image,
    },
  ];

  return (
    <section
      className="w-full p-6"
      aria-labelledby="featured-articles-heading"
    >
      <h2
        id="featured-articles-heading"
        className="text-3xl md:text-[42px] leading-[40px] tracking-[0px] mb-6 font-extralight"
      >
        Featured <span className="text-[#C91429]">Articles</span>
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
        pagination={{ clickable: true }}
        // centeredSlides
        slidesPerView={1.1}
        spaceBetween={10}
        breakpoints={{
          768: {
            spaceBetween: 40,
          }
        }}

        className="relative"
        aria-roledescription="carousel"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id} className="pb-12.5">
            <article
              className="md:flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-md group cursor-pointer transition-all duration-500 ease-in-out bg-[#f3f3f3] border border-[#d1d1d182] w-full h-auto"
              // style={{ width: "1148.91px", height: "393.4px" }}
              aria-label={`Article about ${article.category}: ${article.title}`}
            >
              {/* Image */}
              <div className="md:w-1/2 relative rounded-[20px] max-h-[360px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={`${article.category} - ${article.title}`}
                  className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105 w-full h-full"
                />
              </div>

              {/* Content */}
              <div
                className="md:w-1/2 p-4 md:p-10 flex flex-col md:justify-center"
                style={{
                  fontSize: "15px",
                  color: "#212529",
                }}
              >
                <span
                  style={{
                    backgroundColor: article.categoryColor,
                    border: `2px solid ${article.categoryColor}`,
                  }}
                  className="text-black text-xs font-bold px-3 py-1 rounded-full w-fit transition-all duration-300"
                >
                  {article.category}
                </span>

                <h3 className="text-lg md:text-xl line-clamp-1 font-bold mt-4">
                  {article.title}
                </h3>

                <p className="mt-3 line-clamp-2">{article.description}</p>

                <div
                  className="flex gap-4 md:items-center text-xs md:text-sm mt-4"
                  aria-label="Article metadata"
                >
                  <span>{article.readTime}</span>
                  <span className="text-2xl " aria-hidden="true">
                    •
                  </span>
                  <time dateTime="2023-07-20">{article.date}</time>
                </div>

                <button
                  className="mt-6 w-[129px] px-[20px] py-[11px] text-sm font-bold uppercase rounded-full border-2 transition-all duration-300
                   text-[#C91429] border-[#C91429] bg-transparent 
                   group-hover:bg-[#C91429] group-hover:text-white"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}

        {/* Navigation Controls */}
        <div
          className="flex md:items-center relative z-15"
          aria-label="Carousel controls"
        >
          <div className="flex gap-3">
            <button
              className={`custom-prev w-10 h-10 border border-[#C91429] rounded-full md:flex justify-center hidden items-center text-[#C91429]
              hover:bg-[#C91429] hover:text-white transition cursor-pointer
              ${isBeginning ? "opacity-50 pointer-events-none" : ""}`}
              disabled={isBeginning}
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              className={`custom-next w-10 h-10 border border-[#C91429] rounded-full md:flex justify-center hidden items-center text-[#C91429]
              hover:bg-[#C91429] hover:text-white transition cursor-pointer
              ${isEnd ? "opacity-50 pointer-events-none" : ""}`}
              disabled={isEnd}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
