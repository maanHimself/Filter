import { useState } from "react";
import { useForm } from "react-hook-form";
import Filter from "./Filter";

export default function FilterDesktop(props) {
  const { register, handleSubmit, getValues } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Filter
        mobile={false}
        onSubmit={onSubmit}
        register={register}
        getValues={getValues}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
