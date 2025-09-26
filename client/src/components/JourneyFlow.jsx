"use client";
import React, { useState as useState4 } from "react";
import { JourneyForm as JourneyFormStep } from "./JourneyForm"; // adjust import paths when splitting files
import { OtpVerification as OtpStep } from "./OtpVerification";
import { ThankYouCard as ThankStep } from "./thankYouCard";

const JourneyFlow = () => {
  const [step, setStep] = useState4(1); // 1=form, 2=otp, 3=thankyou
  const [formData, setFormData] = useState4({
    selectedPlan: null,
    name: "",
    phone: "",
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handleOtpVerify = () => {
    setStep(3);
  };

  const handleChangeNumber = () => {
    setStep(1);
  };

  // Basic SEO props per step
  const stepTitles = {
    1: "Start Your Journey",
    2: "OTP Verification",
    3: "Thank You",
  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <section
          aria-live="polite"
          className="w-full max-w-sm"
          aria-label={stepTitles[step]}
        >
          {step === 1 && (
            <JourneyFormStep data={formData} onSubmit={handleFormSubmit} />
          )}
          {step === 2 && (
            <OtpStep
              phone={formData.phone}
              onChangeNumber={handleChangeNumber}
              onVerify={handleOtpVerify}
            />
          )}
          {step === 3 && <ThankStep />}
        </section>
      </main>
    </>
  );
};

export default JourneyFlow;
