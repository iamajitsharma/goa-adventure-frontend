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

export default function BannerSlider() {
  return (
    <>
      <div className="text-center pb-8">
        <p className="text-4xl titleFont">
          <Heading heading={"Heaven on the earth"} />
        </p>
      </div>
      <div className="p-8 py-0">
        <div className="companyBanner-slider w-full  ">
          <Slider {...bannerSlider}>
            <img src="assets/banner.png" alt="Expedia logo" />
            <img src="assets/banner.png" alt="Expedia logo" />
            <img src="assets/banner.png" alt="Expedia logo" />
            <img src="assets/banner.png" alt="Expedia logo" />
            <img src="assets/banner.png" alt="Expedia logo" />
          </Slider>
        </div>
      </div>
    </>
  );
}
