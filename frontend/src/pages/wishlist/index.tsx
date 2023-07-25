import React, { useState } from "react";
import WishListCard from "@/components/WishList/WishListCard";
import { IoIosRemoveCircleOutline } from "react-icons/io";

let data = [
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Remove",
    icon: <IoIosRemoveCircleOutline />,
    color: "text-red-500",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Remove",
    icon: <IoIosRemoveCircleOutline />,
    color: "text-red-500",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Remove",
    icon: <IoIosRemoveCircleOutline />,
    color: "textg-red-500",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Remove",
    icon: <IoIosRemoveCircleOutline />,
    color: "text-red-500",
  },
];

const destinationList = [
  "Andhra Pradesh",
  "Himachal Pradesh",
  "Delhi",
  "Mumbai",
  "Goa",
  "Kolkata",
  "Kerala",
  "Bangalore",
  "Pune",
  "Punjab",
  "Madhya Pradesh",
  "Rajasthan",
];

const index: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <MobileCategorySlider />
      </div>
      <div className="my-4 -z-10">
        {data.map((d) => (
          <WishListCard bookingInfo={d} />
        ))}
      </div>

      {/* Content Template Start */}
    </>
  );
};

export default index;

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const categories = [
  { page: "/test", category: "Booking History" },
  { page: "/test", category: "Wishlist" },
  { page: "/test", category: "Profile Setting" },
  { page: "/test", category: "Booking History" },
  { page: "/test", category: "Wishlist" },
  { page: "/test", category: "Profile Setting" },
];

const MobileCategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="">
        {categories.map((item, index) => (
          <div className="text-nowrap py-2  border text-center border-black">
            {item.category}
          </div>
        ))}
      </Slider>
    </>
  );
};
