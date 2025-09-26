"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderDropdown from "./Dropdowns/HeaderDropdown";
import MobileHeader from "./MobileHeader/MobileHeader";
import HeaderTopNav from "./HeaderTopNav";
import HeaderBottomNav from "./HeaderBottomNav";
import SecondaryDropdown from "./Dropdowns/SecondaryDropdown";
import TickerBanner from "../Ticker";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hideSecNav, setHideSecNav] = useState(false);
  const [resetBottomNavDropdown, setResetBottomNavDropdown] = useState(null);

  // const toggleDropdown = (dropdownName) => {
  //   setActiveDropdown((prev) => {
  //     if (prev !== dropdownName) {
  //       if (resetBottomNavDropdown) {
  //         resetBottomNavDropdown();
  //       }
  //       return dropdownName;
  //     }
  //     return null;
  //   });
  // };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => {
      if (prev !== dropdownName) {
        return dropdownName;
      }
      return null;
    });
  };

  const headerData = {
    data: {
      attributes: {
        secondaryNavigation: {
          leftNav: [
            {
              text: "PERSONAL",
              url: "",
              isActive: false,
            },
            {
              text: "BUSINESS",
              url: "",
            },
            {
              text: "CORPORATES",
              url: "javascript:;",
              dropdown: {
                items: [
                  {
                    title: "Loans",
                    links: [
                      {
                        text: "Corporate Finance",
                        url: "#",
                      },
                      {
                        text: "Mortgage Finance",
                        url: "#",
                      },
                      {
                        text: "Loans Against Securities",
                        url: "#",
                      },
                      {
                        text: "DCM & Loan Syndication",
                        url: "#",
                      },
                    ],
                  },
                  {
                    title: "Investments",
                    links: [
                      {
                        text: "Mutual Funds",
                        url: "#",
                      },
                      {
                        text: "Stock and Securities",
                        url: "#",
                      },
                      {
                        text: "Portfolio Management Services",
                        url: "#",
                      },
                      {
                        text: "Pension Funds",
                        url: "#",
                      },
                    ],
                  },
                  {
                    title: "Insurance",
                    links: [
                      {
                        text: "Corporate General Insurance",
                        url: "#",
                      },
                      {
                        text: "Group Health Insurance",
                        url: "#",
                      },
                      {
                        text: "Group Life Insurance",
                        url: "#",
                      },
                    ],
                  },
                ],
              },
            },
            {
              text: "ADVISORS",
              url: "javascript:;",
              dropdown: {
                items: [
                  {
                    title: "Loans",
                    links: [
                      {
                        text: "Home Finance Advisors",
                        url: "#",
                      },
                      {
                        text: "Personal Finance Advisors",
                        url: "#",
                      },
                    ],
                  },
                  {
                    title: "Investments",
                    links: [
                      {
                        text: "Mutual Funds Advisors",
                        url: "#",
                      },
                      {
                        text: "Stocks & Securities Advisors",
                        url: "#",
                      },
                    ],
                  },
                  {
                    title: "Insurance",
                    links: [
                      {
                        text: "Life Insurance Advisors",
                        url: "#",
                      },
                      {
                        text: "Health Insurance Advisors",
                        url: "#",
                      },
                    ],
                  },
                  {
                    title: "Complete Money Solutions",
                    links: [
                      {
                        text: "Select Advisor",
                        url: "#",
                      },
                    ],
                  },
                ],
              },
            },
            {
              text: "CAREERS",
              url: "",
            },
          ],
          rightNav: [
            {
              text: "1800 270 7000",
              url: "tel:18002707000",
              icon: {
                url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/nav_phone.webp?extension=webp",
                alt: "Telephone Icon",
                width: "100%",
                height: "100%",
              },
            },
          ],
        },
        primaryNavigation: {
          brandLogo: {
            url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/newlogo.webp?extension=webp",
            alt: "Aditya Birla Capital",
            width: 158,
            height: 40,
            loading: "lazy",
          },
          dropdownNav: [
            {
              text: "Loans",
              url: "javascript:void(0)",
              isActive: false,

              dropdown: {
                items: [
                  {
                    title: "Housing Finance",
                    links: [
                      {
                        heading: "Home Loan",
                        url: "javascript:void(0)",
                        description:
                          "Make your dream of owning a home a reality",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan1.webp?extension=webp",
                          alt: "Home Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Balance Transfer",
                        url: "javascript:void(0)",
                        description:
                          "Find a better interest rate for your existing home loan",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan2.webp?extension=webp",
                          alt: "Balance Transfer",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Top-up Home Loan",
                        url: "javascript:void(0)",
                        description:
                          "Get the extra cash you need to finance your dream home",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan3.webp?extension=webp",
                          alt: "Top-up Home Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Loan Against Property",
                        url: "javascript:void(0)",
                        description:
                          "Empower your financial goals with the assets you already own",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan4.webp?extension=webp",
                          alt: "Loan Against Property",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Construction Finance",
                        url: "javascript:void(0)",
                        description:
                          "Finance your real estate project from foundation to finish",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan5.webp?extension=webp",
                          alt: "Construction Finance",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Home Loan Basics",
                        url: "javascript:void(0)",
                        description:
                          "Learn the essentials of securing a home loan",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan1.webp?extension=webp",
                          alt: "Home Loan Basics",
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
                        heading: "Mortgage Options",
                        url: "javascript:void(0)",
                        description: "Explore mortgage options for your home",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/nav_loan2.webp?extension=webp",
                          alt: "Mortgage Options",
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
                    leftBtn: {
                      firstHeading: "Explore Housing Finance",
                      secondHeading: "Find the Right Loan",
                      cta: {
                        text: "Get Started",
                        url: "https://abcduat1.abcscuat.com/housing-finance",
                      },
                    },
                    tags: [
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
                  },
                  {
                    title: "Personal Finance",
                    links: [
                      {
                        heading: "Personal Loan",
                        url: "javascript:void(0)",
                        description:
                          "Get a Personal Loan instantly without any collateral",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Personal Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Aditya Birla SBI Card",
                        url: "javascript:void(0)",
                        description: "Get rewarded every time you shop",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Aditya Birla SBI Card",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Flexi Loan",
                        url: "javascript:void(0)",
                        description:
                          "Get a flexible loan that adapts to your needs",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Flexi Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Discover Personal Finance",
                      secondHeading: "Flexible Loan Options",
                      cta: {
                        text: "Learn More",
                        url: "https://abcduat1.abcscuat.com/personal-finance",
                      },
                    },
                    tags: ["Service Request Form", "Brochure", "FAQs"],
                  },
                  {
                    title: "SME Finance",
                    links: [
                      {
                        heading: "Line of Credit",
                        url: "javascript:void(0)",
                        description:
                          "Access the funds you need to grow your business",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Line of Credit",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Unsecured Business Loan",
                        url: "javascript:void(0)",
                        description:
                          "Get a loan for your business needs without providing collateral",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Unsecured Business Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Secured Business Loan",
                        url: "javascript:void(0)",
                        description:
                          "Get loans for all of your business needs at attractive rates",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Secured Business Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Working Capital Demand Loan",
                        url: "javascript:void(0)",
                        description:
                          "Meet your business’s financial needs from a dependable source",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Working Capital Demand Loan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading:
                          "Supply Chain Financing Solutions - Invoice Discounting",
                        url: "javascript:void(0)",
                        description:
                          "Ensure your business always has a smooth cash flow",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Supply Chain Financing Solutions",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Grow Your Business",
                      secondHeading: "SME Financing Solutions",
                      cta: {
                        text: "Explore Options",
                        url: "https://abcduat1.abcscuat.com/sme-finance",
                      },
                    },
                    tags: [
                      "Grievance Redressal Form",
                      "Service Request Form",
                      "Financial Reports",
                    ],
                  },
                  {
                    title: "Tools",
                    links: [
                      {
                        heading: "Free Credit Score",
                        url: "javascript:void(0)",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis, Diam Id.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/fcs-img--svg.webp?extension=webp",
                          alt: "Free Credit Score",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Home Loan EMI Calculator",
                        url: "javascript:void(0)",
                        description:
                          "Get an estimate of your Home Loan EMI now",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Home Loan EMI Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Home Loan Eligibility Calculator",
                        url: "javascript:void(0)",
                        description:
                          "Check your home loan eligibility in seconds",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Home Loan Eligibility Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "PMAY Calculator",
                        url: "javascript:void(0)",
                        description:
                          "Get an estimate of your PMAY subsidy in a few clicks",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "PMAY Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Personal Loan Eligibility Calculator",
                        url: "",
                        description:
                          "Find out if you are eligible for a Personal Loan",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Personal Loan Eligibility Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Personal Loan EMI Calculator",
                        url: "",
                        description:
                          "Get an estimate of your Personal Loan EMI now",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Personal Loan EMI Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Business Loan EMI Calculator",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis, Diam Id.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Business Loan EMI Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Financial Tools",
                      secondHeading: "Calculate Your Needs",
                      cta: {
                        text: "Try Now",
                        url: "https://abcduat1.abcscuat.com/tools",
                      },
                    },
                    tags: ["Eligibility Calculator", "EMI Calculator", "FAQs"],
                  },
                  {
                    title: "Related Reads",
                    links: [
                      {
                        heading: "All You Need To Know About Insurance Policy",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                          webpUrl:
                            "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                          alt: "All You Need To Know About Insurance Policy",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "All You Need To Know About Insurance Policy",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Home-Renovation-Loan.webp?extension=webp",
                          webpUrl:
                            "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Home-Renovation-Loan.webp?extension=webp",
                          alt: "All You Need To Know About Insurance Policy",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Insurance Basics",
                        url: "",
                        description:
                          "Understand the fundamentals of insurance policies",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Mortgage-Loan.webp?extension=webp",
                          alt: "Insurance Basics",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Read More",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    leftBtn: {
                      firstHeading: "Learn More",
                      secondHeading: "Insurance Insights",
                      cta: {
                        text: "Discover Now",
                        url: "https://abcduat1.abcscuat.com/related-reads",
                      },
                    },
                    tags: ["FAQs", "Brochure"],
                  },
                ],
              },
            },
            {
              text: "Investments",
              url: "javascript:void(0)",
              isActive: false,
              dropdown: {
                items: [
                  {
                    title: "Mutual Funds",
                    links: [
                      {
                        heading: "Wealth Creation",
                        url: "javascript:void(0)",
                        description:
                          "Build your wealth with our expert-managed Mutual Funds",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/mf_01.webp?extension=webp",
                          alt: "Wealth Creation",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Tax Saving",
                        url: "javascript:void(0)",
                        description:
                          "Invest in Mutual Funds to grow money while saving taxes",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/tax_01.webp?extension=webp",
                          alt: "Tax Saving",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Income",
                        url: "javascript:void(0)",
                        description:
                          "Invest smartly and earn regular incomes from Mutual Funds",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/mf_07.webp?extension=webp",
                          alt: "Income",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Savings",
                        url: "javascript:void(0)",
                        description:
                          "Save for your short-term goals and earn stable returns",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/mf_02.webp?extension=webp",
                          alt: "Savings",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Mutual Fund Basics",
                        url: "javascript:void(0)",
                        description:
                          "Learn the essentials of mutual fund investments",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/mf_01.webp?extension=webp",
                          alt: "Mutual Fund Basics",
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
                    leftBtn: {
                      firstHeading: "Explore Mutual Funds",
                      secondHeading: "Grow Your Wealth",
                      cta: {
                        text: "Get Started",
                        url: "https://abcduat1.abcscuat.com/mutual-funds",
                      },
                    },
                    tags: [
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
                  },
                  {
                    title: "Stocks & Securities",
                    links: [
                      {
                        heading: "Open Demat Account",
                        url: "javascript:void(0)",
                        description:
                          "Create a Demat Account and start investing",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Open Demat Account",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "IPO Calender",
                        url: "javascript:void(0)",
                        description:
                          "Stay up-to-date with current and upcoming IPOs",
                        image: {
                          url: "https://www.adityabirlacapital.com/assets/images/calendar_icon.svg",
                          alt: "IPO Calender",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Discover Stocks",
                      secondHeading: "Invest in Securities",
                      cta: {
                        text: "Learn More",
                        url: "https://abcduat1.abcscuat.com/stocks-securities",
                      },
                    },
                    tags: ["Service Request Form", "Brochure", "FAQs"],
                  },
                  {
                    title: "Other Investments",
                    links: [
                      {
                        heading: "Debt Funds",
                        url: "javascript:void(0)",
                        description:
                          "Diversify your portfolio and reduce risk with Debt Funds",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/res_debt_funds.ashx?iar=0&hash=062000C21FE077500DE78DACECF1222B",
                          alt: "Debt Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Equity Funds",
                        url: "javascript:void(0)",
                        description:
                          "The smart way to invest in the stock market",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/demat/ic-equity.webp?extension=webp",
                          alt: "Equity Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "ETF Funds",
                        url: "javascript:void(0)",
                        description:
                          "Invest easily, diversify wisely, and grow your wealth",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "ETF Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Hybrid Funds",
                        url: "javascript:void(0)",
                        description:
                          "Strike the perfect balance between growth and stability",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Hybrid Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Fund Of Funds",
                        url: "javascript:void(0)",
                        description: "Maximise your returns with Fund of Funds",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Fund Of Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Index Funds",
                        url: "javascript:void(0)",
                        description:
                          "Follow the benchmark of smart investors to grow your wealth",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Index Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Target Maturity Funds",
                        url: "javascript:void(0)",
                        description:
                          "Align your investments with your financial goals",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Target Maturity Funds",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Explore Investments",
                      secondHeading: "Diversify Your Portfolio",
                      cta: {
                        text: "Learn More",
                        url: "https://abcduat1.abcscuat.com/other-investments",
                      },
                    },
                    tags: [
                      "Grievance Redressal Form",
                      "Service Request Form",
                      "Financial Reports",
                    ],
                  },
                  {
                    title: "Tools",
                    links: [
                      {
                        heading: "Free Credit Score",
                        url: "javascript:void(0)",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis, Diam Id.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/fcs-img--svg.webp?extension=webp",
                          alt: "Free Credit Score",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "SIP Calculator",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis, Diam Id.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "SIP Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Mutual Fund Lumpsum Calculator",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis, Diam Id.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Mutual Fund Lumpsum Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "BMI Calculator",
                        url: "javascript:void(0)",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis, Diam Id.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "BMI Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Financial Tools",
                      secondHeading: "Plan Your Investments",
                      cta: {
                        text: "Try Now",
                        url: "https://abcduat1.abcscuat.com/tools",
                      },
                    },
                    tags: ["Eligibility Calculator", "EMI Calculator", "FAQs"],
                  },
                  {
                    title: "Related Reads",
                    links: [
                      {
                        heading: "All You Need To Know About Insurance Policy",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                          webpUrl:
                            "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                          alt: "All You Need To Know About Insurance Policy",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Investment Insights",
                        url: "",
                        description:
                          "Discover key insights for smarter investing",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Mutual-Funds-1.webp?extension=webp",
                          alt: "Investment Insights",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Read More",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    leftBtn: {
                      firstHeading: "Learn More",
                      secondHeading: "Investment Resources",
                      cta: {
                        text: "Discover Now",
                        url: "https://abcduat1.abcscuat.com/related-reads",
                      },
                    },
                    tags: ["FAQs", "Brochure"],
                  },
                ],
              },
            },
            {
              text: "Insurance",
              url: "javascript:void(0)",
              isActive: false,
              dropdown: {
                items: [
                  {
                    title: "Life Insurance",
                    links: [
                      {
                        heading: "Term Plan",
                        url: "javascript:void(0)",
                        description:
                          "Bring security and peace to life’s unpredictability",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Term Plan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Retirement Plan",
                        url: "javascript:void(0)",
                        description:
                          "Get a guaranteed regular pension plus a lump sum on plan maturity",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/Product-Recommendation/Icons/Retirement-Plan.webp?extension=webp",
                          alt: "Retirement Plan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Savings Plan",
                        url: "javascript:void(0)",
                        description:
                          "Build wealth over time with disciplined savings",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/Product-Recommendation/Icons/Saving-Plan-new.webp?extension=webp",
                          alt: "Savings Plan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Child Plan",
                        url: "javascript:void(0)",
                        description:
                          "Ensure your child’s future with a combo of investment and insurance",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/plans_ico4.webp?extension=webp",
                          alt: "Child Plan",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "ULIP",
                        url: "javascript:void(0)",
                        description:
                          "Get the benefits of insurance and wealth creation in one convenient plan",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "ULIP",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Life Insurance Basics",
                        url: "javascript:void(0)",
                        description:
                          "Understand the essentials of life insurance",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Life Insurance Basics",
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
                    leftBtn: {
                      firstHeading: "Explore Life Insurance",
                      secondHeading: "Secure Your Future",
                      cta: {
                        text: "Get Started",
                        url: "https://abcduat1.abcscuat.com/life-insurance",
                      },
                    },
                    tags: [
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
                  },
                  {
                    title: "Health Insurance",
                    links: [
                      {
                        heading: "Health & Wellness Plans",
                        url: "javascript:void(0)",
                        description:
                          "Make quality health care affordable and accessible",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Health & Wellness Plans",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Top-up Plans",
                        url: "javascript:void(0)",
                        description:
                          "Get the extra coverage you need when you need it most",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/plans_ico7.webp?extension=webp",
                          alt: "Top-up Plans",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Discover Health Insurance",
                      secondHeading: "Protect Your Health",
                      cta: {
                        text: "Learn More",
                        url: "https://abcduat1.abcscuat.com/health-insurance",
                      },
                    },
                    tags: ["Service Request Form", "Brochure", "FAQs"],
                  },
                  {
                    title: "Tools",
                    links: [
                      {
                        heading: "Power of Compounding",
                        url: "",
                        description:
                          "Check how much your money can grow over time",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Power of Compounding",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "BMI Calculator",
                        url: "",
                        description:
                          "Measure your body mass index to start your journey to better health",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "BMI Calculator",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Financial Tools",
                      secondHeading: "Plan Your Insurance",
                      cta: {
                        text: "Try Now",
                        url: "https://abcduat1.abcscuat.com/tools",
                      },
                    },
                    tags: ["Eligibility Calculator", "FAQs"],
                  },
                  {
                    title: "Related Reads",
                    links: [
                      {
                        heading: "All You Need To Know About Insurance Policy",
                        url: "",
                        description:
                          "Mauris Porta Arcu Id Tortor Pulvinar Cursus. Mattis",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                          webpUrl:
                            "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/related-reads/Life-Insurance-2.webp?extension=webp",
                          alt: "All You Need To Know About Insurance Policy",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Learn More",
                      secondHeading: "Insurance Insights",
                      cta: {
                        text: "Discover Now",
                        url: "https://abcduat1.abcscuat.com/related-reads",
                      },
                    },
                    tags: ["FAQs", "Brochure"],
                  },
                ],
              },
            },
            {
              text: "Payments",
              url: "javascript:void(0)",
              isActive: false,
              dropdown: {
                items: [
                  {
                    title: "Payment for Individuals",
                    links: [
                      {
                        heading: "Pay Bills",
                        url: "https://www.adityabirlacapital.com/abcd/bill-payments",
                        description:
                          "Utility bill payments made easy with BillPay",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/hi_01.webp?extension=webp",
                          alt: "Pay Bills",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Pay for Anything",
                        url: "https://www.adityabirlacapital.com/abcd/upi-payment-app",
                        description:
                          "Shopping grocery, lifestyle or paying bills, pay anything with our payment solutions",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Pay for Anything",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Pay Anyone",
                        url: "https://www.adityabirlacapital.com/abcd/app-for-money-transfer",
                        description:
                          "Sending money to individuals and businesses made easy and instant",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/plans_ico3.webp?extension=webp",
                          alt: "Pay Anyone",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Pay on Call",
                        url: "https://www.adityabirlacapital.com/abcd/upi123-pay-on-call",
                        description:
                          "Pay on call in 3 simple steps by providing your UPI ID",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Pay on Call",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Payment Solutions",
                        url: "https://www.adityabirlacapital.com/abcd/payments",
                        description:
                          "Explore easy payment options for individuals",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/hi_01.webp?extension=webp",
                          alt: "Payment Solutions",
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
                    leftBtn: {
                      firstHeading: "Explore Payments",
                      secondHeading: "Simplify Transactions",
                      cta: {
                        text: "Get Started",
                        url: "https://abcduat1.abcscuat.com/payments",
                      },
                    },
                    tags: [
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
                  },
                  {
                    title: "Cards",
                    links: [
                      {
                        heading: "Prepaid Gift Card",
                        url: "https://www.adityabirlacapital.com/abcd/prepaid-gift-card",
                        description:
                          "Your Gift, Their Choice Celebrate Every Occasion with ABCD Gift Cards",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/ico_fin_sol5.webp?extension=webp",
                          alt: "Prepaid Gift Card",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Credit Cards",
                        url: "https://www.adityabirlacapital.com/credit-card",
                        description:
                          "Wide range of curated co-branded credit cards",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Instant-Personal-Loan.webp?extension=webp",
                          alt: "Credit Cards",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Discover Cards",
                      secondHeading: "Flexible Payment Options",
                      cta: {
                        text: "Learn More",
                        url: "https://abcduat1.abcscuat.com/cards",
                      },
                    },
                    tags: ["Service Request Form", "Brochure", "FAQs"],
                  },
                  {
                    title: "Tools",
                    links: [
                      {
                        heading: "Free Credit Score",
                        url: "https://www.adityabirlacapital.com/abcd/check-free-credit-score",
                        description:
                          "Discover your financial fitness - check your credit score",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi_calc.webp?extension=webp",
                          alt: "Free Credit Score",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Financial Tools",
                      secondHeading: "Manage Your Payments",
                      cta: {
                        text: "Try Now",
                        url: "https://abcduat1.abcscuat.com/tools",
                      },
                    },
                    tags: ["Eligibility Calculator", "FAQs"],
                  },
                ],
              },
            },
            {
              text: "About Us",
              url: "javascript:void(0)",
              isActive: true,
              dropdown: {
                items: [
                  {
                    title: "ABCL Overview",
                    links: [
                      {
                        heading: "Aditya Birla Capital Limited",
                        url: "",
                        description:
                          "ABCL is a listed NBFC providing financial solutions across Loans, Investments, Insurance, and Payments with over 1,690 branches and 200,000+ partners.",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/newlogo.webp?extension=webp",
                          alt: "Aditya Birla Capital Limited",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [
                      {
                        heading: "Our Mission",
                        url: "",
                        description: "Learn about ABCL's mission and values",
                        image: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/newlogo.webp?extension=webp",
                          alt: "Our Mission",
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
                    leftBtn: {
                      firstHeading: "About ABCL",
                      secondHeading: "Our Financial Solutions",
                      cta: {
                        text: "Discover Now",
                        url: "https://abcduat1.abcscuat.com/abcl-overview",
                      },
                    },
                    tags: [
                      "Grievance Redressal Form",
                      "Service Request Form",
                      "Brochure",
                      "FAQs",
                      "Financial Reports",
                    ],
                  },
                  {
                    title: "Stats",
                    links: [
                      {
                        heading: "Nationwide Branches",
                        url: "",
                        description: "1,690",
                        image: {
                          url: "https://www.adityabirlacapital.com/assets/images/abfl_nav1.png",
                          alt: "Nationwide Branches",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "No. of Employees",
                        url: "",
                        description: "61,600+",
                        image: {
                          url: "https://www.adityabirlacapital.com/assets/images/abfl_nav2.png",
                          alt: "No. of Employees",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Agents/Channel Partners",
                        url: "",
                        description: "2,00,000+",
                        image: {
                          url: "https://www.adityabirlacapital.com/assets/images/abfl_nav3.png",
                          alt: "Agents/Channel Partners",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Aggregate Assets",
                        url: "",
                        description: "INR 5.53 Lakh Cr",
                        image: {
                          url: "https://www.adityabirlacapital.com/assets/images/abfl_nav4.png",
                          alt: "Aggregate Assets",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                      {
                        heading: "Consolidated Lending Book",
                        url: "",
                        description: "INR 1.65 Lakh Cr",
                        image: {
                          url: "https://www.adityabirlacapital.com/assets/images/abfl_nav6.png",
                          alt: "Consolidated Lending Book",
                        },
                        backgroundImage: {
                          url: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/bmi-bg.ashx",
                          alt: "gray-bg",
                        },
                        cta: {
                          text: "Calculate now",
                          url: "https://abcduat1.abcscuat.com/",
                        },
                      },
                    ],
                    bottomSlider: [],
                    leftBtn: {
                      firstHeading: "Our Impact",
                      secondHeading: "Key Statistics",
                      cta: {
                        text: "Learn More",
                        url: "https://abcduat1.abcscuat.com/stats",
                      },
                    },
                    tags: ["Financial Reports", "Brochure", "FAQs"],
                  },
                ],
              },
            },
          ],
        },
        subCategoryNavigation: {
          links: [
            {
              text: "Income Tax",
              url: "javascript:void(0)",
              dataTarget: "income_tax",
            },
            {
              text: "ABC Of Life Insurance",
              url: "javascript:void(0)",
              dataTarget: "abc_life",
            },
            {
              text: "Home Finance",
              url: "javascript:void(0)",
              dataTarget: "home_finance",
            },
            {
              text: "Wealth Creation",
              url: "javascript:void(0)",
              dataTarget: "wealth_creation",
            },
            {
              text: "Travel Insurance",
              url: "javascript:void(0)",
              dataTarget: "travel_insurance",
            },
            {
              text: "Retirement",
              url: "javascript:void(0)",
              dataTarget: "retirement",
            },
            {
              text: "Stocks",
              url: "javascript:void(0)",
              dataTarget: "stocks",
            },
            {
              text: "Mutual Funds",
              url: "javascript:void(0)",
              dataTarget: "mutual_funds",
            },
          ],
        },
      },
    },
  };

  const dropdownNav = headerData.data.attributes.primaryNavigation.dropdownNav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHideSecNav(true);
      } else {
        setHideSecNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (
  //       !event.target.closest(".BottomNav") &&
  //       !event.target.closest(".primaryNav") &&
  //       !event.target.closest(".secondaryNav")
  //     ) {
  //       setActiveDropdown(null);
  //       if (resetBottomNavDropdown) {
  //         resetBottomNavDropdown();
  //       }
  //     }
  //   };

  //   document.addEventListener("click", handleOutsideClick);
  //   return () => document.removeEventListener("click", handleOutsideClick);
  // }, [resetBottomNavDropdown]);

  return (
    <header // top-11
      className={`fixed top-0 w-full transition-all duration-500 bg-white ${
        hideSecNav ? "-translate-y-[53px]" : "translate-y-0" // "-translate-y-24" : "translate-y-0"
      }`}
    >
      {/* <TickerBanner /> */}

      <div className="max-w-[var(--breakpoint-large)] mx-auto flex flex-col w-full">
        <HeaderTopNav
          secondaryNavigation={headerData.data.attributes.secondaryNavigation}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          toggleDropdown={toggleDropdown}
          hideSecNav={hideSecNav}
        />
        <div className="mx-auto z-30 w-full flex flex-col shadow-md items-center bg-white">
          <div className="flex items-center w-full mx-auto">
            {/* Logo */}
            <div className="max-lg:hidden flex items-center xl:pl-7.5 xl:pr-7.5">
              <Link href="/" className="w-[130px]">
                <Image
                  width={130}
                  height={30}
                  src="/images/logo/aditya-birla-logo.webp"
                  alt="Logo"
                  className=""
                />
              </Link>
            </div>
            <div className="max-lg:hidden h-[55px] flex items-center justify-between w-full bg-[var(--primary)] text-white rounded-bl-2xl pl-5 xl:pr-10">
              {/* Navigation */}
              <nav className="hidden md:flex items-center text-[15px]">
                {dropdownNav.map((navItem, index) => {
                  const navData = navItem.dropdown;
                  // console.log(navItem, "Header ---------------------------");

                  return (
                    <div className="primaryNav" key={index}>
                      <button
                        onClick={() => toggleDropdown(`${navItem.text}`)}
                        className={`relative text-white focus:outline-none bg-[#c91429] pt-2.5 pr-8 pb-2.5 pl-4.5 transition-all rounded-lg duration-500 hover-custom-gradient flex items-center gap-2 ${
                          activeDropdown === `${navItem.text}` ? "active" : ""
                        }`}
                      >
                        {navItem.text}
                      </button>
                      <HeaderDropdown
                        setActiveDropdown={setActiveDropdown}
                        isDropdownOpen={activeDropdown === `${navItem.text}`}
                        hideSecNav={hideSecNav}
                        navData={navData}
                      />
                    </div>
                  );
                })}
                {/* <Link
                  href={"/"}
                  className="flex gap-2 transition-all rounded-lg duration-500 hover-custom-gradient items-center"
                >
                  Download
                  <img
                    src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/Logo-3.ashx"
                    alt=""
                    className="max-w-[30px]"
                  />
                </Link> */}
              </nav>

              {/* Login / Quick Services */}
              <div className="hidden primaryNav md:flex gap-1 my-3 font-semibold">
                <a
                  className="w-7.5 h-7.5"
                  href="https://www.adityabirlacapital.com/abcd"
                >
                  <img
                    src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/navigation-gif-2.webp?extension=webp"
                    alt=""
                    className="object-contain"
                  />
                </a>
                <button
                  onClick={() => toggleDropdown("Payments")}
                  className="flex flex-row justify-center items-center gap-2 uppercase text-xs leading-none pt-[5px] pr-[38px] pb-[5px] pl-[10px] !border-1 border-white rounded-full"
                >
                  Tools
                </button>
                <button
                  onClick={() => toggleDropdown("About Us")}
                  className="flex items-center gap-2 uppercase text-xs leading-none pt-[5px] pr-[38px] pb-[5px] pl-[10px] !border-1 border-white rounded-full"
                >
                  Quick Services
                </button>
                {/* <SecondaryDropdown
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  hideSecNav={hideSecNav}
                /> */}
                <div className="py-[5px] px-[20px] text-[12px] !border-1 !bg-white text-[#C91429] rounded-full hover:bg-[var(--primary)] hover:text-white transition duration-700">
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeaderBottomNav
          subCategoryNavigation={
            headerData.data.attributes.subCategoryNavigation
          }
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          toggleDropdown={toggleDropdown}
        />
        <MobileHeader headerData={headerData} />
      </div>
    </header>
  );
};

export default Header;
