'use client'
import Link from "next/link";
import React, { useState } from "react";
import OurCompaniesModal from "./OurCompaniesModal";
import FormModal from "./modalComponent/FormModal";
import DownloadAppModal from "./modalComponent/DownloadAppModal";

const StickyNav = () => {
  const [activeModal, setActiveModal] = useState(false)

  const openModal = (modalName) => {
    document.body.classList.add('no-scroll')
    setActiveModal(modalName)
  }

  const closeModal = () => {
    document.body.classList.remove('no-scroll')
    setActiveModal(false)
  }

  return (
    <>
    <div className="hidden lg:block fixed z-10 rounded-l-xl bg-white right-0 top-[30%]">
      <ul className="rounded-l-xl max-w-[60px] border border-gray-50">
        <li onClick={() => openModal('ourCompanies')} className="group rounded-tl-xl flex items-center text-center p-2 justify-center border-b border-b-[#ccc] transition-all duration-500 hover:bg-red-700">
          <span
            className="flex justify-center items-center gap-3.5 flex-col text-[10px] leading-2.5 text-[rgba(17,17,17,0.7)] font-bold group-hover:text-white"
          >
            <img
              className="max-w-[25px] w-full h-auto"
              src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/sticky_ico1.webp?extension=webp"
              alt="Our Companies"
            />
            <span>OUR COMPANIES</span>
          </span>
        </li>
        <li onClick={() => openModal('form')} className="group flex items-center text-center p-2 justify-center border-b border-b-[#ccc] transition-all duration-500 hover:bg-red-700">
          <span
            className="flex justify-center items-center gap-3.5 flex-col text-[10px] leading-2.5 group-hover:text-white text-[rgba(17,17,17,0.7)] font-bold"
          >
            <img
              className="max-w-[25px] w-full h-auto"
              src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/sticky_ico3.webp?extension=webp"
              alt="GET IN TOUCH "
            />
            <span>GET IN TOUCH</span>
          </span>
        </li>
        <li className="flex group items-center text-center p-2 justify-center border-b border-b-[#ccc] transition-all duration-500 hover:bg-red-700">
          <Link
            href="#"
            className="flex justify-center items-center gap-3.5 flex-col text-[10px] leading-2.5 group-hover:text-white text-[rgba(17,17,17,0.7)] font-bold"
          >
            <img
              className="max-w-[25px] w-full h-auto"
              src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Credit-score-black.webp?extension=webp"
              alt="FREE CREDIT SCORE"
            />
            <span>FREE CREDIT SCORE</span>
          </Link>
        </li>
        <li onClick={() => openModal('downloadApp')} className="rounded-bl-xl flex group items-center text-center p-2 justify-center transition-all duration-500 hover:bg-red-700 ">
          <span
            className="flex justify-center items-center gap-3.5 flex-col text-[10px] leading-2.5 group-hover:text-white text-[rgba(17,17,17,0.7)] font-bold"
          >
            <img
              className="max-w-[25px] w-full h-auto block group-hover:hidden"
              src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/Logo-2.webp?extension=webp"
              alt="DOWNLOAD MOBILE APP"
            />
            <img
              className="max-w-[25px] w-full h-auto hidden group-hover:block"
              src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/Logo-3.webp?extension=webp"
              alt="DOWNLOAD MOBILE APP"
            />
            <span>DOWNLOAD MOBILE APP</span>
          </span>
        </li>
      </ul>
    </div>
     <div className="hidden lg:block">
       <OurCompaniesModal isOpen={activeModal === "ourCompanies"} onClose={closeModal} />
       <FormModal isOpen={activeModal === "form"} onClose={closeModal} />
       <DownloadAppModal isOpen={activeModal === "downloadApp"} onClose={closeModal} />
     </div>
      {/* { activeModal === 'downloadApp' && <DownloadAppModal onClose={closeModal}/>} */}
      </>
  );
};

export default StickyNav;
