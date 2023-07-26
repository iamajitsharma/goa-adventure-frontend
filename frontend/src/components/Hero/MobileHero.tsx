import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/assets/cover.jpeg";
import BeachImage from "../../../public/assets/images/beach.jpeg";
import SearchBar from "../common/SearchBar";
// import LocationMobileSlider from "../location/LocationMobileSlider";
import MobileCategorySlider from "../Category/MobileCategorySlider";

const MobileHero = () => {
  return (
    <div className="block md:hidden w-full h-[70vh] z-0 ">
      <Image
        src={BeachImage}
        alt=""
        className="object-cover absolute top-0 left-0 right-0 w-full h-[70vh] overflow-hidden rounded-b-[3rem]"
      />
      <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-lightOverlay z-[2] w-full h-[70vh] px-4 rounded-b-[3rem]">
        <div className="w-full text-center px-3 font-poppins">
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            Where do you want to go?
          </h1>

          <SearchBar />
        </div>
        <div className="absolute -bottom-12 z-50 w-full h-auto">
          <MobileCategorySlider />
        </div>
      </div>
    </div>
  );
};

export default MobileHero;

// <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-lightOverlay rounded-b-[3rem]"></div>;
