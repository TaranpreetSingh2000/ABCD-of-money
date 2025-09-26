import React, { useState as useState2, useEffect as useEffect2, useRef as useRef2, useId as useId2 } from "react"; // alias imports to avoid collisions in bundled file

export const OtpVerification = ({ phone, onChangeNumber, onVerify }) => {
  const [otp, setOtp] = useState2(Array(6).fill(""));
  const [timer, setTimer] = useState2(60);
  const inputRefs = useRef2([]);
  const statusId = useId2();

  // Countdown timer
  useEffect2(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return; // don't advance on empty
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (otp[index] === "") {
        if (index > 0) {
          newOtp[index - 1] = "";
          setOtp(newOtp);
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
    // Allow left/right arrow nav
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasted.length === 6) {
      const arr = pasted.split("").slice(0, 6);
      setOtp(arr);
      inputRefs.current[5]?.focus();
      e.preventDefault();
    }
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(Array(6).fill(""));
    inputRefs.current[0]?.focus();
    // TODO: Trigger resend OTP API here
  };

  const isOtpFilled = otp.every((digit) => digit !== "");

  return (
    <div
      className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md text-center"
      role="region"
      aria-labelledby="otp-verification-heading"
    >
      <h2 id="otp-verification-heading" className="text-[24px] font-extrabold text-black mb-2">
        OTP Verification
      </h2>
      <p className="text-[14px] text-gray-600 mb-2">
        Enter the verification code sent to your mobile number.
      </p>
      <p className="text-[16px] font-semibold mb-3">
        <span className="text-[#000000]">+91-{phone}</span>{" "}
        <button
          type="button"
          onClick={onChangeNumber}
          aria-label="Change mobile number"
          className="text-red-600 font-semibold underline hover:no-underline"
        >
          CHANGE NUMBER
        </button>
      </p>

      {/* Timer (live region) */}
      <p id={statusId} role="status" aria-live="polite" className="text-[14px] mb-4 text-black">
        Verification code expires in <span className="font-semibold">{timer} seconds</span>.
      </p>

      <div className="flex justify-center gap-3 mb-4" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            id={`otp-digit-${index}`}
            aria-label={`OTP digit ${index + 1} of 6`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-xl border border-gray-400 rounded-md focus:outline-none focus:border-red-600"
            disabled={timer === 0}
          />
        ))}
      </div>

      {timer === 0 ? (
        <button
          type="button"
          onClick={handleResend}
          aria-label="Resend one time password"
          className="text-sm text-red-600 font-semibold underline hover:no-underline mb-6"
        >
          RESEND OTP
        </button>
      ) : (
        <span className="text-sm text-gray-400 font-semibold mb-6 block select-none">
          RESEND OTP
        </span>
      )}

      <button
        type="button"
        disabled={!isOtpFilled || timer === 0}
        aria-disabled={!isOtpFilled || timer === 0}
        aria-label="Verify one time password and proceed"
        onClick={onVerify}
        className={`w-full py-3 rounded-full font-bold text-white text-[14px] tracking-wider transition-colors ${
          isOtpFilled && timer > 0
            ? "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        VERIFY TO PROCEED
      </button>
    </div>
  );
};
