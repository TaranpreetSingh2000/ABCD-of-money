import React from "react";
import FormTab from "./FormTab";
import ContactForm from "./ContactForm";

const FormModal = ({isOpen, onClose}) => {
  return (
    <>
      <div className="relative z-10">
        <div onClick={onClose} className={`bg-black inset-0 fixed transition-opacity duration-500 ${isOpen ? "opacity-55" : "opacity-0 pointer-events-none"}`}></div>
        <form className={`max-w-[500px] h-screen overflow-y-auto p-12 bg-white min-h-screen fixed transform transition-all duration-500 ${isOpen ? "right-0" : "-right-full"}`}>
           <button onClick={onClose} className="text-3xl absolute top-5 right-5">
             <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e" alt="" className="w-3.5 h-3.5" />
          </button>
          <div>
            <div className="mb-5">
              <div className="text-3xl font-semibold mb-2">Connect With Us</div>
              <p className="leading-4.5 text-base mb-5">
                Your Path To Endless Financial Continuity From A Brand You Trust
              </p>
            </div>
            <FormTab />
          </div>
          <div>
            <ContactForm />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormModal;
 