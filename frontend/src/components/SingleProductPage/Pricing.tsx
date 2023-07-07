import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import { BsCurrencyRupee } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

interface PricingProps {
  price: string | number;
  salePrice: string | number;
  discount: string | number;
}

const Pricing: React.FC<PricingProps> = ({ price, salePrice, discount }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <p>Starting from</p>
          <span className="flex items-center line-through ">
            <BsCurrencyRupee />
            {price}
          </span>
        </div>
        <button className="p-2 bg-orange-200/80 text-primary font-medium rounded-md max-w-fit">
          {discount} Off
        </button>
      </div>
      <div className="flex items-center justify-between gap-0">
        <div className="flex items-center">
          <span className="flex items-center justify-center text-3xl font-semibold text-variant">
            <BsCurrencyRupee />
            {salePrice}
          </span>
          <span className="text-primary self-end">/Person</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.span
            className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
            whileTap={{ scale: 1.1 }}
          >
            <FiMinus />
          </motion.span>
          <input
            type="text"
            min={0}
            className="w-8 h-8 rounded-lg text-base font-semibold"
          />
          <motion.span
            className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
            whileTap={{ scale: 1.1 }}
          >
            <FiPlus />
          </motion.span>
        </div>
      </div>
      <p className="text-xs text-textBlack">
        Just pay 25% now to book your seat
      </p>
      <Link href={"/checkout"}>
        <Button label="Book Now" />
      </Link>
    </div>
  );
};

export default Pricing;
