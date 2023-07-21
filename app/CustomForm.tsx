"use client";

import { devStacks, devTypes, genders, users } from "@/dummyData";
import Button from "@/rootComp/Button";
import CheckInput from "@/rootComp/Inputs/CheckInput";
import PasswordInput from "@/rootComp/Inputs/PasswordInput";
import RadioInput from "@/rootComp/Inputs/RadioInput";
import SelectInput from "@/rootComp/Inputs/SelectInput";
import TextInput from "@/rootComp/Inputs/TextInput";
import TextAreaInput from "@/rootComp/Inputs/TextareaInput";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AuthForm = () => {
  const [showPass, setShowPass] = useState(false);
  const toggleShowPass = () => setShowPass(!showPass);

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
      developer: "",
      dev_stack: [],
      members: [],
    },
  });

  const gender = watch("gender");
  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = async (
    data: Record<string, any>
  ) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          id="gender"
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
          id="members"
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

      {/* radio input */}
      <div className="">
        <RadioInput
          label="Developer"
          id="developer"
          value={watch("developer")}
          required={true}
          disabled={false}
          register={register}
          options={devTypes}
        />
      </div>

      {/* checkbox input */}
      <div className="">
        <CheckInput
          label="Developer Stack"
          id="dev_stack"
          value={watch("dev_stack")}
          required={true}
          disabled={false}
          register={register}
          options={devStacks}
        />
      </div>

      {/* textarea input */}
      <div className="">
        <TextAreaInput
          label="Comments"
          id="comments"
          placeholder="e.g Provide your valuable comment"
          required={true}
          disabled={false}
          register={register}
          errors={errors}
        />
      </div>

      {/* button */}
      <div>
        <Button
          type="submit"
          tooltip="This is a tooltip"
          fullWidth={true}
          isLoading={false}
          isDisabled={false}
          isRounded={false}
          primary
          onClick={() => {}}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
