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
  white?: boolean;
  icon?: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  secondary,
  outline,
  small,
  white,
  icon,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full max-w-fit inline-flex items-center gap-2 shadow-md font-semibold tracking-wider
      ${outline ? "bg-transparent border-2 border-variant" : ""}
      ${outline ? "border-black" : ""}
      ${outline ? "text-black" : ""}
      ${small ? "text-sm py-2 px-4" : "text-md py-3 px-6"}
      ${
        white
          ? "bg-white text-variant border-2 border-white hover:bg-variant hover:text-white"
          : ""
      }
      
   
     
      

       `}
    >
      {icon}
      {label}
    </motion.button>
  );
};

export default Button;
