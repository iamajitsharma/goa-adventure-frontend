import React from "react";
import DestinationCard from "./DestinationCard";
import Slider from "react-slick";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

const DestinationList = () => {
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
    <>
      <Slider {...settings}>
        {[0, 1, 2, 3].map((item: any, index: any) => (
          <DestinationCard key={index} />
        ))}
      </Slider>
    </>
  );
};

export default DestinationList;
