import React from "react";

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
}) => {
  return (
    <div className="w-full relative">
      <input
        className="
          peer
          w-full
          p-2
          pt-2 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed"
        type={type}
        id={id}
        disabled={disabled}
        placeholder=" "
      />
      <label
        className="absolute
          left-3 
          text-md
          text-gray-500
          duration-150 
          transform 
          -translate-y-10 
          top-2 
          z-10 
          origin-[0]
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4

          "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
