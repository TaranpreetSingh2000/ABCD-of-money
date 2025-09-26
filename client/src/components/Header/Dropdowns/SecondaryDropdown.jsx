"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import HeaderDropdownCard from "../HeaderDropdownCard";

const SecondaryDropdown = ({
  activeDropdown,
  setActiveDropdown,
  hideSecNav,
}) => {
  const [activeSidebar, setActiveSidebar] = useState(null);
  const dropdownRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const navData = {
    dropdown: {
      items: [
        {
          title: "My Track",
          links: [
            {
              heading: "Credit Track",
              url: "https://www.adityabirlacapital.com/abcd/check-free-credit-score",
              description:
                "Check your credit score and get tips on how to improve it",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/mi_02.ashx?iar=0&hash=FDE91C81D1281628BCFA4EF8203E8411",
                alt: "Aditya Birla SBI Card",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abcd/check-free-credit-score",
              },
            },
            {
              heading: "Health Track",
              url: "https://www.adityabirlacapital.com/abcd/health-track",
              description:
                "Healthy living made easy with ABCD’s Digital Health Evaluation",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/mi_02.ashx?iar=0&hash=FDE91C81D1281628BCFA4EF8203E8411",
                alt: "Aditya Birla SBI Card",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abcd/health-track",
              },
            },
            {
              heading: "Portfolio Track",
              url: "https://www.adityabirlacapital.com/abcd/portfolio-tracker",
              description:
                "Bring your assets and liabilities under one platform",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/mi_02.ashx?iar=0&hash=FDE91C81D1281628BCFA4EF8203E8411",
                alt: "Aditya Birla SBI Card",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abcd/portfolio-tracker",
              },
            },
            {
              heading: "Spend Track",
              url: "https://www.adityabirlacapital.com/abcd/spend-track",
              description: "Manage your money effectively with Spend Track",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/mi_02.ashx?iar=0&hash=FDE91C81D1281628BCFA4EF8203E8411",
                alt: "Aditya Birla SBI Card",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abcd/spend-track",
              },
            },
            {
              heading: "Vehicle Track",
              url: "https://www.adityabirlacapital.com/abcd/Vehicle-Track",
              description:
                "Check Vehicle & Car Insurance Status/Validity Online",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/mi_02.ashx?iar=0&hash=FDE91C81D1281628BCFA4EF8203E8411",
                alt: "Aditya Birla SBI Card",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abcd/Vehicle-Track",
              },
            },
          ],
          bottomSlider: [
            {
              heading: "What is Mortgage Loan?",
              url: "https://www.adityabirlacapital.com/abc-of-money/what-is-mortgage-loan",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/what-is-mortgage-loan",
              },
            },
            {
              heading: "All You Need to Know About Mutual Fund Expense Ratio",
              url: "https://www.adityabirlacapital.com/abc-of-money/all-about-expense-ratio-in-mutual-funds",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/all-about-expense-ratio-in-mutual-funds",
              },
            },
            {
              heading:
                "Insurance for Children: Does a Child Need Life Insurance?",
              url: "https://www.adityabirlacapital.com/abc-of-money/life-insurance-for-children",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/life-insurance-for-children",
              },
            },
          ],
          leftBtn: {
            firstHeading: "Explore My Track",
            secondHeading: "Financial Tools",
            cta: {
              text: "Get Started",
              url: "https://www.adityabirlacapital.com/abcd/my-track",
            },
          },
          tags: [],
        },
        {
          title: "ABCD Of Money",
          links: [
            {
              heading: "Read about Money",
              url: "https://www.adityabirlacapital.com/abc-of-money/money",
              description: "Money management made easy",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/res_debt_funds.ashx?iar=0&hash=062000C21FE077500DE78DACECF1222B",
                alt: "Debt Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abc-of-money/money",
              },
            },
            {
              heading: "Read about Tax",
              url: "https://www.adityabirlacapital.com/abc-of-money/money/abc-of-taxes",
              description: "Understanding direct and indirect taxes",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/tax_01.ashx?iar=0&hash=F0CF74B293BE21CFA0F0F498858C5064",
                alt: "Equity Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abc-of-money/money/abc-of-taxes",
              },
            },
            {
              heading: "Read about Retirement Plan",
              url: "https://www.adityabirlacapital.com/abc-of-money/money/abc-of-retirement-planning",
              description: "Know how to plan retirement well",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/plans_ico2.ashx?iar=0&hash=3C9536B596D3994079DE9CDF0ECD7181",
                alt: "ETF Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abc-of-money/money/abc-of-retirement-planning",
              },
            },
            {
              heading: "Read about Insurance",
              url: "https://www.adityabirlacapital.com/abc-of-money/protecting-solutions",
              description: "Insurance and it's aspects for laymen",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/plans_ico7.ashx?iar=0&hash=CF94ACFB9FE7F13B88A2D60921D111A1",
                alt: "Hybrid Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abc-of-money/protecting-solutions",
              },
            },
            {
              heading: "Read about Investing",
              url: "https://www.adityabirlacapital.com/abc-of-money/investing-solutions",
              description: "Investments and their jargon - simplified",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/res_equity_funds.ashx?iar=0&hash=4C025086ECD0BACAB739492CC93D42DD",
                alt: "Fund Of Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abc-of-money/investing-solutions",
              },
            },
            {
              heading: "Read about Loans and Financing",
              url: "https://www.adityabirlacapital.com/abc-of-money/financing-solutions",
              description: "Know all about loans and their management",
              image: {
                url: "/-/media/ABCCorp/data/media/img/icons/nav_loan1.ashx?iar=0&hash=511B46FEBC8817C4446D4C2A3D6EED19",
                alt: "Index Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Learn More",
                url: "https://www.adityabirlacapital.com/abc-of-money/financing-solutions",
              },
            },
          ],
          bottomSlider: [
            {
              heading: "What is Mortgage Loan?",
              url: "https://www.adityabirlacapital.com/abc-of-money/what-is-mortgage-loan",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/what-is-mortgage-loan",
              },
            },
            {
              heading: "All You Need to Know About Mutual Fund Expense Ratio",
              url: "https://www.adityabirlacapital.com/abc-of-money/all-about-expense-ratio-in-mutual-funds",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/all-about-expense-ratio-in-mutual-funds",
              },
            },
            {
              heading:
                "Insurance for Children: Does a Child Need Life Insurance?",
              url: "https://www.adityabirlacapital.com/abc-of-money/life-insurance-for-children",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/life-insurance-for-children",
              },
            },
          ],
          leftBtn: {
            firstHeading: "Explore ABCD of Money",
            secondHeading: "Financial Education",
            cta: {
              text: "Learn More",
              url: "https://www.adityabirlacapital.com/abc-of-money",
            },
          },
          tags: [],
        },
        {
          title: "ABCD Of Calculators",
          links: [
            {
              heading: "Personal Loan EMI Calculator",
              url: "https://www.adityabirlacapital.com/abc-of-calculators/personal-loan-emi-calculator",
              description:
                "Estimate your monthly loan repayments with Personal Loan EMI Calculator",
              image: {
                url: "/-/media/ABCCorp/data/media/img/bmi_calc.ashx?iar=0&hash=BA11AD26D772AFC98A48AEAF606F2A29",
                alt: "Debt Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Calculate Now",
                url: "https://www.adityabirlacapital.com/abc-of-calculators/personal-loan-emi-calculator",
              },
            },
            {
              heading: "Home Loan Eligibility Calculator",
              url: "https://www.adityabirlacapital.com/abc-of-calculators/home-loan-eligibility-calculator?ref=abc-homepage",
              description:
                "Calculate the expected EMI of your loan for easier repayments",
              image: {
                url: "/-/media/ABCCorp/data/media/img/bmi_calc.ashx?iar=0&hash=BA11AD26D772AFC98A48AEAF606F2A29",
                alt: "Equity Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Calculate Now",
                url: "https://www.adityabirlacapital.com/abc-of-calculators/home-loan-eligibility-calculator?ref=abc-homepage",
              },
            },
            {
              heading: "BMI Calculator",
              url: "https://www.adityabirlacapital.com/abc-of-calculators/bmi-calculator",
              description:
                "It measure your leanness or obesity basis your height and the weight",
              image: {
                url: "/-/media/ABCCorp/data/media/img/bmi_calc.ashx?iar=0&hash=BA11AD26D772AFC98A48AEAF606F2A29",
                alt: "ETF Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Calculate Now",
                url: "https://www.adityabirlacapital.com/abc-of-calculators/bmi-calculator",
              },
            },
            {
              heading: "Income Tax Calculator",
              url: "https://www.adityabirlacapital.com/abc-of-calculators/income-tax-calculator",
              description:
                "Calculate the tax payable by you based on your income",
              image: {
                url: "/-/media/ABCCorp/data/media/img/bmi_calc.ashx?iar=0&hash=BA11AD26D772AFC98A48AEAF606F2A29",
                alt: "ETF Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Calculate Now",
                url: "https://www.adityabirlacapital.com/abc-of-calculators/income-tax-calculator",
              },
            },
            {
              heading: "SIP Calculator",
              url: "https://www.adityabirlacapital.com/abc-of-calculators/sip-calculator",
              description:
                "Estimate the returns you can earn with your SIP investments",
              image: {
                url: "/-/media/ABCCorp/data/media/img/bmi_calc.ashx?iar=0&hash=BA11AD26D772AFC98A48AEAF606F2A29",
                alt: "ETF Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Calculate Now",
                url: "https://www.adityabirlacapital.com/abc-of-calculators/sip-calculator",
              },
            },
            {
              heading: "SWP Calculator",
              url: "https://www.adityabirlacapital.com/abc-of-calculators/swp-calculator",
              description:
                "Calculate the Life Insurance cover you need to secure your family’s future",
              image: {
                url: "/-/media/ABCCorp/data/media/img/bmi_calc.ashx?iar=0&hash=BA11AD26D772AFC98A48AEAF606F2A29",
                alt: "ETF Funds",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Calculate Now",
                url: "https://www.adityabirlacapital.com/abc-of-calculators/swp-calculator",
              },
            },
          ],
          bottomSlider: [
            {
              heading: "What is Mortgage Loan?",
              url: "https://www.adityabirlacapital.com/abc-of-money/what-is-mortgage-loan",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/what-is-mortgage-loan",
              },
            },
            {
              heading: "All You Need to Know About Mutual Fund Expense Ratio",
              url: "https://www.adityabirlacapital.com/abc-of-money/all-about-expense-ratio-in-mutual-funds",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/all-about-expense-ratio-in-mutual-funds",
              },
            },
            {
              heading:
                "Insurance for Children: Does a Child Need Life Insurance?",
              url: "https://www.adityabirlacapital.com/abc-of-money/life-insurance-for-children",
              description: "",
              image: {
                url: "/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                webpUrl:
                  "/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                alt: "img",
              },
              backgroundImage: {
                url: "",
                alt: "",
              },
              cta: {
                text: "Read More",
                url: "https://www.adityabirlacapital.com/abc-of-money/life-insurance-for-children",
              },
            },
          ],
          leftBtn: {
            firstHeading: "Explore ABCD of Calculators",
            secondHeading: "Financial Tools",
            cta: {
              text: "Calculate Now",
              url: "https://www.adityabirlacapital.com/abc-of-calculators",
            },
          },
          tags: [],
        },
        {
          title: "Financial Simulation Game",
          links: [
            {
              heading: "ConseQuest",
              url: "https://adityabirlacapital.kiksarvr.com/abcd/consequest/financial-gameplay/index.html",
              description:
                "Experience ConseQuest- A game where your decisions drive your future",
              image: {
                url: "/-/media/ABCD/data/media/img/Webp_copy-removebg-preview.ashx?h=404&iar=0&w=421&hash=B8DEDCA960E6386E3698EBD3D4D96B20",
                alt: "img",
              },
              backgroundImage: {
                url: "/-/media/ABCD/data/media/img/nav_demat_bg.ashx?h=418&iar=0&w=778&hash=2A159400BB65B704EA69DE764A6BEC80",
                alt: "img",
              },
              cta: {
                text: "Play Now",
                url: "https://adityabirlacapital.kiksarvr.com/abcd/consequest/financial-gameplay/index.html",
              },
              features: [
                "Wisdom in Choices",
                "Life Optimised",
                "Simplifying Success",
              ],
            },
          ],
          bottomSlider: [],
          leftBtn: {
            firstHeading: "Experience ConseQuest",
            secondHeading: "Financial Simulation",
            cta: {
              text: "Play Now",
              url: "https://adityabirlacapital.kiksarvr.com/abcd/consequest/financial-gameplay/index.html",
            },
          },
          tags: [],
        },
      ],
    },
  };

  useEffect(() => {
    setMounted(true);
    if (navData?.dropdown?.items?.length > 0) {
      setActiveSidebar(navData.dropdown.items[0].title);
    }
    return () => setMounted(false);
  }, [navData]);

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  //   return () => document.body.classList.remove("no-scroll");
  // }, [isDropdownOpen]);

  const toggleSidebar = (sidebarName) => {
    setActiveSidebar(sidebarName);
  };

  if (!mounted) return null;

  return (
    <div
      ref={dropdownRef}
      className={`w-[80%] mx-auto left-[50%] translate-x-[-50%] flex max-h-0 h-[80vh] fixed z-50 bg-white overflow-hidden rounded-2xl transition-all duration-700 ${
        activeDropdown ? "max-h-[80vh] opacity-100" : "opacity-0"
      }`}
      style={{ top: `${hideSecNav ? "60px" : "160px"}` }}
    >
      <div className="w-[25%] flex flex-col overflow-y-auto text-xl font-semibold h-full bg-white shadow-md">
        {navData?.dropdown?.items.map((item, index) => (
          <div
            key={index}
            className={`px-10 py-4 border-b border-gray-300 flex justify-between items-center group ${
              activeSidebar === item.title ? "text-[#c91429]" : "text-gray-800"
            }`}
            onMouseOver={() => toggleSidebar(item.title)}
          >
            {item.title}
            <svg
              className={`w-4 h-4 flex-shrink-0 transition duration-500 ${
                activeSidebar === item.title ? "rotate-45" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
              />
            </svg>
          </div>
        ))}
      </div>
      <div className="flex-1 p-10 overflow-y-auto">
        {navData?.dropdown?.items.map((item, index) => (
          <div
            key={index}
            className={`${activeSidebar === item.title ? "block" : "hidden"}`}
          >
            {item.title === "Financial Simulation Game" ? (
              <div className="flex flex-col gap-6">
                {item.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex gap-6">
                    <div className="w-1/2">
                      <img
                        src={link.image.url}
                        alt={link.image.alt}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-1/2 flex flex-col gap-4">
                      <span className="text-2xl font-semibold text-gray-800">
                        {link.heading}
                      </span>
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                      <ul className="list-none flex flex-col gap-2">
                        {link.features?.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <img
                              src="/ABCD/data/media/img/nav_demat_list_tick"
                              alt=""
                              className="w-4 h-4"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={link.cta.url}
                        className="inline-block py-2 px-4 text-xs font-normal uppercase text-[#c91429] border border-[#c91429] hover:text-white hover:bg-[#c91429] rounded-2xl transition-colors duration-200"
                      >
                        {link.cta.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </span>
                  {item.leftBtn?.cta?.url && (
                    <a
                      href={item.leftBtn.cta.url}
                      className="text-sm text-[#c91429] hover:underline"
                    >
                      View All
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {item.links.map((link, linkIndex) => (
                    <HeaderDropdownCard
                      key={linkIndex}
                      title={link.heading}
                      description={link.description}
                      image={link.image}
                      isActive={link.isActive || false}
                    />
                  ))}
                </div>
              </>
            )}
            {item.bottomSlider.length > 0 && (
              <div className="mt-6">
                <span className="text-lg font-semibold text-gray-800 block mb-4">
                  Popular Articles
                </span>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={3}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: `.swiper-pagination-${index}`,
                    clickable: true,
                    renderBullet: (bulletIndex, className) => {
                      return `<span class="${className}" style="background-color: ${
                        className.includes("swiper-pagination-bullet-active")
                          ? "#c91429"
                          : "#EAECEE"
                      }; width: 8px; height: 8px; margin: 0 4px;"></span>`;
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  {item.bottomSlider.map((slide, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                      <div className="flex flex-col gap-2">
                        <img
                          src={slide.image.url}
                          alt={slide.image.alt}
                          className="w-full h-auto"
                        />
                        <a
                          href={slide.cta.url}
                          className="text-base font-semibold text-gray-800 hover:text-[#c91429]"
                        >
                          {slide.heading}
                        </a>
                        <p className="text-sm text-gray-600">
                          {slide.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className={`swiper-pagination-${index} flex justify-center mt-4`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryDropdown;

// import React, { useRef, useState, useEffect } from "react";
// import ScreenOverlay from "../../ScreenOverlay/ScreenOverlay";
// import { createPortal } from "react-dom";

// const SecondaryDropdown = ({
//   isDropdownOpen,
//   setActiveDropdown,
//   hideSecNav,
//   navData,
// }) => {
//   const [activeSidebar, setActiveSidebar] = useState("Categories");
//   const dropdownRef = useRef(null);
//   const [mounted, setMounted] = useState(false);
//   const data = {
//     items: [
//       {
//         heading: "Tax Filing Tips",
//         totalBlogs: 70,
//         subItems: [
//           {
//             text: "Deductions And Credits",
//             blogsCount: 10,
//           },
//           {
//             text: "Tax Filing Deadlines",
//             blogsCount: 10,
//           },
//           {
//             text: "Common Mistakes To Avoid",
//             blogsCount: 10,
//           },
//           {
//             text: "Organizing Tax Documents",
//             blogsCount: 10,
//           },
//           {
//             text: "Maximizing Refunds",
//             blogsCount: 10,
//           },
//         ],
//       },
//       {
//         heading: "Tax Filing Tips",
//         totalBlogs: 70,
//         subItems: [
//           {
//             text: "Year-End Tax Planning",
//             blogsCount: 10,
//           },
//           {
//             text: "Retirement Planning",
//             blogsCount: 10,
//           },
//           {
//             text: "Estate Planning",
//             blogsCount: 10,
//           },
//           {
//             text: "Tax-Efficient Investments",
//             blogsCount: 10,
//           },
//           {
//             text: "Capital Gains And Losses Management",
//             blogsCount: 10,
//           },
//         ],
//       },
//       {
//         heading: "Tax Filing Tips",
//         totalBlogs: 70,
//         subItems: [
//           {
//             text: "Understanding Tax Codes",
//             blogsCount: 10,
//           },
//           {
//             text: "Recent Tax Law Changes",
//             blogsCount: 10,
//           },
//           {
//             text: "Compliance And Reporting",
//             blogsCount: 10,
//           },
//           {
//             text: "Tax Audits And Investigations",
//             blogsCount: 10,
//           },
//           {
//             text: "International Taxation Issues",
//             blogsCount: 10,
//           },
//         ],
//       },
//     ],
//   };

//   useEffect(() => {
//     if (isDropdownOpen) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//     return () => document.body.classList.remove("no-scroll");
//   }, [isDropdownOpen]);

//   useEffect(() => {
//     setMounted(true);
//     toggleSidebar(navData?.items[0]?.title);
//     return () => setMounted(false);
//   }, []);

//   const toggleSidebar = (sidebarName) => {
//     setActiveSidebar(sidebarName);
//   };

//   if (!mounted) return null;

// //   console.log(navData?.items);

//   return createPortal(
//     <>
//       {isDropdownOpen && (
//         <ScreenOverlay
//           offsetTop={hideSecNav ? 54 : 106.5}
//           onClick={() => setActiveDropdown(null)}
//           zIndex={25}
//         />
//       )}
//       <div
//         ref={dropdownRef}
//         className={`w-[80%] mx-auto left-[50%] translate-x-[-50%] flex max-h-0 h-[80vh] fixed z-50 bg-white m-auto overflow-hidden rounded-2xl transition-all duration-700 ${
//           isDropdownOpen ? "max-h-[80vh] opacity-100" : "opacity-0"
//         }`}
//         style={{ top: `${hideSecNav ? "60px" : "110px"}` }}
//       >
//         <div className="w-[25.25%] flex flex-col overflow-y-auto text-[20px] font-semibold h-full bg-white shadow-md">
//           {navData?.items.map((item, index) => {
//             if (item.title == "Tools" || item.title == "Related Reads") {
//               return;
//             }
//             return (
//               <div
//                 key={index}
//                 className={`px-10 py-4 border-b border-b-gray-300 flex justify-between items-center group ${
//                   activeSidebar === item.title
//                     ? "text-[var(--primary)]"
//                     : "text-[var(--secondary)]"
//                 }`}
//                 onMouseOver={() => toggleSidebar(item.title)}
//               >
//                 {item.title}
//                 <svg
//                   className={`w-4 h-4 flex-shrink-0 font-bold transition duration-500 ${
//                     activeSidebar === item.title ? "rotate-45" : "rotate-0"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2.5}
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
//                   />
//                 </svg>
//               </div>
//             );
//           })}
//           {navData?.items.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className={`mx-10 pt-[30px] pb-[60px] ${
//                   activeSidebar == item.title ? "block" : "hidden"
//                 } `}
//               >
//                 <div className="mb-4 text-[24px] leading-[26px] font-normal">
//                   <span>{item?.leftBtn?.firstHeading}</span>{" "}
//                   <span className="text-[#8b151b] font-bold">
//                     {item?.leftBtn?.secondHeading}
//                   </span>
//                 </div>
//                 <a
//                   href={item.leftBtn?.cta?.url}
//                   className="py-[5px] px-5 text-xs font-normal cursor-pointer uppercase transition-colors duration-200 text-[#C91429] border-1 border-[#C91429] hover:text-white hover:bg-[#C91429] rounded-2xl"
//                 >
//                   {item?.leftBtn?.cta?.text}
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>,
//     document.body
//   );
// };

// export default SecondaryDropdown;
