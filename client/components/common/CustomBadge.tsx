import React from "react";

interface CustomBadgeProps {
  content: React.ReactElement | React.ReactNode | any;
  bg?: string;
  text?: string;
  className?: string;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  content,
  bg,
  text,
  className,
}) => {
  return (
    <span
      className={`rounded-full  px-2 text-center text-sm font-medium text-white
      ${bg || "bg-black"}
      ${text || "text-white"}
      ${className}`}
    >
      {content}
    </span>
  );
};

export default CustomBadge;
