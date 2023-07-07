"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Button from "./components/Button";
import PasswordInput from "./components/Inputs/PasswordInput";
import SelectInput from "./components/Inputs/SelectInput";
import TextInput from "./components/Inputs/TextInput";

const AuthForm = () => {
  const [showPass, setShowPass] = useState(false);
  const toggleShowPass = () => setShowPass(!showPass);

  const users = [
    { id: 1, name: "arif" },
    { id: 2, name: "arif2" },
    { id: 3, name: "arif3" },
  ];
  const genders = [
    { id: 1, name: "male" },
    { id: 2, name: "female" },
    { id: 3, name: "other" },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      first_name: "",
      gender: "",
      pass: "",
      members: [],
    },
  });

  const gender = watch("gender");
  const members = watch("members");

  return (
    <div>
      {/* text input */}
      <div className="">
        <TextInput
          id="first_name"
          type="text"
          label="First Name"
          placeholder="e.g MD ARIFUL HASAN"
          required={true}
          disabled={false}
          register={register}
          errors={errors}
        />
      </div>

      {/* password input */}
      <div className="">
        <PasswordInput
          id="pass"
          label="Password"
          showPass={showPass}
          placeholder="e.g 123456"
          required={true}
          disabled={false}
          register={register}
          errors={errors}
          toggleShowPass={toggleShowPass}
        />
      </div>

      {/* select input */}
      <div className="">
        <SelectInput
          label="Gender"
          value={gender}
          options={genders.map((_) => ({
            value: _.id,
            label: _.name,
          }))}
          onChange={(value) =>
            setValue("gender", value, { shouldValidate: true })
          }
          isMulti={false}
          isDisabled={false}
        />
      </div>

      {/* multi select input */}
      <div className="">
        <SelectInput
          label="Members"
          value={members}
          options={users.map((_) => ({
            value: _.id,
            label: _.name,
          }))}
          onChange={(value) =>
            setValue("members", value, { shouldValidate: true })
          }
          isMulti={true}
          isDisabled={false}
        />
      </div>

      <div>
        <Button
          type="button"
          tooltip="This is a tooltip"
          fullWidth={false}
          isLoading={false}
          isDisabled={false}
          isRounded={false}
          primary
          onClick={() => {}}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
