import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  secondary?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  secondary,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
      ${outline ? "bg-white" : "bg-primary hover:bg-variant"}
      ${outline ? "border-black" : "border-none"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "py-1" : "py-3"}
      ${small ? "font-normal" : "font-medium"}
      ${small ? "border-[1px]" : "border-2"}
      

       `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </motion.button>
  );
};

export default Button;
