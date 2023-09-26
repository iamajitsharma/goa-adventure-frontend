import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Modal from "../modals/Modal";
import useGalleryModal from "@/hook/useGalleryModal";
import { useSelector } from "react-redux";
import RightArrowAlt from "../UI/RightArrowAlt";
import LeftArrowAlt from "../UI/LeftArrowAlt";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

interface imageGalleryProps {
  galleryImg?: any;
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  nextArrow: <RightArrowAlt />,
  prevArrow: <LeftArrowAlt />,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
};

const ImageGallery: React.FC<imageGalleryProps> = ({ galleryImg }) => {
  const isOpenGallery = useSelector((state: any) => state.gallery);
  const { openGallery, closeGallery } = useGalleryModal();

  return (
    <div
      className="fixed w-screen h-screen bg-neutral-800/70 inset-0 flex justify-center items-center z-[100] cursor-pointer"
      onClick={() => closeGallery()}
    >
      <div className="max-w-4xl overflow-hidden shadow-xl transition ease-in-out duration-300 z-[999] bg-white w-full relative ">
        <Slider {...settings}>
          {galleryImg?.map((img: any) => (
            <img src={img} alt="" />
          ))}
        </Slider>
        <motion.span
          className="bg-primary text-white w-10 h-10 absolute flex items-center justify-center right-1 top-1 text-xl rounded-full shadow-md hover:bg-black hover:text-white transition  ease-in-out duration-300 cursor-pointer"
          whileTap={{ scale: 1.5 }}
          onClick={() => closeGallery()}
        >
          <TfiClose />
        </motion.span>
      </div>
    </div>
  );
};

export default ImageGallery;
