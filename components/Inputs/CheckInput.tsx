"use client";

import { FC, Fragment } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckInputProps {
  label: string;
  id: string;
  value: string[];
  required?: boolean | false;
  disabled?: boolean | false;
  options: Record<string, any>[];
  register: UseFormRegister<FieldValues>;
}

const CheckInput: FC<CheckInputProps> = ({
  label,
  id,
  value,
  required,
  disabled,
  options,
  register,
}) => {
  return (
    <Fragment>
      <label
        htmlFor=""
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="grid grid-cols-2 items-center justify-start mb-2">
        {options.map((_, idx) => (
          <span key={idx}>
            <input
              className=" form-checkbox focus:bg-violet-500 text-violet-600 border-violet-600 focus:ring-violet-500 focus:ring-2"
              type="checkbox"
              value={_.val}
              {...register(id, { required: required })}
              disabled={disabled}
            />
            <label className="capitalize ml-2" htmlFor={_.val}>
              {_.val}
            </label>
          </span>
        ))}
      </div>
    </Fragment>
  );
};

export default CheckInput;
