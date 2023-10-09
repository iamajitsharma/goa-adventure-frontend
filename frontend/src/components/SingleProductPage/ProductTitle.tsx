import React from "react";

interface ProductTitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  title: React.ReactNode;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ level, title }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`font-bold font-roboto text-neutral-700 ${getHeadingClass(
        level
      )}`}
    >
      {title}
    </Tag>
  );
};

const getHeadingClass = (level: number) => {
  switch (level) {
    case 1:
      return "text-2xl";
    case 2:
      return "text-lg";
    case 3:
      return "text-lg";
    case 4:
      return "text-base";
    case 5:
      return "text-base";
    default:
      return "text-sm";
  }
};

export default ProductTitle;
