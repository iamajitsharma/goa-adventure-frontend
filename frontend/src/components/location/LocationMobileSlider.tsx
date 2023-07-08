import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import locationImg from "../../../public/MobileSlider1.png";
import Image from "next/image";
import MobileLocaltion from "../UI/MobileLocaltion";

export default function LocationMobileSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
        dots: false,
        appendDots: (dots: any) => (
          <div style={{ backgroundColor: "#FF8359" }}>
            <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
          </div>
        ),
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <MobileLocaltion image={locationImg} location="Himachal Pradesh" />
        ))}
      </Slider>
      <style>
        {`
         .slick-dots li button:before {
            color: #EC9706; /* inactive dot color */
          }
          
          .slick-dots li.slick-active button:before {
            color: #ff7f00; /* active dot color */
          }
        `}
      </style>
    </>
  );
}
