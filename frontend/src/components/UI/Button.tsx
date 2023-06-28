import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  secondary?: boolean;
  filled?: boolean;
  size?: string;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  secondary,
  filled,
  size,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition min-w-fit font-medium
      ${
        filled
          ? "bg-white shadow-md"
          : "bg-transparent border-2 border-mainColor"
      } 
     ${size === "large" ? "px-7 py-2" : "px-4 py-2"}
      

       `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
