import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

<<<<<<< Updated upstream
const locationData = [
  { id: "01", locatonImg: "MobileSlider1.png", location: "Delhi" },
  { id: "02", locatonImg: "MobileSlider2.png", location: "Kerala" },
  { id: "03", locatonImg: "MobileSlider3.png", location: "Mumbai" },
  { id: "04", locatonImg: "MobileSlider4.png", location: "Goa" },
  { id: "05", locatonImg: "MobileSlider4.png", location: "Himachal" },
  { id: "06", locatonImg: "MobileSlider4.png", location: "Uttrakhand" },
];

=======
>>>>>>> Stashed changes
export default function LocationMobileSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
<<<<<<< Updated upstream
          slidesToScroll: 2,
=======
          slidesToScroll: 4,
>>>>>>> Stashed changes
        },
        dots: true,
        appendDots: (dots: any) => (
          <div style={{ backgroundColor: "red" }}>
            <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
          </div>
        ),
      },
    ],
  };

  return (
<<<<<<< Updated upstream
    <div className="bg-transparent absolute top-60 translate-y-10 w-full lg:hidden">
      <Slider {...settings}>
        {locationData?.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center max-w-full w-full text-center"
          >
            <img
              src={item.locatonImg}
              alt="Expedia logo"
              className="slick-image"
            />
            <span className="text-textBlack font-medium uppercase">
              {item.location}
            </span>
          </div>
        ))}
=======
    <div className="bg-transparent absolute top-64 sm:top-72 translate-y-3 z-20 w-full lg:hidden">
      <Slider {...settings}>
        <div className="flex flex-col text-black justify-center items-center font-semibold z-20 scale-200 mr-4 sm:ml-16">
          <img
            src="MobileSlider1.png"
            alt="Expedia logo"
            className="slick-image"
          />
          <span className="text-black z-20 px-4">DELHI</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black font-semibold z-20 sm:ml-16">
          <img
            src="MobileSlider2.png"
            alt="Expedia logo"
            className="slick-image"
          />
          <span className="text-black z-20 px-5"> GOA</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black font-semibold z-20 sm:ml-16">
          <img
            src="MobileSlider3.png"
            alt="Expedia logo"
            className="slick-image"
          />
          <span className="text-black z-20 px-2">KERALA</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black font-semibold z-20 sm:ml-16">
          <img
            src="MobileSlider4.png"
            alt="Expedia logo"
            className="slick-image"
          />
          <span className="text-black z-20 px-1">MUMBAI</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black font-semibold z-20 sm:ml-16">
          <img
            src="MobileSlider3.png"
            alt="Expedia logo"
            className="slick-image"
          />
          <span className="text-black z-20 px-2">KERALA</span>
        </div>
        <div className="flex flex-col justify-center items-center text-black font-semibold z-20 sm:ml-16 ">
          <img
            src="MobileSlider2.png"
            alt="Expedia logo"
            className="slick-image"
          />
          <span className="text-black z-20 px-5"> GOA</span>
        </div>
>>>>>>> Stashed changes
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
    </div>
  );
}
