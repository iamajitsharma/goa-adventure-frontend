import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import locationImg from "../../../public/MobileSlider1.png";
import Image from "next/image";
import MobileLocaltion from "../UI/MobileLocaltion";
import adventureicon from "../../../public/assets/icons/Adventure_Icon.svg";
import heritageicon from "../../../public/assets/icons/Heritage_Icon.svg";
import hillstation from "../../../public/assets/icons/Hill_Station_Icon.svg";
import scubadivingicon from "../../../public/assets/icons/ScubaDiving_Icon.svg";
import { motion } from "framer-motion";

const categories = [
  { image: adventureicon, category: "Adventure" },
  { image: heritageicon, category: "Heritage" },
  { image: hillstation, category: "Hill Station" },
  { image: scubadivingicon, category: "Scuba Diving" },
  { image: hillstation, category: "Hill Station" },
  { image: scubadivingicon, category: "Scuba Diving" },
];

const MobileCategorySlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="">
        {categories.map((item, index) => (
          <MobileCategoryCard
            key={item.category}
            image={item.image}
            category={item.category}
          />
        ))}
      </Slider>
    </>
  );
};

export default MobileCategorySlider;

interface MobileCategoryCardProps {
  image?: any;
  category?: string;
}

export const MobileCategoryCard: React.FC<MobileCategoryCardProps> = ({
  image,
  category,
}) => {
  return (
    <div>
      <motion.div
        className="flex flex-col items-center justify-center gap-3 font-poppins z-50"
        whileTap={{ scale: 1.1 }}
      >
        <div className="w-14 h-14 bg-white shadow-md p-2 rounded-xl">
          <Image src={image} alt="" />
        </div>
        <span className="text-[.65rem] uppercase font-semibold tracking-wider text-neutral-800">
          {category}
        </span>
      </motion.div>
    </div>
  );
};
