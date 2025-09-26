"use client";
import { useState, useEffect } from "react";
import { OtpVerification } from "./OtpVerification";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [openNewComp, setOpenNewComp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isNameValid = /^[A-Za-z\s]+$/.test(formData.name.trim());
  const isContactValid = /^[6-9]\d{9}$/.test(formData.contact);
  const isValid = isNameValid && isContactValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setOpenNewComp(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="pl-7 text-xs font-semibold">
          Full Name
        </label>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            maxLength={50}
            value={formData.name}
            onKeyDown={(e) => {
              const allowedKeys = /^[a-zA-Z\s]$/;
              if (
                !allowedKeys.test(e.key) &&
                !["Backspace", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
              ) {
                e.preventDefault();
              }
            }}
            placeholder="Enter Your Name"
            className="px-5 py-3.5 rounded-full bg-gray-50 w-full placeholder:text-sm placeholder:font-semibold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact" className="pl-7 text-xs font-semibold">
          Contact Number
        </label>
        <div className="relative">
          <span className="absolute pr-2.5 after:content-['|'] after:pl-2.5 after:font-light font-semibold text-sm top-3.5 left-4">
            +91
          </span>
          <input
            onChange={handleChange}
            onKeyDown={(e) => {
              const isControlKey = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
              ].includes(e.key);

              if (isControlKey) return;

              const value = formData.contact;

              if (value.length === 0 && !/[6-9]/.test(e.key)) {
                e.preventDefault();
              }

              if (value.length > 0 && !/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
            type="tel"
            name="contact"
            id="contact"
            maxLength={10}
            // value={formData.contact}
            className="px-16 py-3.5 rounded-full bg-gray-50 w-full placeholder:text-sm placeholder:font-semibold"
            placeholder="Enter Your Phone Number"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit}
          className={`${
            isValid ? "bg-red-700" : "bg-gray-300 cursor-not-allowed"
          } text-white font-bold text-sm rounded-full py-2.5 px-11 transition duration-300`}
        >
          SEND OTP
        </button>
      </div>

      {openNewComp && (
        <OtpVerification
          phone={formData.contact}
          onClose={() => setOpenNewComp((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default ContactForm;
