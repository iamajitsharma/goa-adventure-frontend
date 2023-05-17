import React from "react";

import Slider from "react-slick";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Heading from "../../common/Heading";
export default function HighLightsSlider() {
  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1700,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div className="flex flex-col justify-start custom-shadow bg-gray-100">
      <div className="text-md">Scuba Diving In Grand Island Highlights</div>
      <div className="mx-12">
        {" "}
        <Slider {...settings}>
          <div className="bg-white px-4 py-2 custom-shadow mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi alias consequatur cumque quae inventore
          </div>
          <div className="bg-white px-4 py-2 custom-shadow mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          </div>
          <div className="bg-white px-4 py-2 custom-shadow mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi alias consequatur cumque quae inventore id explicabo sapiente,
          </div>
          <div className="bg-white px-4 py-2 custom-shadow mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi alias consequatur cumque quae inventore id explicabo sapiente,
          </div>
        </Slider>
      </div>
    </div>
  );
}
