"use client";

import clsx from "clsx";
import { FC } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  tooltip?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isRounded?: boolean;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  success?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  type,
  tooltip,
  fullWidth,
  isLoading,
  isDisabled,
  isRounded,
  primary,
  secondary,
  danger,
  success,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      title={tooltip}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={clsx(
        `flex justify-center px-3 py-2 font-semibold focus-visible:outline focus-visible:outline-2`,
        isRounded ? "rounded-full" : "rounded-md",
        isDisabled && "opacity-50 cursor-not-allowed",
        fullWidth && "w-full",
        primary &&
          "bg-[color:var(--primary)] text-white hover:bg-violet-600 focus-visible:outline-violet-600",
        secondary ? "text-gray-900" : "text-white",
        success &&
          "bg-green-500 text-white hover:bg-green-600 focus-visible:outline-green-600",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !primary &&
          !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {isLoading && (
        <svg
          className="mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
