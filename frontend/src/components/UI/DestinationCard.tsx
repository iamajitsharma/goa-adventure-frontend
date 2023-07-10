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
    <div className="max-w-xs w-[95%] md:w-[84%] max-h-fit h-full bg-white border border-gray-200 rounded-2xl overflow-hidden drop-shadow-sm shadow-sm mx-auto font-poppins">
      <div className="shrink-0">
        <Image
          src={image}
          alt="Tour"
          className="w-full max-h-64 object-cover"
        />
        <div className="p-2 flex flex-col gap-2 bg-white">
          <h4 className="text-sm md:text-base text-variant tracking-wider font-semibold">
            {location}
          </h4>
          <span className="self-end text-xs font-medium tracking-wider text-variant">
            Starting from
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-1">
              <span className="flex items-center text-base md:text-xl text-primary">
                {[0, 1, 2, 3].map((item, index) => (
                  <AiFillStar />
                ))}
              </span>
              <span className="text-base md:text-xl text-neutral-500">
                <AiOutlineStar />
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm md:text-base font-semibold text-primary inline-flex items-center tracking-wider">
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
