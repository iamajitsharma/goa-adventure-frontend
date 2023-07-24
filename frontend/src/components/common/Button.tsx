import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: string;
  small?: boolean;
  outline?: boolean;
  filled?: boolean;
  white?: boolean;
  icon?: any;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  fullWidth,
  type,
  small,
  outline,
  filled,
  white,
  icon,
  className,
}) => {
  return (
    <motion.button
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-md
      ${outline ? "border-2 border-neutral-700 " : "border-none"}
      ${white ? "bg-white text-black" : "bg-primary text-white"}
${type ? type : null}
      ${
        fullWidth
          ? "min-w-full px-6 py-2 text-base font-medium"
          : "px-4 py-2 text-base font-medium"
      }
      ${small ? "px-2 py-1 text-xs font-medium" : ""}
      
      
      
      `}
    >
      {icon}
      {label}
    </motion.button>
  );
};

export default Button;
