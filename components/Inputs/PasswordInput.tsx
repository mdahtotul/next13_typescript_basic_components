import clsx from "clsx";
import { FC, Fragment } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface PasswordInputProps {
  label: string;
  id: string;
  placeholder?: string;
  showPass: boolean;
  required?: boolean;
  disabled?: boolean;
  errors: FieldErrors;
  toggleShowPass: () => void;
  register: UseFormRegister<FieldValues>;
}

const PasswordInput: FC<PasswordInputProps> = ({
  label,
  id,
  placeholder,
  showPass,
  required,
  disabled,
  errors,
  register,
  toggleShowPass,
}) => {
  return (
    <Fragment>
      <label
        htmlFor={id}
        className={clsx(
          `block text-sm font-medium leading-6 text-gray-900 mb-2`
        )}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          autoComplete="on"
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `form-input block mb-2 w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 rounded`,
            errors[id] && "ring-rose-500 focus:ring-rose-500",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
        <span
          title={showPass ? "Hide Password" : "Show Password"}
          className="absolute top-2 right-2 cursor-pointer text-2xl text-violet-500"
          onClick={toggleShowPass}
        >
          {showPass ? <VscEyeClosed /> : <VscEye />}
        </span>
      </div>
    </Fragment>
  );
};

export default PasswordInput;
