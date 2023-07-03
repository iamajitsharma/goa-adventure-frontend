import React from "react";
import Slider from "react-slick";
import ProductList from "./ProductList";
import { activityData } from "../../../public/assets/data/Data";
import ProductCard from "./ProductCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

interface ProductSliderProps {
  data?: any;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
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
