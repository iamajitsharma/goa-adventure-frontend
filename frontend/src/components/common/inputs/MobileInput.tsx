import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FiSmartphone } from "react-icons/fi";
import CountryCodes from "../../../data/CountryCodes.json";

interface MobileInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  className?: string;
  icon?: any;
}

const MobileInput: React.FC<MobileInputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
  className,
  icon,
}) => {
  const [CountryPhoneCode, setCountryPhoneCode] = useState(CountryCodes);

  console.log(CountryPhoneCode);

  return (
    <div className="flex items-center border-b-2 border-neutral-600">
      <select
        name="country"
        className="border-none outline-none
          focus:ring-0 text-sm font-poppins "
      >
        {CountryPhoneCode.map((e, key) => {
          return (
            <option key={key} value={e.name}>
              {e.code} {e.dial_code}
            </option>
          );
        })}
      </select>
      <div className="w-full relative flex items-center justify-between">
        <div className="relative">
          <input
            id={id}
            disabled={disabled}
            placeholder=" "
            type={type}
            className="
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
          disabled:cursor-not-allowed"
          />

          <label
            className="
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
          
          

          "
          >
            {label}
          </label>
        </div>
        <div className="text-2xl text-neutral-600">{icon}</div>
      </div>
    </div>
  );
};

export default MobileInput;
