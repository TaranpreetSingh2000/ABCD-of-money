import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TopSlider = ({ sliderData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  // console.log(sliderData);

  return (
    <>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {sliderData?.links?.map((item) => {
          return (
            <SwiperSlide>
              <div
                className={`flex gap-4 rounded-xl p-4`}
                style={{
                  background: item?.backgroundImage?.url
                    ? `linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1)), url(${item.backgroundImage.url})`
                    : "none",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex items-center justify-center flex-shrink-0 w-12.5 h-12.5 bg-[#EAECEE] rounded-full">
                  <div className="w-4.5 h-4.5">
                    <img
                      src={`${item.image.url}`}
                      alt={`${item.image.alt ? item.image.alt : "Icon"}`}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="">
                  <span className="text-[18px] leading-[20px] font-semibold">
                    {item.heading}
                  </span>
                  <p className="text-[12px] opacity-[0.8] leading-[14px]">
                    {item.description}
                  </p>
                  <a
                    className="red-cta uppercase text-xs tracking-[-0.4px] text-[#c91429]"
                    href={`${item?.cta?.url}`}
                    target=""
                  >
                    {item?.cta?.text ? item?.cta?.text : "Click Here"}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination-custom-dots flex justify-center py-2">
        {sliderData?.links?.map((_item, index) => (
          <span
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-2.5 h-2.5 rounded-full mx-1 cursor-pointer transition-all ${
              index === activeIndex
                ? "swiper-pagination-bullet swiper-pagination-bullet-active"
                : "swiper-pagination-bullet bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default TopSlider;
