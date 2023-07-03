import React from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import TourImage from "../../../public/Things-To-Do1.png";

const ProductImages = () => {
  return (
    <div className="grid grid-cols-4 gap-1 items-center text-center justify-items-stretch md:min-h-full">
      <div className="object-cover w-full h-full">
        <Image
          src={TourImage}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="row-span-2 col-span-2 w-full h-full min-h-full bg-red-400">
        <ImageSlider />
      </div>
      <div className="">
        <Image
          src={TourImage}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="">
        <Image
          src={TourImage}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="">
        <Image
          src={TourImage}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProductImages;
