import SearchBar from "components/common/SearchBar";
import Image from "next/image";
import React from "react";

interface HeroImageProps {
  image?: any;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
}

const HeroImage: React.FC<HeroImageProps> = ({ image, title, subTitle }) => {
  return (
    <div className="overflow-hidden w-full h-[450px] lg:h-[550px]">
      <div className="absolute flex justify-center items-center inset-x-0 top-0 w-full h-[450px] lg:h-[550px] z-10">
        <Image
          src={image ? image : "/images/beach.jpeg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30 z-20 h-full rounded-b-3xl" />
        <div className="z-20 ">
          <div className="font-roboto text-center">
            {title ? (
              title
            ) : (
              <h1 className="text-2xl md:text-5xl font-bold text-white">
                Go where you feel most{" "}
                <span className="text-orange-500">alive</span>
              </h1>
            )}

            {subTitle ? (
              subTitle
            ) : (
              <p className="text-lg py-2 text-white">
                Explore. Dream. Discover.
              </p>
            )}
          </div>
          <SearchBar className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
