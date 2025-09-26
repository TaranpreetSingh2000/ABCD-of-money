"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ← Add Autoplay here
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const relatedReads = [
  {
    heading: "Understanding Bonds & Types of Bonds",
    url: "https://www.adityabirlacapital.com/abc-of-money/what-are-bonds",
    backgroundImage: {
      url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Saving-Investments-1.ashx",
      alt: "Saving Investments 1",
    },
  },
  {
    heading: "Working of the trade price in the stock market",
    url: "https://www.adityabirlacapital.com/abc-of-money/all-about-trading-and-trade-price-in-stock-market",
    backgroundImage: {
      url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Saving-Investments-2.ashx",
      alt: "Saving Investments 2",
    },
  },
  {
    heading: "What is a Stockbroker? - Types & Their Role in Stock Market",
    url: "https://www.adityabirlacapital.com/abc-of-money/what-is-the-importance-of-brokers-in-the-stock-market",
    backgroundImage: {
      url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Saving-Investments-3.ashx",
      alt: "Saving Investments 3",
    },
  },
];

const RelatedReadsSwiper = ({ sliderData }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]} // ← Add Autoplay here
        className="max-h-[255px] !w-[240px]"
      >
        {relatedReads.map((item, index) => (
          <SwiperSlide key={index} className="rounded overflow-hidden">
            <div
              className="h-[240px] rounded-xl bg-white overflow-hidden relative flex flex-col justify-end"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${item.backgroundImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4 pb-6">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <span className="font-semibold text-sm text-white hover:underline transition">
                    {item.heading}
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedReadsSwiper;
