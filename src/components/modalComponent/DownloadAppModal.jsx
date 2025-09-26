import Link from "next/link";
import React from "react";

const DownloadAppModal = ({ isOpen, onClose }) => {
  return (
    <>
      <div className="relative z-10">
        <div
          onClick={onClose}
          className={`bg-black inset-0 fixed transition-opacity duration-500 ${
            isOpen ? "opacity-55" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <div
          className={`max-w-[500px] w-[415px] p-10 bg-white h-screen min-h-screen overflow-y-auto no-scrollbar fixed transform transition-all duration-500 ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          <button onClick={onClose} className="text-3xl absolute top-3 right-8">
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e"
              alt=""
              className="w-4 h-4"
            />
          </button>
          <div className="flex flex-col justify-center gap-4 items-center text-center ">
            <div>
              <img
                className="max-w-14 w-10"
                src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/abc_logo_red.ashx"
                alt=""
              />
            </div>
            <div className="text-[32px] leading-8 font-semibold">
              Download the ABCD App
            </div>
            <p className="text-sm leading-4 text-center font-semibold text-gray-500 mb-1">
              Unlock Financial Tools, Investment Insights, And Expert Guidance –
              All In One Convenient App.
            </p>
            <Link
              className="flex items-center gap-3 py-3 px-5 rounded-full bg-red-700 opacity-85 text-white text-xs hover:opacity-100
               transition-opacity duration-500"
              href="#"
            >
              DOWNLOAD OUR APP
              <img
                className="w-4 h-4"
                src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/play-store.ashx"
                alt="Play Store"
              />
              <img
                className="w-4 h-4"
                src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/apple-store.ashx"
                alt="Apple Store"
              />
            </Link>
          </div>
          <div className="relative">
            <img
              className="w-[90%] mx-auto"
              src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/download_app_mob_graphic.ashx"
              alt=""
            />
            <div className="w-[28%] absolute bottom-9 right-10 p-3 bg-white rounded-xl text-[8px] leading-2.5 text-[#7a7a7a] shadow-[20px_20px_29px_#00000059] text-center">
              <img
                className="max-w-[100px] w-full "
                src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/19122024_xf7of68m_qr_code.ashx"
                alt=""
              />
              <p>
                You can <span className="text-yellow-500">Scan the QR</span>{" "}
                Code to Download our Mobile App
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadAppModal;
