import React from "react";
import Image from "next/image";
import cardImage from "../../../public/assets/Rectangle 32.png";
import { AiFillStar } from "react-icons/ai";
import { BsClock, BsPiggyBank } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import Button from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";

const ProductCardAlt = () => {
  const isTable = useMediaQuery({ maxWidth: deviceSize.tablet });

  return (
    <div className="w-full h-full shadow-3xl bg-white flex flex-row items-start gap-0 overflow-hidden rounded-lg">
      <Image src={cardImage} alt="" className="w-2/5 h-full object-cover" />
      <div className="w-full h-full flex flex-col px-2 py-1">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-700">
          Scuba Diving Grand Island
        </h2>

        {/* Card Details */}
        <div className="flex flex-wrap gap-2 md:gap-4 py-4">
          <span className="flex items-center gap-2 text-xs md:text-sm">
            <FiMapPin className="text-primary text-xl" />
            Grand Island
          </span>
          <span className="flex items-center gap-2 text-xs md:text-sm">
            <BsClock className="text-primary text-xl" />
            30 Mins
          </span>
          <span className="flex items-center gap-2 text-xs md:text-sm">
            <AiFillStar className="text-primary text-xl" />
            4.5 Review
          </span>
        </div>

        {/* Card Features */}
        <div className="flex flex-col gap-2 py-1">
          <span className="flex items-center gap-2 text-xs font-medium">
            <MdOutlineConfirmationNumber className="text-green-600/80 text-xl" />
            Instant Confirmation
          </span>
          <span className="flex items-center gap-2 text-xs">
            <HiOutlineReceiptRefund className="text-amber-500 text-xl" />
            Easy Refund
          </span>
          <span className="flex items-center gap-2 text-xs">
            <BsPiggyBank className="text-blue-600/80 text-xl" />
            Just pay 25% to book seat
          </span>
        </div>
        {/* Card Pricing  */}
        <div className="flex items-end justify-between gap-0 w-full h-full py-2">
          <div className="flex items-center gap-1 ">
            <span className="flex items-center text-sm md:text-lg line-through tracking-wider font-medium text-neutral-500">
              <BiRupee className="text-base md:text-lg" />
              2000
            </span>
            <span className="flex items-center text-base sm:text-xl md:text-2xl tracking-wider font-semibold text-primary">
              <BiRupee className="text-xl md:text-2xl" />
              1500
            </span>
          </div>
          <div>
            {isTable ? (
              <Button label="Book Now" small />
            ) : (
              <Button label="Book Now" fullWidth />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAlt;
