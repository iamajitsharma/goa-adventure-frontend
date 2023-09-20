import React from "react";
import ProductList from "../UI/ProductList";
import { products } from "../../data/ActivityData";

const VerticalLayout = (props: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2 -z-10">
      <ProductList data={props.data} />
    </div>
  );
};

export default VerticalLayout;
