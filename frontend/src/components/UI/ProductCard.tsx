import React, { useState, useEffect } from "react";
import CardSkelton from "../Animation/CardSkelton";
import Image, { StaticImageData } from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import { MdLocationPin, MdOutlineConfirmationNumber } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiFillHeart, AiFillEye } from "react-icons/ai";
import { BsClock, BsHeart, BsPiggyBank } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { TbDiscountCheck } from "react-icons/tb";

interface CardProps {
  item?: any;
  isLoading?: boolean;
}

const ProductCard: React.FC<CardProps> = ({ item, isLoading }) => {
  const router = useRouter();
  const handleNavigation = () => {
    if (item.category === "Activity") {
      router.push(`/activity/${item.slug}`);
    } else if (item.category === "Tour") {
      router.push(`/tour/${item.slug}`);
    } else {
      router.push(`/${item.slug}`);
    }
  };

  // useEffect(() => {
  //   handleNavigation();
  // }, []);

  const originalPrice = parseFloat(item.price);
  const discountPercent = parseFloat(item.discount_percent);
  const salePrice = originalPrice - (originalPrice * discountPercent) / 100;

  return (
    <>
      {isLoading ? (
        <CardSkelton />
      ) : (
        <motion.div className="card" whileHover={{ scale: 1.02 }}>
          <div className="shrink-0 w-full h-44 overflow-hidden">
            <Image
              src={item.featured_image}
              alt="Tour"
              className="w-full h-full object-cover"
              height={500}
              width={500}
              onClick={handleNavigation}
            />
          </div>

          <div className="flex flex-row justify-between items-center absolute top-0 w-full px-2 md:px-4 pt-2 text-white">
            <span className="text-xs md:text-sm font-medium bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center p-1 md:p-3">
              -{item.discount_percent}%
            </span>
            <motion.span
              className="flex items-center gap-1 text-sm font-medium"
              whileTap={{ scale: 1.1 }}
            >
              <BsHeart className="text-base md:text-lg" />
              {/* <BsClock />
          {duration} */}
            </motion.span>
          </div>
          <div className="card-content">
            <div className="overflow-hidden">
              <h2 className="card-title" onClick={handleNavigation}>
                {item.title}
              </h2>
            </div>

            <div className="flex flex-row items-center justify-between text-sm py-2">
              <span className="flex flex-row items-center gap-1 text-xs md:text-sm text-neutral-900 font-medium">
                <FiMapPin />
                {item.state}
              </span>
              <span className="flex flex-row items-center gap-1 text-xs md:text-sm  text-neutral-900 font-medium">
                <AiFillStar className="text-primary" /> {item.review}
              </span>
            </div>
            <hr className="py-1" />
            <div className="flex flex-row flex-wrap gap-2 py-1">
              <span className="flex items-center gap-2 text-xs font-medium">
                <MdOutlineConfirmationNumber className="text-green-600/80 text-xl" />
                Mobile Ticket
              </span>
              <span className="flex items-center gap-2 text-xs font-medium">
                <HiOutlineReceiptRefund className="text-amber-500 text-xl" />
                Easy Refund
              </span>
              <span className="flex items-center gap-2 text-xs font-medium">
                <TbDiscountCheck className="text-rose-500 text-xl" />
                Pay 25% to book seat
              </span>
            </div>
            <div className="mt-5 flex w-full justify-between items-center gap-2">
              <div className="flex gap-1">
                <span className="flex flex-row items-center text-sm md:text-base  tracking-wider font-semibold text-primary">
                  <BiRupee fontSize={20} /> {salePrice}
                </span>
                <div className="flex flex-row gap-2 items-center">
                  <span className="flex flex-row items-center line-through text-[11px] md:text-sm font-medium opacity-50 text-neutral-900 ">
                    {item.price}
                  </span>
                </div>
              </div>
              <div>
                <span className="flex flex-row items-center gap-1 text-[11px] md:text-sm text-neutral-900 font-medium">
                  <BsClock />
                  {item.duration}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProductCard;
