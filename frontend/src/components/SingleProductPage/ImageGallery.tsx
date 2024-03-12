import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Modal from "../modals/Modal";
import useGalleryModal from "@/hook/useGalleryModal";
import { useSelector } from "react-redux";
import RightArrowAlt from "../UI/RightArrowAlt";
import LeftArrowAlt from "../UI/LeftArrowAlt";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import { urlForImage } from "@/lib/client";

interface imageGalleryProps {
  galleryImg?: any;
  isOpen: boolean;
  onClose: () => void;
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  fade: true,
  pauseOnHover: true,
  nextArrow: <RightArrowAlt />,
  prevArrow: <LeftArrowAlt />,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
};

const ImageGallery: React.FC<imageGalleryProps> = ({
  galleryImg,
  isOpen,
  onClose,
}) => {
  const [showGallery, setShowGallery] = useState(isOpen);

  // Add a useEffect to toggle the class when the modal opens or closes
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed w-screen h-screen bg-neutral-800/70 inset-0 flex justify-center items-center z-[100] cursor-pointer overflow-y-hidden">
      <motion.div
        className={`max-w-4xl overflow-hidden shadow-xl z-[999] bg-white w-full relative transform transition ease-in-out duration-700 scale-75 `}
        whileInView={{ scale: 1 }}
      >
        <Slider {...settings}>
          {galleryImg?.map((img: any) => (
            <Image
              src={urlForImage(img)}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          ))}
        </Slider>
        <motion.span
          className="bg-primary text-white w-10 h-10 absolute flex items-center justify-center right-1 top-1 text-xl rounded-full shadow-md hover:bg-black hover:text-white transition  ease-in-out duration-300 cursor-pointer"
          whileTap={{ scale: 1.5 }}
          onClick={onClose}
        >
          <TfiClose />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ImageGallery;
