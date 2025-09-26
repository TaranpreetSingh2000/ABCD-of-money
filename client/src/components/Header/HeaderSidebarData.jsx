import HeaderDropdownCard from "./HeaderDropdownCard";
import RelatedReadsSwiper from "./HeaderCarouselCard";
import TopSlider from "./HeaderCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";

const HeaderSidebarData = ({ navData, activeSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const tagsAndSlider = {
    tags: [
      [
        "Grievance Redressal Form",
        "Service Request Form",
        "Debt Consolidation Loan",
        "Eligibility Calculator",
        "Emergency Loan",
        "Application Forms",
        "Brochure",
        "EMI Calculator",
        "FAQs",
        "Financial Reports",
        "Marriage Loan",
      ],
      ["Service Request Form", "Brochure", "FAQs"],
      ["Grievance Redressal Form", "Service Request Form", "Financial Reports"],
      [],
      ["Eligibility Calculator", "EMI Calculator", "FAQs"],
      [
        "Grievance Redressal Form",
        "Service Request Form",
        "Debt Consolidation Loan",
        "Eligibility Calculator",
        "Application Forms",
      ],
      ["FAQs", "Brochure"],
    ],
    slider: [
      [
        {
          heading: "Quick Payment Options",
          url: "javascript:void(0)",
          description: "Explore fast and secure payment solutions",
          image: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/hi_01.webp?extension=webp",
            alt: "Quick Payment Options",
          },
          backgroundImage: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
            alt: "gray-bg",
          },
          cta: {
            text: "Explore now",
            url: "https://abcduat1.abcscuat.com/",
          },
        },
      ],
      [],
      [],
      [],
      [],
      [
        {
          heading: "Financial Planning",
          url: "javascript:void(0)",
          description: "Plan your finances with our tools",
          image: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
            alt: "Financial Planning",
          },
          backgroundImage: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
            alt: "gray-bg",
          },
          cta: {
            text: "Explore now",
            url: "https://abcduat1.abcscuat.com/",
          },
        },
      ],
      [
        {
          heading: "Financial Planning",
          url: "javascript:void(0)",
          description: "Plan your finances with our tools",
          image: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
            alt: "Financial Planning",
          },
          backgroundImage: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
            alt: "gray-bg",
          },
          cta: {
            text: "Explore now",
            url: "https://abcduat1.abcscuat.com/",
          },
        },
        {
          heading: "Financial Planning",
          url: "javascript:void(0)",
          description: "Plan your finances with our tools",
          image: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
            alt: "Financial Planning",
          },
          backgroundImage: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
            alt: "gray-bg",
          },
          cta: {
            text: "Explore now",
            url: "https://abcduat1.abcscuat.com/",
          },
        },
      ],
    ],
  };
  const selectedElement = {
    tags: [
      "Grievance Redressal Form",
      "Service Request Form",
      "Debt Consolidation Loan",
      "Eligibility Calculator",
      "Application Forms",
    ],
    slider: [
      {
        heading: "Financial Planning",
        url: "javascript:void(0)",
        description: "Plan your finances with our tools",
        image: {
          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
          alt: "Financial Planning",
        },
        backgroundImage: {
          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
          alt: "gray-bg",
        },
        cta: {
          text: "Explore now",
          url: "https://abcduat1.abcscuat.com/",
        },
      },
      {
        heading: "Financial Planning",
        url: "javascript:void(0)",
        description: "Plan your finances with our tools",
        image: {
          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
          alt: "Financial Planning",
        },
        backgroundImage: {
          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
          alt: "gray-bg",
        },
        cta: {
          text: "Explore now",
          url: "https://abcduat1.abcscuat.com/",
        },
      },
    ],
  };
  // Find the selected category based on activeSidebar
  const selectedCategory =
    navData?.items.find(
      (item) => item.title.toLowerCase() === activeSidebar?.toLowerCase()
    ) || navData?.items.find((item) => item.title === "Categories");

  const selCategory =
    navData?.items.find(
      (item) => item.title.toLowerCase() === activeSidebar?.toLowerCase()
    ) || navData?.items.find((item) => item.title === "Tools");

  const sel2Category =
    navData?.items.find(
      (item) => item.title.toLowerCase() === activeSidebar?.toLowerCase()
    ) || navData?.items.find((item) => item.title === "Related Reeds");

  // console.log(navData.items);
  // console.log(selCategory);
  // console.log(sel2Category);

  return (
    <div className="w-[74.75%] overflow-y-auto flex h-full bg-gray-100">
      <div className="w-[66%] p-5 h-full">
        {/* Categories section */}
        <div className="grid grid-cols-3 gap-[15px]">
          {navData?.items
            .find((item) => item.title === "Categories")
            ?.links.map((link, index) => (
              <HeaderDropdownCard
                key={index}
                title={link.text}
                isActive={link.isActive}
              />
            ))}
        </div>

        {/* Selected category links (e.g., Housing Finance, Personal Finance) */}
        {selectedCategory &&
          selectedCategory.title !== "Categories" &&
          selectedCategory.title !== "Quick Links" &&
          selectedCategory.title !== "Related Reads" && (
            <div className="flex flex-col pb-[30px]">
              <div className="grid grid-cols-3 gap-[15px]">
                {selectedCategory.links.map((link, index) => (
                  <HeaderDropdownCard
                    key={index}
                    title={link.text}
                    description={link.description}
                    image={link.image}
                    isActive={link.isActive || false}
                  />
                ))}
              </div>
            </div>
          )}

        <div className="w-[100%] flex gap-10 pt-[30px]">
          <ul className="w-[50%] flex flex-col gap-2.5">
            {selectedElement.tags.map((item, index) => (
              <li
                key={index}
                className="py-[5px] cursor-pointer transition-colors duration-500 px-[14px] w-fit rounded-xl bg-white border-[0.8px] border-[#e9e9e9] hover:border-[#db959d] hover:bg-[#fff6f7]"
              >
                <p className="text-[14px] leading-[15px] font-normal text-[#C91429] whitespace-nowrap">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col w-[50%]">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              className="w-[100%]"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {selectedElement.slider.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="flex gap-4 rounded-xl p-4"
                    style={{
                      background: item.backgroundImage?.url
                        ? `linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1)), url(${item.backgroundImage.url})`
                        : "none",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-12.5 h-12.5 bg-[#EAECEE] rounded-full">
                      <div className="w-4.5 h-4.5">
                        <img
                          src={item.image.url}
                          alt={item.image.alt ? item.image.alt : "Icon"}
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
                        href={item.cta.url}
                        target=""
                      >
                        {item.cta.text ? item.cta.text : "Click Here"}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-custom-dots flex justify-center py-2">
              {selectedElement.slider.map((_item, index) => (
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
          </div>
        </div>
        {/* Quick Links section */}
        {/* {selectedCategory && selectedCategory.title === "Quick Links" && (
          <div className="border-t mt-8 pt-8 pl-0 p-5 flex flex-row justify-between">
            <div className="flex flex-col gap-2.5">
              {selectedCategory.links.map((link, index) => (
                <p
                  key={index}
                  className="border bg-white rounded-xl w-fit px-3.5 py-1.5"
                >
                  {link.text}
                </p>
              ))}
            </div>
          </div>
        )} */}
      </div>

      {/* Right sidebar with Tools and Related Reads */}
      <div className="w-[34%] p-5 pb-15 h-full flex flex-col justify-between">
        <div className="pb-10">
          <TopSlider sliderData={selCategory} />
          {/* <HeaderCarousel>
            {navData?.items
              .find((item) => item.title === "Tools")
              ?.links.map((link, index) => (
                <HeaderCarouselCard
                  key={index}
                  data={{
                    title: link.text,
                    description: link.description,
                    image: link.image,
                    url: link.url,
                  }}
                />
              ))}
          </HeaderCarousel> */}
        </div>
        <div className="flex flex-col">
          <span className="font-normal text-xl leading-[1.6] mb-2.5 text-black">
            Related Reads
          </span>
          <RelatedReadsSwiper sliderData={sel2Category} />
          {/* <RelatedReadsSwiper /> */}
          {/* <HeaderCarousel>
            {navData?.items
              .find((item) => item.title === "Related Reads")
              ?.links.map((link, index) => (
                <HeaderCarouselCard
                  key={index}
                  data={{
                    title: link.text,
                    description: link.description,
                    image: link.image,
                    url: link.url,
                  }}
                />
              ))}
          </HeaderCarousel> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderSidebarData;

// import React from "react";
// import HeaderDropdownCard from "./HeaderDropdownCard";
// import HeaderCarouselCard from "./HeaderCarouselCard";
// import HeaderCarousel from "./HeaderCarousel";

// const HeaderSidebarData = () => {
//   return (
//     <div className="w-[75%] overflow-y-scroll flex h-full bg-gray-100">
//       <div className="w-[70%] p-5 border-r h-full ">
//         <div className="grid grid-cols-3 gap-[15px]">
//           {[1, 1, 1, 1, 1].map((data, index) => (
//             <HeaderDropdownCard key={index} />
//           ))}
//         </div>
//         <div className="border-t mt-8 pt-8 pl-0 p-5 flex flow-row justify-between">
//           <div className="flex flex-col gap-2.5">
//             {[1, 1, 1].map((data, index) => (
//               <p
//                 key={index}
//                 className="border bg-white rounded-xl w-fit px-3.5 py-1.5 text-[]"
//               >
//                 Home extension loan
//               </p>
//             ))}
//           </div>
//           <div>
//             <HeaderCarouselCard />
//           </div>
//         </div>
//       </div>
//       <div className="w-[30%] h-full flex flex-col justify-between">
//         <div className="p-5">
//           <HeaderCarousel>
//             <HeaderCarouselCard data={""} />
//           </HeaderCarousel>
//         </div>
//         <div className="p-5 flex flex-col">
//           <span className="font-bold text-xl">Popular Articles</span>
//           <HeaderCarousel>
//             <HeaderCarouselCard data={""} />
//           </HeaderCarousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderSidebarData;
