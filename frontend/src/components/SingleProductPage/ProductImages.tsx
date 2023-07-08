import React from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import TourImage from "../../../public/Things-To-Do1.png";

const ProductImages = () => {
  return (
    <div className="grid grid-cols-3 gap-2 w-full h-full transition-all ease-in-out duration-200 md:grid-cols-4">
      <div className="">
        <Image src={TourImage} alt="1" className="object-cover w-full h-full" />
      </div>
      <div className="row-span-2 col-span-2 h-full">
        <ImageSlider />
      </div>
      <div className="">
        <Image src={TourImage} alt="2" className="object-cover w-full h-full" />
      </div>
      <div className="hidden md:grid ">
        <Image src={TourImage} alt="3" className="object-cover w-full h-full" />
      </div>
      <div className="hidden md:grid ">
        <Image src={TourImage} alt="4" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default ProductImages;
