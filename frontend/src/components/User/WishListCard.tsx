import React from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { BiCategoryAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const WishListCard = ({ item }: any) => {
  return (
    <div className="shadow-4xl bg-white rounded-md w-full my-4 flex flex-row gap-2 font-poppins relative overflow-hidden">
      <div className="w-3/12 h-24">
        <Image
          src={item.image}
          alt=""
          className="object-cover absolute left-0 top-0 w-3/12 h-full"
        />
      </div>
      <div className="w-9/12 flex flex-col relative">
        <h3 className="text-base font-semibold text-neutral-700">
          {item.title}
        </h3>
        <div className="flex flex-row flex-wrap gap-3 text-sm text-gray-500 font-semibold md:font-medium py-2">
          <span className="inline-flex items-center gap-2">
            <FiMapPin />
            {`${item.state} ${item.country}`}
          </span>
          <span className="inline-flex items-center gap-2">
            <BiCategoryAlt />
            {item.categoryType}
          </span>
          <motion.div
            className="flex items-center gap-2 text-red-500 cursor-pointer"
            whileTap={{ scale: 1.2 }}
          >
            <RxCrossCircled />
            Remove
          </motion.div>
        </div>
        <span className="text-sm text-gray-500 font-medium self-end">
          {item.bookingDate}
        </span>
      </div>
    </div>
  );
};

export default WishListCard;
