import React from "react";

interface BoxProps {
  children?: any;
  className?: String;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={` shadow-sm p-2 rounded-md mt-4 md:p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Box;
