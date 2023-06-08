import React from "react";
import Image, { StaticImageData } from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";
import { MdLocationPin } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { AiFillStar, AiFillHeart, AiFillEye } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import Link from "next/link";

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
  href?: URL;
  onClick?: (value: string) => void;
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
  className,
  href,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick("hello"); // Pass the value "hello" to onClick
    }
  };
  return (
    <div className="card">
      <button onClick={handleClick}>Test</button>
      <Image
        src={image}
        alt="Tour"
        className="w-full h-full object-cover"
        width={500} // Provide the required "width" property here
        height={300}
      />
      <div className="flex flex-row justify-between items-center absolute top-0 w-full px-4 pt-2 text-white">
        <span className="flex items-center gap-1 text-sm font-medium">
          <MdLocationPin />
          {location}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium">
          <BsClock />
          {duration}
        </span>
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>

        <div className="flex flex-row items-center text-sm pt-2">
          <AiFillStar className="text-yellow-400" fontSize={15} />
          <span className="font-medium">{review}</span>
          <span className="text-gray-500 font-normal pl-2">{reviewCount}</span>
        </div>

        <div className="flex gap-1 pt-2">
          <span className="flex flex-row items-center text-lg font-semibold">
            <BiRupee fontSize={20} /> {salePrice}
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span className="flex flex-row items-center line-through text-sm font-medium opacity-50">
              {regularPrice}
            </span>
            <span className="discount-percent">save {discount}</span>
          </div>
        </div>

        <div className="mt-5 flex w-full justify-center items-center gap-2">
          <button className="button-primary">
            <Link href={href}>Book Now</Link>
          </button>
          <button className="button-icon">
            <AiFillHeart className="text-sm md:text-lg" />
          </button>
          <button className="button-icon">
            <AiFillEye className="text-sm md:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
