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
  item?: any;
}

const ProductCard: React.FC<CardProps> = ({ item }) => {
  const router = useRouter();
  return (
    <motion.div className="card cursor-pointer" whileHover={{ scale: 1.02 }}>
      <div>
        <Image
          src={item.image}
          alt="Tour"
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>

      <div className="flex flex-row justify-between items-center absolute top-0 w-full px-4 pt-2 text-white">
        <span className="text-sm font-medium bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center p-3">
          -{item.discount}%
        </span>
        <span className="flex items-center gap-1 text-sm font-medium">
          <BsHeart className="text-sm md:text-lg w-6 h-6" />
          {/* <BsClock />
          {duration} */}
        </span>
      </div>
      <div className="card-content">
        <div className="">
          <h2 className="card-title">{item.title}</h2>
        </div>

        <div className="flex flex-row items-center justify-between text-sm py-1">
          <span className="flex flex-row items-center gap-1 text-base text-neutral-900 font-medium">
            <AiFillStar className="text-primary" /> {item.review}
          </span>
          <span className="flex flex-row items-center gap-1 text-base text-neutral-900 font-medium">
            <FiMapPin /> {item.location}
          </span>
        </div>
        <hr />
        <div className="mt-5 flex w-full justify-between items-center gap-2">
          <div className="flex gap-1 pt-2">
            <span className="flex flex-row items-center text-lg font-semibold text-primary">
              <BiRupee fontSize={20} /> {item.salePrice}
            </span>
            <div className="flex flex-row gap-2 items-center">
              <span className="flex flex-row items-center line-through text-sm font-medium opacity-50 text-neutral-900 ">
                {item.regularPrice}
              </span>
            </div>
          </div>
          <div>
            <span className="flex flex-row items-center gap-1 text-base text-neutral-900 font-medium">
              <BsClock />
              {item.duration}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
