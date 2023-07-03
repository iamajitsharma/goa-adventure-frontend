import React from "react";

interface BoxProps {
  children?: any;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-sm p-4 rounded-md mt-4">{children}</div>
  );
};

export default Box;
