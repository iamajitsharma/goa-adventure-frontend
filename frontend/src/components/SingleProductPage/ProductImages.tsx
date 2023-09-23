import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import FallbackImage from "../../../public/assets/fallback_Artboard 1.svg";
import RightArrowAlt from "../UI/RightArrowAlt";
import LeftArrowAlt from "../UI/LeftArrowAlt";
import fallback from "../../../public/fallback-image.jpg";

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
  featuredImage?: string | any;
  galleryImage: string[];
}

const ProductImages: React.FC<ProductImageProps> = ({
  featuredImage,
  galleryImage,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1 w-full max-h-[450px] h-auto overflow-hidden">
      <div className="hidden transition-all ease-in-out md:block overflow-hidden">
        <Image
          src={featuredImage || "/assets/fallback.png"}
          alt="2"
          className={`object-fill w-full h-full duration-700 ease-in-out group-hover:opacity-75 
          ${
            isLoading
              ? "scale-110 blur-lg backdrop-blur-sm"
              : "scale-100 blur-0 backdrop-blur-none"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
          width={975}
          height={600}
        />
      </div>
      <div className="hidden transition-all ease-in-out md:block col-start-1 row-start-2 overflow-hidden h-full">
        <Image
          src={galleryImage[0] || "/assets/fallback.png"}
          alt="2"
          className={`object-fill w-full h-full duration-700 ease-in-out group-hover:opacity-75 
          ${
            isLoading
              ? "scale-110 blur-lg backdrop-blur-sm"
              : "scale-100 blur-0 backdrop-blur-none"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
          width={975}
          height={600}
        />
      </div>
      <div className="col-span-3 row-span-2 col-start-1 row-start-1 md:col-start-2 md:col-span-2 relative h-full">
        <Slider {...settings}>
          {galleryImage?.map((item: any, index: any) => (
            <Image
              key={index}
              src={item || "/assets/fallback.png"}
              alt="Dudhsagar Waterfall"
              className={`object-fill w-full h-full duration-700 ease-in-out group-hover:opacity-75 
          ${
            isLoading
              ? "scale-110 blur-lg grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
              onLoadingComplete={() => setIsLoading(false)}
              width={975}
              height={600}
            />
          ))}
        </Slider>
        <style>
          {`
         .slick-track {display: flex;}
         .slick-track .slick-slide {display: flex;height: auto;}
         .slick-slide img {height: 100%;object-fit: cover;object-position: center;}
        `}
        </style>
      </div>
      <div className="col-start-4 row-start-1">
        <Image
          src={galleryImage[1] || "/assets/fallback.png"}
          alt="2"
          className={`object-fill w-full h-full duration-700 ease-in-out group-hover:opacity-75 
          ${
            isLoading
              ? "scale-110 blur-lg backdrop-blur-sm"
              : "scale-100 blur-0 backdrop-blur-none"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
          width={975}
          height={600}
        />
      </div>
      <div className="col-start-4 row-start-2">
        <Image
          src={galleryImage[2] || "/assets/fallback.png"}
          alt="2"
          className={`object-fill w-full h-full duration-700 ease-in-out group-hover:opacity-75 
          ${
            isLoading
              ? "scale-110 blur-lg backdrop-blur-sm"
              : "scale-100 blur-0 backdrop-blur-none"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
          width={975}
          height={600}
          onError={handleImageError}
        />
      </div>
    </div>
  );
};

export default ProductImages;
