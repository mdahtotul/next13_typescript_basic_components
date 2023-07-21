"use client";

import { FC, Fragment } from "react";
import ReactSelect, { MultiValue, SingleValue } from "react-select";

interface SelectInputProps {
  label: string;
  id: string;
  value: Record<string, any>;
  isMulti?: boolean | false;
  isRequired?: boolean | false;
  isDisabled?: boolean | false;
  onChange: (
    value: MultiValue<Record<string, any>> | SingleValue<Record<string, any>>
  ) => void;
  options: Record<string, any>[];
}

const SelectInput: FC<SelectInputProps> = ({
  label,
  id,
  value,
  isMulti,
  isRequired,
  isDisabled,
  options,
  onChange,
}) => {
  return (
    <Fragment>
      <label
        htmlFor=""
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <ReactSelect
        id={id}
        isMulti={isMulti}
        value={value}
        onChange={onChange}
        options={options}
        // menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? "#917aeb" : "transparent",
            color: isFocused ? "#fff" : "#000",
          }),
          control: (base, { isFocused }) => ({
            ...base,
            border: isFocused ? "2px solid #917aeb" : "1px solid #d1d5db",
            boxShadow: "none",
          }),
        }}
        classNames={{
          control: () => `mb-2`,
        }}
        required={isRequired}
        isDisabled={isDisabled}
      />
    </Fragment>
  );
};

export default SelectInput;
