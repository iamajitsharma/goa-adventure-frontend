import React from "react";
import Image from "next/image";
import cardImage from "../../../public/assets/Rectangle 32.png";
import { AiFillStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
const ProductCardAlt = () => {
  return (
    <div className="w-full h-[250px] shadow-md bg-white flex flex-row items-start gap-4 overflow-hidden rounded-lg">
      <Image src={cardImage} alt="" className="w-2/5 h-full object-cover" />
      <div className="w-full h-full bg-red-200">
        <h2 className="text-xl font-semibold text-neutral-700">
          Scuba Diving Grand Island
        </h2>
        <div className="flex flex-col w-full h-full">
          {/* Card Details */}
          <div className="flex  gap-4 py-4">
            <span className="flex items-center gap-2 text-base">
              <FiMapPin className="text-primary text-xl" />
              Grand Island
            </span>
            <span className="flex items-center gap-2 text-base">
              <BsClock className="text-primary text-xl" />
              30 Mins
            </span>
            <span className="flex items-center gap-2 text-base">
              <AiFillStar className="text-primary text-xl" />
              4.5 Review
            </span>
          </div>
          {/* Card Pricing  */}
          <div className="flex justify-self-end gap-1 w-full h-full">
            <span className="flex text-2xl tracking-wider font-semibold text-primary">
              <BiRupee fontSize={20} />
              1500
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAlt;
