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
    <Slider {...settings} className="w-full h-[500px] object-cover">
      <img src="/Rectangle_29.png" alt="" />
      <img src="/Rectangle_29.png" alt="" />
      <img src="/Rectangle_29.png" alt="" />
      <img src="/Rectangle_29.png" alt="" />
      <img src="/Rectangle_29.png" alt="" />
    </Slider>
  );
};

export default DetailsPageSlider;
