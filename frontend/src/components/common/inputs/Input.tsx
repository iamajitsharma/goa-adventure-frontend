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
      <input type={type} id={id} disabled={disabled} placeholder=" " />
      <label>{label}</label>
    </div>
  );
};

export default Input;
