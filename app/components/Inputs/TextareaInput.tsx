import clsx from "clsx";
import { FC, Fragment } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaInputProps {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

const TextAreaInput: FC<TextareaInputProps> = ({
  label,
  id,
  placeholder,
  required,
  disabled,
  errors,
  register,
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
      <textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        cols={50}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          `form-textarea block mb-2 w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 rounded`,
          errors[id] && "ring-rose-500 focus:ring-rose-500",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
    </Fragment>
  );
};

export default TextAreaInput;
