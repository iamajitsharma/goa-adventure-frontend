import React from "react";
import Flatpickr from "react-flatpickr";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

type CustomInputProps = {
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  rules?: RegisterOptions;
  id: string;
  inputRef: any;
};

const CustomInput = ({
  placeholder,
  register,
  required,
  rules,
  id,
  inputRef,
}: CustomInputProps) => {
  return (
    <input
      placeholder={placeholder}
      {...register(id, { required: required || false, ...rules })}
      ref={inputRef}
    />
  );
};

type DatePickerProps = {
  placeholder?: string;
  className?: string;
  disableDate?: number;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  rules?: RegisterOptions;
  id: string;
};

const DatePicker = ({
  id,
  placeholder,
  className,
  disableDate = 0,
  register,
  required,
  rules,
}: DatePickerProps) => {
  const initialDate = new Date();

  // Add disableDate days to the initial date
  const newDate = new Date(initialDate);
  newDate.setDate(newDate.getDate() + disableDate);
  const formattedNewDate = newDate.toISOString().split("T")[0];

  return (
    <Flatpickr
      className={`border py-3 px-2 outline-none border-gray-300 rounded ${className}`}
      options={{ minDate: `${formattedNewDate}` }}
      render={({ defaultValue }, ref) => (
        <CustomInput
          placeholder={placeholder}
          register={register}
          required={required}
          rules={rules}
          id={id}
          inputRef={ref}
        />
      )}
    />
  );
};

export default DatePicker;
