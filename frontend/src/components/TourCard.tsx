import React from "react";
import Image from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiFillHeart, AiFillEye } from "react-icons/ai";
import { BsClock } from "react-icons/bs";

const TourCard = () => {
  return (
    <div className="card">
      <Image
        src={TourCardImg}
        alt="Tour"
        className="w-full h-full object-cover"
      />
      <div className="flex flex-row justify-between items-center absolute top-0 w-full px-4 pt-2 text-white">
        <span className="flex items-center gap-1 text-sm font-medium">
          <MdLocationPin />
          Goa
        </span>
        <span className="flex items-center gap-1 text-sm font-medium">
          <BsClock />
          3N/4D
        </span>
      </div>
      <div className="card-content">
        <h2 className="card-title">Honeymoon Tour Packages</h2>

        <div className="flex flex-row items-center text-sm pt-2">
          <AiFillStar className="text-yellow-400" fontSize={15} />
          <span className="font-medium">4.5</span>
          <span className="text-gray-500 font-normal pl-2">(450 reviews)</span>
        </div>

        <div className="flex gap-1 pt-2">
          <span className="flex flex-row items-center text-lg font-semibold">
            <BiRupee fontSize={20} /> 2500
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span className="flex flex-row items-center line-through text-sm font-medium opacity-50">
              3750
            </span>
            <span className="discount-percent">save 20%</span>
          </div>
        </div>

        <div className="mt-5 flex w-full justify-center items-center gap-2">
          <button className="button-primary">Book Now</button>
          <button className="button-icon">
            <AiFillHeart className="text-sm md:text-lg" />
          </button>
          <button className="button-icon">
            <AiFillEye className="text-sm md:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
