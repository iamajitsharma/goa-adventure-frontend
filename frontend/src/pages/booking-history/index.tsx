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
import BookingHistory from "@/components/Book-History/BookingHistoryCard";
import BookingHistoryCard from "@/components/Book-History/BookingHistoryCard";

interface ActivitySearchProps {
  min?: any;
  max?: any;
}

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
      <BookingHistoryCard />

      {/* Content Template Start */}
      <section>
        <Container className="font-poppins">
          <div className="flex flex-col gap-4 w-full h-full md:flex-row">
            <div className="hidden md:block md:w-3/12">
              <DestinationListItems />
            </div>
            <div className="w-full md:w-9/12">
              <SearchBar />
              {/* Filter Option Start */}
              <div className="flex flex-row items-center flex-wrap gap-3 pt-6 w-full">
                {/* Destination Drodown */}
                <div>
                  <select className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer">
                    <option defaultValue="Destination">Destination</option>
                    <option>Goa</option>
                    <option>Kerala</option>
                    <option>Himachal Pradesh</option>
                  </select>
                </div>
                {/* Category Dropdown */}
                <div>
                  <select className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer">
                    <option defaultValue="Destination">Category</option>
                    <option>Tour Package</option>
                    <option>Adventure</option>
                    <option>Local Sightseeing</option>
                  </select>
                </div>
                {/* Sub Category Dropdown */}
                <div>
                  <select className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer">
                    <option defaultValue="Destination">Category Type</option>
                    <option>Tour Package</option>
                    <option>Adventure</option>
                    <option>Local Sightseeing</option>
                  </select>
                </div>
                {/* Price Range */}
                <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Price Range
                    {isOpen ? (
                      <IoIosArrowUp
                        fontSize={14}
                        className="text-base font-medium"
                      />
                    ) : (
                      <IoIosArrowDown
                        fontSize={14}
                        className="text-base font-medium"
                      />
                    )}
                  </button>
                  {isOpen && (
                    <div className="absolute top-10 right-0 z-10">
                      <MultiRangeSlider
                        min={0}
                        max={25000}
                        onChange={({}) =>
                          console.log(`min = ${min}, max = ${max}`)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* Filter Option End */}
              {/* Search Result Heading && Grid Toggle */}
              <div className="flex items-center justify-between py-4">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-800">
                  Result for goa tour package
                </h3>
                <span className="flex items-center py-6 gap-4 text-xl text-neutral-700 cursor-pointer">
                  <AiOutlineBars onClick={() => setProductSwitch(false)} />
                  <IoGridOutline onClick={() => setProductSwitch(true)} />
                </span>
              </div>
              {/* Main Product Listing */}
              <div>
                {productSwitch ? <VerticalLayout /> : <HorizontalLayout />}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;