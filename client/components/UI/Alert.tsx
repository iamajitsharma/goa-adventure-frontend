"use client";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helper/utils";

const alertVariants = cva(
  "flex items-center p-4 mb-4 text-blue-800 border-t-4 ",
  {
    variants: {
      variant: {
        default:
          "text-blue-800 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800",
        success:
          "text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800",
        danger:
          "text-rose-800 border-rose-300 bg-rose-50 dark:text-rose-400 dark:bg-gray-800 dark:border-rose-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps {
  alertIcon?: any;
  content: React.ReactNode | string | number;
  isOpen: boolean;
  color?: "default" | "success" | "danger";
}

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (
  { alertIcon, content, isOpen, color },
  ref
) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(isOpen);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsAlertOpen(false);
  //     }, 3000);
  //   }, []);

  // Use alertVariants to get the variant classes
  const variantClasses = alertVariants({ variant: color || "default" });

  const dismissButtonClasses = cn({
    "ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-opacity-50 inline-flex items-center justify-center h-8 w-8":
      true,
    "bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700":
      color === "default",
    "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700":
      color === "success",
    "bg-rose-50 text-rose-500 focus:ring-rose-400 hover:bg-rose-200 dark:bg-gray-800 dark:text-rose-400 dark:hover:bg-gray-700":
      color === "danger",
  });

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  if (!isAlertOpen) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-in-out duration-300 ${variantClasses} ${isOpen ? "block" : "hidden"}`}
      role="alert"
    >
      {alertIcon}
      <div className="ms-3 text-sm font-medium">{content}</div>
      <button
        type="button"
        className={dismissButtonClasses}
        aria-label="Close"
        onClick={handleCloseAlert}
      >
        <span className="sr-only">Dismiss</span>
        <RxCross2 size={18} />
      </button>
    </div>
  );
};

export default React.forwardRef(Alert);
