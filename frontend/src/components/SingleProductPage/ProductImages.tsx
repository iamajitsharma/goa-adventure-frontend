import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import FallbackImage from "../../../public/assets/fallback_Artboard 1.svg";
import RightArrowAlt from "../UI/RightArrowAlt";
import LeftArrowAlt from "../UI/LeftArrowAlt";
import fallback from "../../../public/fallback-image.jpg";
import useGalleryModal from "@/hook/useGalleryModal";
import ImageGallery from "./ImageGallery";
import { ImImages } from "react-icons/im";
import { useSelector } from "react-redux";
import { urlForImage } from "@/lib/client";

const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  fade: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  nextArrow: <RightArrowAlt />,
  prevArrow: <LeftArrowAlt />,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

interface ProductImageProps {
  images: string | any;
}

const ProductImages: React.FC<ProductImageProps> = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);
  const { openGallery, closeGallery, isOpenGallery } = useGalleryModal();

  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-center gap-0 h-80 md:h-[468px] overflow-hidden flex-nowrap">
          <div className="w-full h-full lg:w-3/5">
            <Image
              src={urlForImage(images && images[0])}
              alt=""
              width={975}
              height={600}
              className={`object-cover w-full h-full duration-700 ease-in-out bg-white/30
          ${
            isLoading
              ? "scale-110 blur-sm backdrop-blur-2xl "
              : "scale-100 blur-0 backdrop-blur-0"
          }
          `}
              onLoadingComplete={() => setIsLoading(false)}
              onClick={openGallery}
            />
          </div>
          <div className="hidden lg:grid grid-cols-2 w-2/5 gap-2 h-[468px] ml-2">
            {images &&
              images.slice(0, 4).map((item: any, index: number) => (
                <div className="relative" key={index}>
                  <Image
                    src={urlForImage(item)}
                    alt=""
                    className={`absolute top-0 left-0 object-cover w-full h-full  duration-700 ease-in-out group-hover:opacity-75  ${
                      isLoading
                        ? "scale-110 blur-sm backdrop-blur-2xl "
                        : "scale-100 blur-0 backdrop-blur-0"
                    }`}
                    width={975}
                    height={600}
                    onClick={openGallery}
                  />
                </div>
              ))}
          </div>
        </div>
        <span
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-neutral-800/60 text-white p-2 flex items-center justify-center gap-2 rounded-r-full px-4 text-lg cursor-pointer"
          onClick={openGallery}
        >
          Gallery
          <ImImages />
        </span>
      </div>
      <ImageGallery
        isOpen={isOpenGallery}
        onClose={closeGallery}
        galleryImg={images}
      />
    </>
  );
};

export default ProductImages;
