"use client";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  rules: RegisterOptions;
  className?: string;
  icon?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
  rules,
  className,
  icon,
}) => {
  return (
    <div
      className={`flex items-center justify-between border-b-2 border-neutral-600 ${className}`}
    >
      <div className="w-full relative">
        <input
          id={id}
          disabled={disabled}
          {...register(id, {
            required: required || false,
            ...rules,
          })}
          placeholder=" "
          type={type}
          className={`
          peer
          w-full
          p-2
          pt-6 
          font-light 
          bg-white 
          border-none
          outline-none
          focus:ring-0
          placeholder:text-neutral-500
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
        />
        <label
          className={`
          absolute
          left-2 
          text-sm
        text-gray-500
          duration-150 
          transform 
          -translate-y-4 
          top-6 
          z-10 
          origin-[0]
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-6
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
        >
          {label}
        </label>
      </div>
      <div className="text-2xl text-neutral-600">{icon}</div>
    </div>
  );
};

export default Input;
