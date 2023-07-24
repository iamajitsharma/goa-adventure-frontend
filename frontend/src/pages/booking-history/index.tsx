import React, { useState } from "react";
import Container from "@/components/common/Container";
import SearchBar from "@/components/common/SearchBar";
import ProductList from "@/components/UI/ProductList";
import { products } from "../../data/ActivityData";
import { BsSearch, BsCurrencyRupee } from "react-icons/bs";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoGridOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import Image from "next/image";
import CoverImage from "../../../public/assets/cover.jpeg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import ProductCardAlt from "@/components/UI/ProductCardAlt";
import DestinationListItems from "@/components/SearchPage/DestinationListItems";
import HorizontalLayout from "@/components/SearchPage/HorizontalLayout";
import VerticalLayout from "@/components/SearchPage/VerticalLayout";

import BookingHistoryCard from "@/components/Book-History/BookingHistoryCard";

interface ActivitySearchProps {
  min?: any;
  max?: any;
}

let data = [
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Complete",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Refunded",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Canceled",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Pending",
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

const index: React.FC<ActivitySearchProps> = ({ min, max }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productSwitch, setProductSwitch] = useState(false);
  return (
    <>
      <div className="my-4">
        {data.map((d) => (
          <BookingHistoryCard bookingInfo={d} />
        ))}
      </div>

      {/* Content Template Start */}
    </>
  );
};

export default index;
