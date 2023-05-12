import React from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import LocationSlider from "./location/LocationSlider";
import LocationImg from "../../public/assets/location.jpg";
import CarouselNextArrow from "./CarouselNextArrow";
const Heading = dynamic(() => import("./Heading"), {
  ssr: false,
});
const settings = {
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  speed: 1700,
  slidesToShow: 5,
  slidesToScroll: 1,
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

const HeavenEarth = () => {
  return (
    <>
      <div className="text-center pb-8 hidden lg:block lg:translate-y-20">
        <p className="text-4xl titleFont">
          <Heading heading={"Heaven on the earth"} />
        </p>
      </div>
      <div className="p-8 py-0 hidden lg:block lg:mt-12">
        <div className="company-slider px-8 md-px-0 ">
          <Slider {...settings}>
            <img
              src="assets/Rectangle_20.png"
              alt="Expedia logo"
              className="slick-image"
            />
            <img
              src="assets/Rectangle_21.png"
              alt="Expedia logo"
              className="slick-image"
            />
            <img
              src="assets/Rectangle_22.png"
              alt="Expedia logo"
              className="slick-image"
            />
            <img
              src="assets/Rectangle_20.png"
              alt="Expedia logo"
              className="slick-image"
            />
            <img
              src="assets/Rectangle_23.png"
              alt="Expedia logo"
              className="slick-image"
            />
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .slick-image {
          border: 4px solid #fff;
          border-radius: 5px;
          margin: 0 10px;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .slick-image:first-child,
        .slick-image:last-child {
          width: 50%;
        }
      `}</style>
    </>
  );
};

export default HeavenEarth;
