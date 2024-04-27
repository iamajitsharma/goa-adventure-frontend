import React, { useState, useEffect, Fragment } from "react";
import CardSkelton from "../Animation/CardSkelton";
import Image, { StaticImageData } from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import { MdLocationPin, MdOutlineConfirmationNumber } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiFillHeart, AiFillEye } from "react-icons/ai";
import { BsClock, BsHeart, BsPiggyBank } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { TbDiscountCheck } from "react-icons/tb";
import { urlForImage } from "@/lib/client";
import { Button } from "../common/Button";
import { thousandSeparator } from "@/lib/utils";
import { GoTag } from "react-icons/go";
import EnquiryModal from "../modals/EnquiryModal";
import useToggle from "@/hook/useToggle";
import useEnquiryModal from "@/hook/useEnquiryModal";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modal/modalSlice";

interface CardProps {
  item?: any;
  isLoading?: boolean;
}

const ProductCard: React.FC<CardProps> = ({ item, isLoading }) => {
  if (!item) {
    return null;
  }

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const {
    category,
    category_slug,
    deposit,
    duration,
    discount,
    images,
    location,
    price,
    product_title,
    slug,
    state,
    _id,
  } = item;

  const router = useRouter();

  const originalPrice = parseFloat(price);
  const discountPercent = parseFloat(discount);
  const salePrice = originalPrice - (originalPrice * discountPercent) / 100;

  return (
    <Fragment>
      <motion.div
        className="relative box-border bg-white text-gray-700 max-w-sm rounded-2xl overflow-hidden font-poppins m-3 border-[1px] border-gray-200 shadow-sm cursor-pointer mx-auto"
        whileHover={{ scale: 1.02 }}
      >
        <div className="shrink-0 w-full h-44 overflow-hidden">
          {item.images && (
            <Image
              src={images}
              alt="T"
              className="w-full h-full object-cover"
              height={500}
              width={500}
              onClick={() => router.push(`/${category_slug}/${slug}`)}
            />
          )}
        </div>

        <div className="h-auto w-full">
          <div className="flex flex-row justify-between items-center absolute top-0 w-full px-2 md:px-4 pt-2 text-white">
            <span className="text-xs md:text-sm font-medium bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center p-1 md:p-3">
              -{discount}%
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
          <div className="pt-2 px-1">
            <div className="flex justify-between text-neutral-600 text-sm font-medium py-1">
              <span className="flex flex-row items-center gap-1">
                <FiMapPin />
                {location} {state}
              </span>
              <span className="flex flex-row items-center gap-1">
                <BsClock />
                {duration}
              </span>
            </div>

            <div className="text-clip overflow-hidden ...  h-14 pt-2 mb-6">
              <h2 className="font-semibold text-base text-clip">
                {product_title}
              </h2>
            </div>

            {/* Promotion Tag */}
            <div
              className="
        flex 
        items-center 
        justify-start
        gap-2
        bg-gradient-to-r from-red-500 to-orange-500
        text-white
        text-sm
        px-3
        py-1
        max-w-fit
        absolute
        left-0
        rounded-tr-full
        rounded-br-full
        "
            >
              <GoTag size={16} /> Just Deposit {deposit}% To Book
            </div>

            <div className="relative pt-10">
              {/* Pricing  */}

              <div className="flex gap-2 items-center pb-2">
                <span className="text-rose-400 line-through text-sm">
                  INR {thousandSeparator(price)}
                </span>
                <span className="text-neutral-800 font-semibold text-base">
                  INR {thousandSeparator(salePrice)}
                </span>
              </div>

              <div className=" w-full px-2 py-2">
                <div className="flex justify-between items-center">
                  {/* <Button
                    variant={"outline"}
                    size={"xs"}
                    href="tel:+917387960861"
                  >
                    <FaPhoneAlt className="mr-1" /> Call Now
                  </Button> */}
                  <Button variant="dark" size={"xs"} onClick={handleOpenModal}>
                    Enquiry Now
                  </Button>
                  <Button
                    size={"xs"}
                    variant="primary"
                    href={`/${category_slug}/${slug}`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default ProductCard;
