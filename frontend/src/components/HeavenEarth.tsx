import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
const Activity = dynamic(() => import("./Activity"), {
  ssr: false,
});
const TourCard = dynamic(() => import("./TourCard"), {
  ssr: false,
});
const Heading = dynamic(() => import("./Heading"), {
  ssr: false,
});
import CarouselNextArrow from "./CarouselNextArrow";

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1700,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0.5,
  nextArrow: <CarouselNextArrow />,
  prevArrow: <CarouselNextArrow />,
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

export default function HeavenEarth() {
  return (
    <>
      <div className="text-center pb-8">
        <p className="text-4xl titleFont">
          <Heading heading={"Heaven on the earth"} />
        </p>
      </div>
      <div className="p-8 py-0">
        <div className="company-slider px-8 md-px-0 ">
          <Slider {...settings}>
            <img src="assets/Rectangle_20.png" alt="Expedia logo" />
            <img src="assets/Rectangle_21.png" alt="Expedia logo" />
            <img src="assets/Rectangle_22.png" alt="Expedia logo" />
            <img src="assets/Rectangle_20.png" alt="Expedia logo" />
            <img src="assets/Rectangle_23.png" alt="Expedia logo" />
          </Slider>
        </div>
      </div>
    </>
  );
}
