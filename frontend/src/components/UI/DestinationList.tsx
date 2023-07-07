import React from "react";
import DestinationCard from "./DestinationCard";
import Slider from "react-slick";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import { useRouter } from "next/router";
import location01 from "../../../public/assets/Rectangle_20.png";
import location02 from "../../../public/assets/Rectangle_21.png";
import location03 from "../../../public/assets/Rectangle_22.png";
import location04 from "../../../public/assets/Rectangle_23.png";

const locationData = [
  { location: "Goa", image: location01, lowestPrice: 2500, review: 4.5 },
  { location: "Kerala", image: location02, lowestPrice: 2500, review: 4.5 },
  {
    location: "Himachal Pradesh",
    image: location03,
    lowestPrice: 2500,
    review: 4.5,
  },
  { location: "Mumbai", image: location04, lowestPrice: 2500, review: 4.5 },
  { location: "Sikkim", image: location01, lowestPrice: 2500, review: 4.5 },
];

const DestinationList = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    speed: 500,
    slidesToShow: 4,

    centerMode: true,
    centerPadding: "60px",
  };
  return (
    <>
      <Slider {...settings} className="pt-10">
        {locationData.map((item: any, index: any) => (
          <DestinationCard
            key={index}
            location={item.location}
            image={item.image}
            lowestPrice={item.lowestPrice}
          />
        ))}
      </Slider>
      <style>
        {`
         .slick-list {
   padding-left:0px !important;
}
        `}
      </style>
    </>
  );
};

export default DestinationList;
