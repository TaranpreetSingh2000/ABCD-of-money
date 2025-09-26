import FooterTabs from "@/components/FooterTabs";
import brandLogo from "../../../public/footer_brand_logo.png";
import DisclaimerAccordion from "@/components/DisclaimerAccordion";
import Link from "next/link";

const subsidiaries = [
  "Aditya Birla Sun Life Insurance Company Limited",
  "Aditya Birla Sun Health Insurance Company Limited",
  "Aditya Birla Sun Life AMC Limited",
  "Aditya Birla Money Limited",
  "Aditya Birla Money Limited",
  "Aditya Birla Finance Limited",
  "Aditya Birla Housing Finance Limited",
];

export default function FooterCard() {
  return (
    <footer>
      {/* Subsidiaries Section */}
      <div className="bg-[#c6c6c6]">
        <div className="py-3 max-w-[1440px] mx-auto px-6 lg:px-7 xl:px-[72px]">
          <h3 className="font-semibold text-sm text-[#353941] pb-2 lg:pb-3">
            OUR SUBSIDIARIES
          </h3>
          <ul className="lg:flex flex-wrap">
            {subsidiaries.map((name, idx) => (
              <li
                key={idx}
            className={`relative flex  lg:after:content-[''] lg:after:inline-block 
             lg:after:w-px lg:after:h-6 lg:after:bg-[#AEB0B3] 
             lg:after:mx-4 lg:py-1 cursor-pointer hover:text-[#c91429] font-medium text-[#353941] text-sm`}
              >
                <Link href="#">{name}</Link>
              </li>
            //   border-r pr-4 ${idx == 0 ? "":"pl-4"} border-r-[#aeb0b3]
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-[#cfcfcf]">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 xl:gap-12 px-6 lg:px-7 lg:py-8 max-w-[1440px] mx-auto xl:px-[72px]">
          <div className="lg:w-auto my-5 lg:my-0 w-full h-auto lg:block flex gap-2.5 justify-center items-end">
            <Link href="#" className="w-full h-[55px] max-lg:flex max-lg:items-end">
              <img
                className="w-full object-fit xl:object-cover h-12.5 lg:h-16"
                src="/footer_brand_logo.png"
                alt="Aditya Birla Capital Logo"
              />
            </Link>
            <div className="w-full flex items-start lg:items-start gap-1.5 px-1.5 py-[7px] lg:p-3 lg:mt-1 border bg-[#EBEBEB] border-amber-50 rounded-lg">
              <span>
                <img
                  className="w-7 border border-white rounded-full p-1 bg-red-700"
                  src="/ftr-phone-icon.svg"
                  alt="Phone Icon"
                />
              </span>
              <div>
                <p className="text-xs leading-2.5 text-[#909296] ">
                  Toll Free Number
                </p>
                <Link href="#" className="text-sm lg:text-base text-red-700">
                  1800 270 7000
                </Link>
              </div>
            </div>
          </div>

          {/* Tab Component */}
          <FooterTabs />

          {/* Download App Component */}
          <div className="lg:block lg:w-auto w-full flex flex-col gap-4 py-5 lg:py-0 items-center">
            <div className="lg:block flex gap-4">
              <img
                src="/abcd_logo.svg"
                className="w-9 h-9 bg-red-700 p-1 rounded-sm"
                alt=""
              />
              <p className="text-base text-gray-700 font-medium py-1 xl:py-2">
                Download ABCD
              </p>
            </div>
            <ul className="grid grid-cols-2 items-center lg:grid-cols-1 xl:grid-cols-2 gap-1 lg:gap-2 w-full">
              <li
                aria-label="Download on Playstore"
                className="border place-content-center w-full lg:w-fit border-white rounded-lg bg-[#ebebeb] hover:bg-white text-xs text-red-700 px-3 py-2 flex items-center"
              >
                <Link href="#" className="flex items-center gap-1">
                  <img src="/red_playstore.svg" alt="" className="max-w-3.5" />
                  Playstore
                </Link>
              </li>
              <li
                aria-label="Download on Appstore"
                className="border place-content-center w-full lg:w-fit border-white rounded-lg bg-[#ebebeb] hover:bg-white text-xs text-red-700 px-3 py-2 flex items-center"
              >
                <Link href="#" className="flex items-center gap-1">
                  <img src="/red_apple.svg" alt="" className="max-w-3.5" />
                  Appstore
                </Link>
              </li>
               <li
                aria-label="Download on Playstore"
                className="border place-content-center w-full lg:w-fit border-white rounded-lg bg-[#ebebeb] hover:bg-white text-xs text-red-700 px-3 py-2 flex items-center"
              >
                <Link href="#" className="flex items-center gap-1">
                  <img src="/red_playstore.svg" alt="" className="max-w-3.5" />
                  Playstore
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Accordian Component */}
      <DisclaimerAccordion />

      {/* Warning Text */}
      <div className="bg-[#c6c6c6] ">
        <div className="max-w-[1440px] mx-auto py-3.5 px-6 lg:px-7 xl:px-[72px]">
          <h3 className="text-sm text-[#353941] font-semibold">
            BEWARE OF SPURIOUS / FRAUD PHONE CALLS!
          </h3>
          <p className="text-xs font-medium py-2">
            IRDAI is not involved in activities like selling insurance policies,
            announcing bonus or investment of premiums. Public receiving such
            phone calls are requested to lodge a police complaint.
          </p>
        </div>
      </div>

      {/* Footer Red Strip */}
      <div className="bg-red-700 opacity-85">
        <div className="max-w-[1440px] mx-auto px-7 xl:px-[72px] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-2 py-2">
          <div>
            <p className="text-sm text-[#b1b0b0] tracking-normal lg:my-2">© 2023, Aditya Birla Capital Ltd. All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex flex-row gap-1 mb-1">
              <li><Link href='#'><img className="rounded-full p-1 bg-red-800" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/footer/social_light_facebook.svg" alt="" /></Link></li>
              <li><Link href='#'><img className="rounded-full p-1 bg-red-800" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/footer/social_light_twitter.svg" alt="" /></Link></li>
              <li><Link href='#'><img className="rounded-full p-1 bg-red-800" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/footer/social_light_instagram.svg" alt="" /></Link></li>
              <li><Link href='#'><img className="rounded-full p-1 bg-red-800" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/footer/social_light_linkedin.svg" alt="" /></Link></li>
              <li><Link href='#'><img className="rounded-full p-1 bg-red-800" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/footer/social_light_youtube.svg" alt="" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
