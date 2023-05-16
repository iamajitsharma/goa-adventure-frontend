import React from "react";

interface ColProps {
  col1?: boolean;
  col2?: boolean;
  col3?: boolean;
  col4?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Col: React.FC<ColProps> = ({
  col1,
  col2,
  col3,
  col4,
  children,
  className,
}) => {
  return (
    <div
      className={`
    ${col1 ? "w-3/12" : "w-2/12"}
    ${col2 ? "w-2/12" : "w-full"}
    ${col3 ? "w-full md:w-9/12" : "w-3/12"}
    ${col4 ? "w-full" : "w-fit"}
    ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Col;
