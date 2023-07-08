import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full xl:px-20 lg:px-25 md:px-25 sm:px-2 px-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
