import React from "react";
import Slider from "react-slick";
import LocationSlider from "./location/LocationSlider";
import LocationImg from "../../public/assets/location.jpg";
import CarouselNextArrow from "./CarouselNextArrow";

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
    <section>
      <div className="md:max-w-7xl mx-auto bg-gray-300">
        <Slider {...settings}>
          <LocationSlider image={LocationImg} location="Ladakh" />
          <LocationSlider image={LocationImg} location="Ladakh" />
          <LocationSlider image={LocationImg} location="Ladakh" />
          <LocationSlider image={LocationImg} location="Ladakh" />
          <LocationSlider image={LocationImg} location="Ladakh" />
          <LocationSlider image={LocationImg} location="Ladakh" />
        </Slider>
      </div>
    </section>
  );
};

export default HeavenEarth;
