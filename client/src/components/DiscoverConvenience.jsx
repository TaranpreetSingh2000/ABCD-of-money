import Link from "next/link";
import React from "react";

const DiscoverConvenience = () => {
  return (
    <>
      <div className="lg:w-full lg:h-fit xl:h-[545px] lg:bg-cover lg:bg-no-repeat bg-[url(https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/discover-convenience-bg.png)]">
        {/* Mobile view */}
        <div className="max-lg:py-12">
          <section className="lg:hidden flex flex-col justify-center items-center text-center ">
              <div className="max-sm:px-3.5">
                <h2 className="text-3xl font-extralight mb-5 -tracking-[1.5px]">
                  Discover Convenience Like{" "}
                  <span className="text-red-600">Never Before</span>
                </h2>
                <p className="text-xs w-72 mx-auto font-medium">
                  Unlock Financial Tools, Investment Insights, And Expert Guidence -
                  All In One Convenient App.
                </p>
              </div>
              <div className="relative px-6">
                  {/* <div className="absolute top-1/3 left-1/6 z-10 rounded-xl hidden p-1 lg:flex flex-col bg-white w-28">
                      <img src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/mobile-app-barcode.webp" alt="QR code to download our mobile app" />
                      <span className="text-[9px]/2.5 font-semibold">Scan the QR code to download our Mobile App</span>
                  </div> */}
                  <img className="small-bounce" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/discover_download_img.webp" alt="Mobile app mockup preview" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  Download Our Mobile App Now
                </h3>
                <div className="flex gap-3 mt-3.5">
                  <Link href='#' className="flex gap-2.5 items-center rounded-full bg-red-700 opacity-85 text-xs sm:text-sm font-bold px-8 py-2.5 text-white ">
                    <img
                      className="w-5"
                      src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/apple-store.png"
                      alt="Download on Apple App Store"
                    />
                    <p>APP STORE</p>
                  </Link>
                  <Link href='#' className="flex gap-2.5 items-center rounded-full bg-red-700 text-xs opacity-85 font-bold px-8 py-2.5 text-white ">
                    <img
                      className="w-5 h-[19px]"
                      src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/play-store.png"
                      alt="Download on Google Play Store"
                    />
                    <p>PLAYSTORE</p>
                  </Link>
                </div>
              </div>
          </section>
        </div>

        {/* Desktop view */}
         <div className="max-lg:hidden max-xl:py-12 max-w-[1440px] mx-auto">
            <div className="flex flex-row justify-between relative overflow-hidden">
              <section aria-labelledby="discover-title" className="flex flex-col justify-center gap-14 xl:gap-8 lg:pl-7 xl:pl-16 w-[45%] xl:w-full">
                <div className="xl:max-w-lg">
                  <h2 className="text-[42px]/12 font-extralight mb-5 xl:mb-2">
                    Discover Convenience Like{" "}
                    <span className="text-red-600 xl:mr-10">Never Before</span>
                  </h2>
                  <p className="text-xl xl:text-lg font-medium xl:pr-20 text-[#303030]">
                    Unlock Financial Tools, Investment Insights, And Expert Guidance -
                    All In One Convenient App.
                  </p>
                </div>
                <div className="xl:max-w-lg">
                  <h3 className="text-2xl xl:text-xl font-semibold">
                    Download Our Mobile App Now
                  </h3>
                  <div className="flex gap-3 mt-4">
                    <Link href='#' className="flex gap-3 items-center rounded-full bg-red-700 opacity-85 text-base xl:text-sm font-bold px-8 py-4 xl:px-6 xl:py-3.5 text-white">
                      <img
                        className="w-5 xl:w-4"
                        src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/apple-store.png"
                        alt="Download on Apple App Store"
                      />
                      <p>APP STORE</p>
                    </Link>
                    <Link href='#' className="flex gap-3 items-center rounded-full bg-red-700 opacity-85 text-base xl:text-sm font-bold px-8 py-2.5 xl:px-6 xl:py-3.5 text-white">
                      <img
                        className="w-5 h-[19px] xl:w-4 xl:h-4"
                        src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/play-store.png"
                        alt="Download on Google Play Store"
                      />
                      <p>PLAYSTORE</p>
                    </Link>
                  </div>
                </div>
              </section>
               <div className="relative w-[55%] max-xl:-right-40 xl:w-full">
                  <div className="absolute top-[35%] left-1/12 xl:left-1/6 z-5 px-4 xl:px-2 pb-2 rounded-xl leading-2 text-center bg-white w-40 xl:w-28">
                      <img className="rounded-xl w-full" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/mobile-app-barcode.webp" alt="QR code to download our mobile app" />
                      <span className="text-sm xl:text-[10px] font-bold">Scan the QR code to download our Mobile App</span>
                  </div>
                <div>
                  <img className="small-bounce max-w-full w-full h-auto" src="https://qc.evolutionco.co.in/ABC_Website_Revamp/assets/images/discover_download_img.webp" alt="" />
                </div>
              </div>
            </div>
        </div> 
      </div>
    </>
  );
};

export default DiscoverConvenience;

