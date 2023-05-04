import React from "react";
import Image from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsClock } from "react-icons/bs";

const TourCard = () => {
  return (
    <div className="relative max-w-sm rounded-3xl overflow-hidden shadow-lg">
      <Image
        src={TourCardImg}
        alt="Tour Card"
        className="relative w-full h-full"
      />
      <div className="absolute top-0 right-0 px-4 py-2 flex flex-row justify-end text-white">
        <AiOutlineHeart fontSize={30} />
      </div>
      <div className="flex justify-between items-center px-4 absolute w-full -mt-8 text-white text-lg font-medium">
        <div className="flex flex-row justify-between items-center w-full">
          <span className="flex flex-row gap-1 items-center">
            <MdLocationPin fontSize={20} className="text-white" /> Goa
          </span>
          <span className="flex flex-row gap-1 items-center">
            <BsClock fontSize={20} /> 3N/4D
          </span>
        </div>
      </div>
      <div className="px-2 py-2">
        <div className="font-medium text-md mb-2 leading-tight">
          Goa Tour Package 3 Night 4 Days
        </div>
        <div className="flex justify-between items-center pt-8 px-2">
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row items-center gap-2">
              <span className="flex flew-row items-center text-lg font-medium">
                <BiRupee fontSize={20} />
                9000
              </span>
              <span className="text-base font-medium text-gray-600">
                Per pax
              </span>
            </div>
            <span className=" px-4 text-sm font-medium line-through text-gray-500">
              10500
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <AiFillStar fontSize={20} className="text-yellow-500" />
            <span className="text-base font-medium">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
