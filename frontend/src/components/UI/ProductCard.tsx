import React, { useEffect } from "react";
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
  const handleNavigation = () => {
    if (item.category === "activity") {
      router.push(`activity/${item.id}`);
    } else if (item.category === "tour") {
      router.push(`tour/${item.id}`);
    } else {
      router.push(`/${item.id}`);
    }
  };

  // useEffect(() => {
  //   handleNavigation();
  // }, []);

  const salePrice = item.price - (item.price * item.discountPercent) / 100;

  return (
    <motion.div className="card box-border" whileHover={{ scale: 1.02 }}>
      <div className="shrink-0">
        <Image
          src={item.featuredImage}
          alt="Tour"
          className="w-full object-cover"
          width={500}
          height={500}
          onClick={handleNavigation}
        />
      </div>

      <div className="flex flex-row justify-between items-center absolute top-0 w-full px-4 pt-2 text-white">
        <span className="text-sm font-medium bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center p-3">
          -{item.discountPercent}%
        </span>
        <span className="flex items-center gap-1 text-sm font-medium">
          <BsHeart className="text-sm md:text-lg w-6 h-6" />
          {/* <BsClock />
          {duration} */}
        </span>
      </div>
      <div className="card-content">
        <div className="">
          <h2 className="card-title" onClick={handleNavigation}>
            {item.title}
          </h2>
        </div>

        <div className="flex flex-row items-center justify-between text-sm py-2">
          <span className="flex flex-row items-center gap-1 text-sm text-neutral-900 font-medium">
            <FiMapPin /> {item.location}
          </span>
          <span className="flex flex-row items-center gap-1 text-base text-neutral-900 font-medium">
            <AiFillStar className="text-primary" /> {item.review}
          </span>
        </div>
        <hr className="py-3" />
        <div className="mt-5 flex w-full justify-between items-center gap-2">
          <div className="flex gap-1">
            <span className="flex flex-row items-center text-base tracking-wider font-semibold text-primary">
              <BiRupee fontSize={20} /> {salePrice}
            </span>
            <div className="flex flex-row gap-2 items-center">
              <span className="flex flex-row items-center line-through text-sm font-medium opacity-50 text-neutral-900 ">
                {item.price}
              </span>
            </div>
          </div>
          <div>
            <span className="flex flex-row items-center gap-1 text-sm text-neutral-900 font-medium">
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
