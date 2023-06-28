import React from "react";
import Slider from "react-slick";
import ProductList from "./ProductList";
import { activityData } from "../../../public/assets/data/Data";
import ProductCard from "./ProductCard";

interface ProductSliderProps {
  data?: any;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data?.map((item: any, index: any) => (
        <ProductCard item={item} key={index} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
