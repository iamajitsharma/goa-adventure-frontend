import React from "react";
import Image from "next/image";
import cardImage from "../../../public/assets/Rectangle 32.png";
import { AiFillStar } from "react-icons/ai";
import { BsClock, BsPiggyBank } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { Button } from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import FallBackImage from "../../../public/assets/fallback_Artboard 1.svg";

interface ProductCardAltProps {
  item: any;
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

const ProductCardAlt: React.FC<ProductCardAltProps> = ({ item }) => {
  const isTable = useMediaQuery({ maxWidth: deviceSize.tablet });

  const originalPrice = parseFloat(item.price);
  const discountPercent = parseFloat(item.discount_percent);
  const salePrice = originalPrice - (originalPrice * discountPercent) / 100;

  //console.log("Product Card", item.gallery);
  return (
    <div className="w-full h-56 shadow-3xl bg-red-200 flex flex-row items-start gap-0 overflow-hidden rounded-lg">
      <div className="relative w-1/2 h-56 overflow-hidden">
        <Slider {...settings}>
          {item.gallery?.map((img: any, index: any) => (
            <Image
              src={img}
              key={index}
              alt=""
              className="object-fill w-full h-56"
              height={500}
              width={500}
            />
          ))}
        </Slider>
        <style>
          {`
         .slick-dots {
          bottom:5px !important;
          color:white !important;
          }
        `}
        </style>
      </div>
      <div className="w-full h-full flex flex-col px-2 py-1">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-700">
          {item.title}
        </h2>

        {/* Card Details */}
        <div className="flex flex-wrap gap-2 md:gap-4 py-2 md:py-4">
          <span className="flex items-center gap-2 text-xs md:text-sm">
            <FiMapPin className="text-primary text-xl" />
            {item.city} {item.state}
          </span>
          <span className="flex items-center gap-2 text-xs md:text-sm">
            <BsClock className="text-primary text-xl" />
            {item.duration}
          </span>
          <span className="flex items-center gap-2 text-xs md:text-sm">
            <AiFillStar className="text-primary text-xl" />
            4.5 Review
          </span>
        </div>

        {/* Card Features */}
        <div className="flex flex-col md:flex-row gap-2 py-1">
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
            Just pay {`${item.deposit_value}%`} to book seat
          </span>
        </div>
        {/* Card Pricing  */}
        <div className="flex items-end justify-between gap-0 w-full h-full py-2">
          <div className="flex flex-col-reverse md:flex-row items-center gap-1 ">
            <span className="flex items-center text-xs md:text-base line-through tracking-wider font-semibold text-neutral-400">
              <BiRupee className="text-base md:text-lg" />
              {item.price}
            </span>
            <span className="flex items-center text-lg sm:text-xl md:text-xl tracking-wider font-semibold text-primary">
              <BiRupee className="text-xl md:text-2xl" />
              {salePrice}
            </span>
          </div>
          <div className="">
            {isTable ? (
              <Button size={"sm"}>Book Now</Button>
            ) : (
              <Button size={"lg"}>Book Now</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAlt;
