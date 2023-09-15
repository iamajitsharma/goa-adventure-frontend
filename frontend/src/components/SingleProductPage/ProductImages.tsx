import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import FallbackImage from "../../../public/assets/fallback_Artboard 1.svg";
import RightArrowAlt from "../UI/RightArrowAlt";
import LeftArrowAlt from "../UI/LeftArrowAlt";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  nextArrow: <RightArrowAlt />,
  prevArrow: <LeftArrowAlt />,
  speed: 500,
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
  console.log(galleryImage);
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1 w-full h-full overflow-hidden">
      <div className="hidden transition-all ease-in-out md:block overflow-hidden">
        <Image
          src={featuredImage}
          alt="2"
          className="object-fill w-full h-full"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className="hidden transition-all ease-in-out md:block col-start-1 row-start-2 overflow-hidden">
        <Image
          src={galleryImage[0]}
          alt="2"
          className="object-fill w-full h-full"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className="col-span-3 row-span-2 col-start-1 row-start-1 h-full md:col-start-2 md:col-span-2 relative overflow-hidden">
        <Slider {...settings}>
          {galleryImage?.map((item: any, index: any) => (
            <Image
              key={index}
              src={item}
              alt="Dudhsagar Waterfall"
              className="object-fill w-full h-full"
              width="0"
              height="0"
              sizes="100vw"
            />
          ))}
        </Slider>
      </div>
      <div className="col-start-4 row-start-1">
        <Image
          src={galleryImage[1]}
          alt="2"
          className="object-fill w-full h-full"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className="col-start-4 row-start-2">
        <Image
          src={galleryImage[2]}
          alt="2"
          className="object-fill w-full h-full"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default ProductImages;
