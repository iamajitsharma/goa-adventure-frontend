import React from "react";

import Slider from "react-slick";

import CarouselNextArrow from "../../CarouselNextArrow";
import Heading from "../../Heading";
export default function HighLightsSlider() {
  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1700,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselNextArrow />,
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
    <div className="flex flex-col justify-start  mx-4 px-4 pt-4 shadow-lg bg-gray-100 shadow-gray-400">
      <div className="text-md mx-10">
        Scuba Diving In Grand Island Highlights
      </div>
      <div className="mx-12">
        {" "}
        <Slider {...settings}>
          <div className="bg-white px-4 py-2 shadow-lg shadow-gray-400 mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi alias consequatur cumque quae inventore
          </div>
          <div className="bg-white px-4 py-2 shadow-lg shadow-gray-400 mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          </div>
          <div className="bg-white px-4 py-2 shadow-lg shadow-gray-400 mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi alias consequatur cumque quae inventore id explicabo sapiente,
          </div>
          <div className="bg-white px-4 py-2 shadow-lg shadow-gray-400 mb-10 mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi alias consequatur cumque quae inventore id explicabo sapiente,
          </div>
        </Slider>
      </div>
    </div>
  );
}
