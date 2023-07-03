import React from "react";

interface ProductTitleProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({
  h1,
  h2,
  h3,
  h4,
  title,
}) => {
  return (
    <>
      {h1 && (
        <h1 className="text-2xl font-bold text-textBlack py-2">{title}</h1>
      )}
      {h2 && (
        <h2 className="text-xl font-semibold text-textBlack py-4">{title}</h2>
      )}
      {h3 && <h3>{title}</h3>}
      {h4 && (
        <h4 className="text-base font-semibold text-textBlack py-4">{title}</h4>
      )}
    </>
  );
};

export default ProductTitle;
