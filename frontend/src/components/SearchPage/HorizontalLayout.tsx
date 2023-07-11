import React from "react";
import ProductCardAlt from "../UI/ProductCardAlt";
import { products } from "../../data/ActivityData";

const HorizontalLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-6 my-2 -z-10 ">
      {products.map((item, index) => (
        <ProductCardAlt />
      ))}
    </div>
  );
};

export default HorizontalLayout;
