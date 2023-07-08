import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/assets/cover.jpeg";
import BeachImage from "../../../public/assets/images/beach.jpeg";
import SearchBar from "../common/SearchBar";
import LocationMobileSlider from "../location/LocationMobileSlider";
import MobileCategorySlider from "../Category/MobileCategorySlider";

const MobileHero = () => {
  return (
    <div className="w-screen h-[60vh] relative">
      <Image
        src={BeachImage}
        alt="Goa Adventure"
        className="object-cover w-full h-full drop-shadow-md rounded-b-[3rem]"
      />
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-lightOverlay rounded-b-[3rem]">
        <div className="absolute inset-0 w-full h-full flex items-center justify-between gap-0">
          <div className="w-full text-center px-3 font-poppins">
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              Where do you want to go?
            </h1>

            <SearchBar />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 z-50 w-full h-auto">
        <MobileCategorySlider />
      </div>
    </div>
  );
};

export default MobileHero;
