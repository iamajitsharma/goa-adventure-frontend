import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
const Activity = dynamic(() => import("./Activity"), {
  ssr: false,
});
const TourCard = dynamic(() => import("./listings/ListingCard"), {
  ssr: false,
});
const Heading = dynamic(() => import("./Heading"), {
  ssr: false,
});
const bannerSlider = {
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

export default function Partners() {
  return (
    <>
      <Heading heading={"Our Partners"} />
      <div className="flex flex-row m-20 justify-between">
        <img src="expedia.png" alt="Expedia logo" />
        <img src="tripadvisor.png" alt="Expedia logo" />
        <img src="airbnb.png" alt="Expedia logo" />
        <img src="airasia.png" alt="Expedia logo" />
      </div>
    </>
  );
}
