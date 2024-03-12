import React from "react";
import Slider from "react-slick";
import ProductList from "./ProductList";
import { activityData } from "../../../public/assets/data/Data";
import ProductCard from "./ProductCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CardSkelton from "@/components/Animation/CardSkelton";

interface ProductSliderProps {
  data?: any;
  isLoading?: boolean;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data, isLoading }) => {
  const handleEdge = (edge: string) => {
    //console.log(`Edge reached: ${edge}`);
  };

  return (
    <Slider className="pt-8">
      {data?.map((item: any, index: any) => (
        <ProductCard item={item} isLoading={isLoading} key={index} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
