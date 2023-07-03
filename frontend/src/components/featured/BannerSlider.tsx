import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";

const TourCard = dynamic(() => import("../listings/ListingCard"), {
  ssr: false,
});
const Heading = dynamic(() => import("../common/Heading"), {
  ssr: false,
});
const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
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

export default function BannerSlider() {
  return (
    <div className="p-8 py-0">
      <div className="w-full">
        <Slider {...settings}>
          <img src="/assets/images/slider1.jpg" alt="Expedia logo" />
          <img src="/assets/images/slider1.jpg" alt="Expedia logo" />
          <img src="/assets/images/slider1.jpg" alt="Expedia logo" />
          <img src="/assets/images/slider1.jpg" alt="Expedia logo" />
        </Slider>
      </div>
    </div>
  );
}
