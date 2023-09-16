import React from "react";
import ProductCardAlt from "../UI/ProductCardAlt";
import { products } from "../../data/ActivityData";

const HorizontalLayout = (props: any) => {
  return (
    <div className="grid grid-cols-1 gap-6 my-2 -z-10 ">
      {props.data?.map((item: any, index: any) => (
        <ProductCardAlt item={item} key={index} />
      ))}
    </div>
  );
};

export default HorizontalLayout;
