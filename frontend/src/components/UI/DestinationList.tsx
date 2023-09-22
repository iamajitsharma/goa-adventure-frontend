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

// const locationData = [
//   {
//     location: "Goa",
//     country: "India",
//     image: location01,
//     lowestPrice: 2500,
//     review: 4.5,
//   },
//   {
//     location: "Kerala",
//     country: "India",
//     image: location02,
//     lowestPrice: 2500,
//     review: 4.5,
//   },
//   {
//     location: "Himachal Pradesh",
//     country: "India",
//     image: location03,
//     lowestPrice: 2500,
//     review: 4.5,
//   },
//   {
//     location: "Mumbai",
//     country: "India",
//     image: location04,
//     lowestPrice: 2500,
//     review: 4.5,
//   },
//   {
//     location: "Sikkim",
//     country: "India",
//     image: location01,
//     lowestPrice: 2500,
//     review: 4.5,
//   },
// ];

const DestinationList = ({ locationData }: any) => {
  const router = useRouter();
  //console.log("Resceived locationData", locationData);
  const handleEdge = (edge: string) => {
    //console.log(`Edge reached: ${edge}`);
  };
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
    slidesToScroll: 1,
    initialSlide: 2,
    onEdge: (edge: string) => handleEdge(edge),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="pt-8">
        {locationData?.map((item: any, index: any) => (
          <DestinationCard
            key={item.location}
            state={item.location}
            country={item.location}
            image={item.image}
            lowestPrice={item.minimum_price}
          />
        ))}
      </Slider>
      <style>
        {`
         .slick-list {
          padding-left:0px !important;
          }
          .slick-slide{
            margin:10px 0px;
          }
        `}
      </style>
    </>
  );
};

export default DestinationList;
