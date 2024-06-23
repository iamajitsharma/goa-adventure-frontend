import React from "react";

interface CustomBadgeProps {
  content: React.ReactElement | React.ReactNode | any;
  bg?: string;
  text?: string;
  className?: string;
  pill?: boolean;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  content,
  bg,
  text,
  className,
  pill,
}) => {
  return (
    <span
      className={`px-2 text-center text-sm font-medium text-white
      ${bg ? bg : "bg-black"}
      ${text ? text : "text-white"}
      ${pill ? "rounded-full" : "rounded"}
      ${className}`}
    >
      {content}
    </span>
  );
};

export default CustomBadge;
