import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LocationImage from "../../../public/assets/location.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";

interface DestinationCardProps {
  location?: String;
  lowestPrice?: number;
  image?: any;
  review?: any;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  location,
  lowestPrice,
  image,
  review,
}) => {
  return (
    <div className="hidden md:block w-[250px] bg-white border border-gray-200 rounded-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 mx-auto font-poppins">
      <div className="">
        <Image src={image} alt="Tour" className="max-h-64 object-cover" />
        <div className="p-2 flex flex-col gap-2">
          <h4 className="text-variant text-base tracking-wider font-semibold">
            {location}
          </h4>
          <span className="self-end text-sm font-medium tracking-wider text-variant">
            Starting from
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-1">
              <span className="text-xl text-primary">
                <AiFillStar />
              </span>
              <span className="text-xl text-primary">
                <AiFillStar />
              </span>
              <span className="text-xl text-primary">
                <AiFillStar />
              </span>
              <span className="text-xl text-primary">
                <AiFillStar />
              </span>
              <span className="text-xl text-gray-500">
                <AiOutlineStar />
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-base font-semibold text-primary inline-flex items-center tracking-wider">
                <BsCurrencyRupee />
                {lowestPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
