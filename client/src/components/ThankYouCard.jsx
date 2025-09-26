import React, { useId as useId3 } from "react";
import { FaCheck } from "react-icons/fa";

export const ThankYouCard = () => {
  const thanksId = useId3();
  return (
    <div
      className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md text-center"
      role="status"
      aria-labelledby={thanksId}
    >
      <div className="flex items-center justify-center mb-6" aria-hidden="true">
        <div className="h-14 w-14 rounded-full border-2 border-black flex items-center justify-center">
          <FaCheck className="text-black text-xl" />
        </div>
      </div>

      <h2 id={thanksId} className="text-xl font-bold text-black">
        Thank you for sharing your details.
      </h2>
      <p className="text-gray-500 mt-2 text-sm">
        Our executive will get back to you shortly.
      </p>

      <button
        type="button"
        aria-label="Explore our financial products"
        className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
      >
        EXPLORE OUR PRODUCTS
      </button>
    </div>
  );
};
