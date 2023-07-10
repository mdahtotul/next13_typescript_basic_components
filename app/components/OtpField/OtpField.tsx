"use client";

import { FC, Fragment, useEffect, useRef, useState } from "react";

interface OtpFieldProps {}

let currentOtpIdx: number = 0;

const OtpField: FC<OtpFieldProps> = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOtpIdx, setActiveOtpIdx] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const newOTP: string[] = [...otp];
    newOTP[currentOtpIdx] = value.substring(value.length - 1);
    if (!value) setActiveOtpIdx(currentOtpIdx - 1);
    else setActiveOtpIdx(currentOtpIdx + 1);
    setOtp(newOTP);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ): void => {
    const { key } = e;
    currentOtpIdx = idx;
    if (key === "Backspace") {
      setActiveOtpIdx(currentOtpIdx - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIdx]);

  return (
    <div className="h-full flex justify-center items-center space-x-2">
      {otp.map((_, i) => (
        <Fragment key={i}>
          <input
            ref={i === activeOtpIdx ? inputRef : null}
            value={otp[i]}
            type="number"
            className="form-input w-12 h-12 rounded-md bg-transparent outline-none text-center font-semibold text-sl border-gray-400 focus:border-violet-600 focus:text-gray-700 text-gray-400 transition spin-button-none"
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
          {i === otp.length - 1 ? null : (
            <span className="w-2 py-0.5 bg-gray-400" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default OtpField;
