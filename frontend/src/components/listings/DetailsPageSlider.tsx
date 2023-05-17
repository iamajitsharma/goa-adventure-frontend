import React from "react";
import LeftArrow from "../common/LeftArrow";
import RightArrow from "../common/RightArrow";
import Slider from "react-slick";
import Image from "next/image";

const imageStyle = {
  width: "100%",
  height: "100%",
};

const DetailsPageSlider = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    initialSlide: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <Slider {...settings} className="object-cover h-full">
      {[0, 1, 3, 4, 5, 6, 7].map((item, index) => (
        <img src="/Rectangle_29.png" alt="" />
      ))}
    </Slider>
  );
};

export default DetailsPageSlider;
