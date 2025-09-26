import React, {
  useState as useState2,
  useEffect as useEffect2,
  useRef as useRef2,
  useId as useId2,
} from "react";

export const OtpVerification = ({ phone, onVerify, onClose }) => {
  const [otp, setOtp] = useState2(Array(6).fill(""));
  const [timer, setTimer] = useState2(60);
  const inputRefs = useRef2([]);
  const statusId = useId2();

  useEffect2(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;
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
  };

  const isOtpFilled = otp.every((digit) => digit !== "");

  return (
    <div>
      <div className="inset-0 fixed" onClick={onClose}></div>
      <div
        className={`max-w-[500px] p-[50px] bg-white w-full h-screen absolute right-0 top-0 bottom-0`}
      >
        <button onClick={onClose} className="text-3xl absolute top-3 right-4">
          <img
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e"
            alt=""
            className="w-4 h-4"
          />
        </button>
        <div
          className="w-[80%] flex flex-col mx-auto py-8 bg-white text-center"
          role="region"
          aria-labelledby="otp-verification-heading"
        >
          <div
            id="otp-verification-heading"
            className="text-[32px] leading-7 font-medium text-black"
          >
            OTP VERIFICATION
          </div>
          <p className="text-xs text-gray-600 font-medium mb-1">
            Enter the verification code sent to
          </p>
          <p className="text-xs font-semibold  flex items-center justify-center gap-1">
            <span className="text-[#000000]">91-{phone}</span>{" "}
            <button
              type="button"
              onClick={onClose}
              aria-label="Change mobile number"
              className="text-red-600 font-semibold text-[10px] underline hover:no-underline"
            >
              CHANGE NUMBER
            </button>
          </p>
          <p
            id={statusId}
            role="status"
            aria-live="polite"
            className="text-xs font-bold tracking-tighter text-red-400 mt-8"
          >
            Your Verification Code has expired!
            {/* <span className="font-semibold">{timer} seconds</span>. */}
          </p>
          {timer === 0 ? (
            <button
              type="button"
              onClick={handleResend}
              aria-label="Resend one time password"
              className="text-[15px] text-red-400 font-semibold leading-5 underline hover:no-underline"
            >
              RESEND OTP
            </button>
          ) : (
            <span className="text-[15px] text-red-400 font-semibold leading-5 underline hover:no-underline">
              RESEND OTP
            </span>
          )}
          <div className="flex justify-center gap-2 mt-2" onPaste={handlePaste}>
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
                className="w-11 h-11 text-center text-sm border shadow-[0_5px_15px_#00000008] border-gray-200 bg-gray-50 rounded-[6px] focus:outline-none focus:border-red-600"
                disabled={timer === 0}
              />
            ))}
          </div>
          <button
            type="button"
            disabled={!isOtpFilled || timer === 0}
            aria-disabled={!isOtpFilled || timer === 0}
            aria-label="Verify one time password and proceed"
            onClick={onVerify}
            className={`mt-8 px-2 py-3.5 mx-14 rounded-full font-bold text-white text-[14px] tracking-tight transition-colors ${
              isOtpFilled && timer > 0
                ? "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            VERIFY TO PROCEED
          </button>
        </div>
      </div>
    </div>
  );
};
