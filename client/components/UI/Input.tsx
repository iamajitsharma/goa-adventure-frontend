import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";
import React from "react";

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean | string;
  register?: UseFormRegister<FieldValues>; // Make it optional
  errors?: FieldErrors | undefined | FieldValues;
  rules?: RegisterOptions;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register, // Now optional
  errors,
  rules,
  placeholder,
  className,
  icon,
  onChange,
  value,
}) => {
  return (
    <div className="py-2">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        {...(register
          ? register(id, { required: required || false, ...rules })
          : {})}
        className="border py-2.5 px-2 w-full outline-none border-gray-300 rounded"
        onChange={onChange}
      />
      {errors && errors[id] && (
        <span className="text-red-500 text-sm">{errors[id].message}</span>
      )}
    </div>
  );
};

export default Input;
