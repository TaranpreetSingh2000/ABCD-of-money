import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState, useEffect, useRef, useId } from "react";

// Image assets (adjust relative paths to your project structure)
import image1 from "../../public/images/life-insurance.svg";
import image2 from "../../public/images/health-insurance.svg";
import image3 from "../../public/images/mutual-funds-banner.svg";
import image4 from "../../public/images/stocks-ecurities.svg";
import image5 from "../../public/images/home-loan-banner.svg";
import image6 from "../../public/images/personal-loan-banner.svg";
import image7 from "../../public/images/sme-loan.svg";
import image8 from "../../public/images/user-input.svg"; // name icon
import image9 from "../../public/images/input-phone.svg"; // phone icon
import image10 from "../../public/images/select_category.svg"; // plan icon

const plans = [
  { name: "Life Insurance", icon: image1 },
  { name: "Health Insurance", icon: image2 },
  { name: "Mutual Funds", icon: image3 },
  { name: "Stock & Securities", icon: image4 },
  { name: "Home Loan", icon: image5 },
  { name: "Personal Loan", icon: image6 },
  { name: "SME Loan", icon: image7 },
];

export const JourneyForm = ({ data, onSubmit }) => {
  const [selectedPlan, setSelectedPlan] = useState(data.selectedPlan);
  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [agreed, setAgreed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const planButtonRef = useRef(null);
  const listboxRef = useRef(null);

  // Stable ids for inputs (useId avoids collisions in SSR)
  const nameId = useId();
  const phoneId = useId();
  const agreeId = useId();
  const planId = useId();

  // Close dropdown when clicking off
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard support for combobox trigger
  const handlePlanTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDropdownOpen(true);
      // Focus first list item when opening via keyboard
      requestAnimationFrame(() => {
        const first = listboxRef.current?.querySelector('[role="option"]');
        first?.focus();
      });
    }
  };

  // Keyboard navigation within listbox
  const handlePlanOptionKeyDown = (e, plan, index) => {
    const options = Array.from(
      listboxRef.current?.querySelectorAll('[role="option"]') || []
    );
    const lastIndex = options.length - 1;
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const next = options[index + 1] || options[0];
        next?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prev = options[index - 1] || options[lastIndex];
        prev?.focus();
        break;
      }
      case "Home": {
        e.preventDefault();
        options[0]?.focus();
        break;
      }
      case "End": {
        e.preventDefault();
        options[lastIndex]?.focus();
        break;
      }
      case "Escape": {
        e.preventDefault();
        setDropdownOpen(false);
        planButtonRef.current?.focus();
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        selectPlan(plan);
        break;
      }
      default:
        break;
    }
  };

  const selectPlan = (plan) => {
    setSelectedPlan(plan);
    setDropdownOpen(false);
    // return focus to trigger button after selection
    requestAnimationFrame(() => planButtonRef.current?.focus());
  };

  const isFormValid =
    selectedPlan && name.trim() && phone.length === 10 && agreed;

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit({ selectedPlan, name, phone });
    }
  };

  return (
    <div
      className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md"
      role="region"
      aria-labelledby="journey-form-heading"
    >
      <h2
        id="journey-form-heading"
        className="font-bold text-3xl text-center mb-6"
      >
        Start Your Journey
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        aria-label="Journey onboarding form"
      >
        {/* Plan Combobox */}
        <div className="relative mb-4" ref={dropdownRef}>
          <button
            type="button"
            id={planId}
            ref={planButtonRef}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            aria-label="Select a plan"
            onClick={() => setDropdownOpen((o) => !o)}
            onKeyDown={handlePlanTriggerKeyDown}
            className="w-full pl-5 pr-4 py-3 rounded-full border border-gray-300 flex justify-between items-center bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <span className="flex items-center gap-2 text-black font-medium pointer-events-none">
              <img
                src="/images/select_category.svg"
                alt="Select financial product category"
                className="w-5 h-5"
              />
              {selectedPlan ? selectedPlan.name : "Select Plan"}
            </span>
            {dropdownOpen ? (
              <BsChevronUp aria-hidden="true" className="text-gray-600" />
            ) : (
              <BsChevronDown aria-hidden="true" className="text-gray-600" />
            )}
          </button>

          {dropdownOpen && (
            <ul
              ref={listboxRef}
              role="listbox"
              tabIndex={-1}
              aria-labelledby={planId}
              className="absolute z-10 bg-white border border-gray-200 rounded-xl mt-1 shadow-md w-full max-h-60 overflow-y-auto focus:outline-none"
            >
              {plans.map((plan, index) => {
                const isSelected = selectedPlan?.name === plan.name;
                return (
                  <li
                    key={plan.name}
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={0}
                    onClick={() => selectPlan(plan)}
                    onKeyDown={(e) => handlePlanOptionKeyDown(e, plan, index)}
                    className={`flex items-center gap-3 px-4 py-[6px] cursor-pointer text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${
                      isSelected ? "bg-red-50" : ""
                    }`}
                  >
                    <img
                      src={plan.icon}
                      alt={`${plan.name} icon`}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="font-medium text-sm">{plan.name}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Name Input */}
        <div className="relative mb-4">
          <label htmlFor={nameId} className="sr-only">
            Full Name
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full pl-5 pr-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-600">
            <img
              src="/images/user-input.svg"
              alt="Name input icon"
              className="w-5 h-5"
            />
            <input
              id={nameId}
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
              }
              className="w-full outline-none bg-transparent text-black"
              autoComplete="name"
              aria-required="true"
            />
          </div>
        </div>

        {/* Phone Input */}
        <div className="relative mb-4">
          <label htmlFor={phoneId} className="sr-only">
            Phone Number
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-full pl-5 pr-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-600">
            <img
              src="/images/input-phone.svg"
              alt="Phone input icon"
              className="w-5 h-5"
            />
            <span className="text-black font-medium" aria-hidden="true">
              +91
            </span>
            <input
              id={phoneId}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter Your Phone Number"
              value={phone}
              maxLength={10}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full outline-none bg-transparent text-black"
              autoComplete="tel"
              aria-required="true"
              aria-describedby={`${phoneId}-hint`}
            />
          </div>
          <p id={`${phoneId}-hint`} className="sr-only">
            Enter 10 digit mobile number without country code.
          </p>
        </div>

        {/* Terms Checkbox */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <input
              id={agreeId}
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed((a) => !a)}
              className="w-5 h-5 accent-red-600"
              aria-required="true"
            />
            <label htmlFor={agreeId} className="text-sm font-medium text-black">
              I agree to the{" "}
              <span className="text-red-700 font-semibold italic underline hover:no-underline cursor-pointer">
                Terms and Conditions
              </span>
              .
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          aria-disabled={!isFormValid}
          aria-label="Send One Time Password to verify your phone number"
          className={`w-full py-3 rounded-full text-white font-semibold text-sm tracking-wider transition-colors ${
            isFormValid
              ? "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          SEND OTP
        </button>
      </form>
    </div>
  );
};
