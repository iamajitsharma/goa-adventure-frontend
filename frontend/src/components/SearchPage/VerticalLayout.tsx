import React from "react";
import ProductList from "../UI/ProductList";
import { products } from "../../data/ActivityData";

const VerticalLayout = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-2 -z-10 bg-red-300">
      <ProductList data={products} />
    </div>
  );
};

export default VerticalLayout;
