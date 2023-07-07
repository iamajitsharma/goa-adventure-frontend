import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import LeftArrow from "../ThingsToDo/HighLights/LeftArrow";
import RightArrow from "../ThingsToDo/HighLights/RightArrow";
import { products } from "@/data/ActivityData";
import MainImage from "../../../public/Rectangle_29.png";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <Slider {...settings} className="object-cover h-full">
      {[0, 1, 2, 3].map((item) => (
        <Image src={MainImage} alt="Picture of the author" />
      ))}
    </Slider>
  );
};

export default ImageSlider;
