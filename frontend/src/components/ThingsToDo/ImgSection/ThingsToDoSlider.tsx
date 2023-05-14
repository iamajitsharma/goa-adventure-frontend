import React from "react";

import Slider from "react-slick";

import CarouselNextArrow from "../../CarouselNextArrow";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Heading from "../../Heading";
export default function ThingsToDoSlider() {
  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    initialSlide: 2,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <img src="Rectangle_29.png" alt="Expedia logo" />
        <img src="Rectangle_29.png" alt="Expedia logo" />
        <img src="Rectangle_29.png" alt="Expedia logo" />
        <img src="Rectangle_29.png" alt="Expedia logo" />
        <img src="Rectangle_29.png" alt="Expedia logo" />
        <img src="Rectangle_29.png" alt="Expedia logo" />
        <img src="Rectangle_29.png" alt="Expedia logo" />
      </Slider>
    </>
  );
}
