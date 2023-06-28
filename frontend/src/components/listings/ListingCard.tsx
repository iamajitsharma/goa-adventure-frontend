import React from "react";
import Image, { StaticImageData } from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiFillHeart, AiFillEye } from "react-icons/ai";
import { BsClock, BsHeart } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface CardProps {
  id?: string | number;
  title?: string;
  image?: any;
  location?: string;
  duration?: string;
  review?: number;
  reviewCount?: string | number;
  salePrice?: number;
  regularPrice?: number;
  discount?: string | number;
  className?: string;
  href?: URL | string;
  onClick?: any;
  prodId?: any;
}

const ListingCard: React.FC<CardProps> = ({
  id,
  title,
  image,
  location,
  duration,
  review,
  reviewCount,
  salePrice,
  regularPrice,
  discount,
  prodId,
  onClick,
}) => {
  const router = useRouter();
  return (
    <div className="card cursor-pointer">
      <motion.div>
        <Image
          src={image}
          alt="Tour"
          className="w-full h-full object-cover"
          width={500}
          height={500}
          onClick={() => onClick(prodId)}
        />
      </motion.div>

      <div className="flex flex-row justify-between items-center absolute top-0 w-full px-4 pt-2 text-white">
        <span className="text-sm font-medium bg-rose-600 w-10 h-10 rounded-full flex items-center justify-center p-2">
          -{discount}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium">
          <BsHeart className="text-sm md:text-lg w-6 h-6" />
          {/* <BsClock />
          {duration} */}
        </span>
      </div>
      <div className="card-content">
        <div className="">
          <span className="flex flex-row items-center gap-1 text-sm text-gray-500">
            <FiMapPin /> {location}
          </span>
          <h2 className="card-title">{title}</h2>
        </div>

        <div className="flex flex-row items-center gap-1 text-sm py-3">
          <AiFillStar className="text-yellow-500" fontSize={20} />
          <span className="font-semibold">{review}</span>
          <span className="text-gray-500 font-normal">{reviewCount}</span>
        </div>
        <hr />
        <div className="mt-5 flex w-full justify-between items-center gap-2">
          <div className="flex gap-1 pt-2">
            <span className="flex flex-row items-center text-lg font-semibold">
              <BiRupee fontSize={20} /> {salePrice}
            </span>
            <div className="flex flex-row gap-2 items-center">
              <span className="flex flex-row items-center line-through text-sm font-medium opacity-50">
                {regularPrice}
              </span>
            </div>
          </div>
          <div>
            <span className="flex flex-row items-center gap-1 text-sm text-gray-500 font-medium">
              <BsClock />
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
