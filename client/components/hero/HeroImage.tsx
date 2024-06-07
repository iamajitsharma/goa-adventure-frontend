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
    <div className="w-full h-[450px] lg:h-[550px] overflow-hidden">
      <div className="absolute top-0 w-full h-[450px] lg:h-[550px] z-10">
        <Image
          src={image ? image : "/images/beach.jpeg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-30 z-20 h-[450px] lg:h-[550px] rounded-b-3xl" />
      <div className="px-2 absolute inset-0 flex flex-col h-[450px] lg:h-[550px] items-center justify-center z-30 text-white">
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
            <p className="text-lg py-2 text-white">Explore. Dream. Discover.</p>
          )}
        </div>
        <SearchBar className="rounded-full" />
      </div>
    </div>
  );
};

export default HeroImage;

{
  /* <div className="relative w-full h-full">
  <div className="w-full h-full flex flex-col justify-center items-center">
    <div className="font-roboto text-center">
      <h1 className="text-2xl md:text-5xl font-bold text-white">
        Go where you feel most <span className="text-orange-500">alive</span>
      </h1>
      <p className="text-lg py-2 text-white">Explore. Dream. Discover.</p>
    </div>
    <SearchBar className="rounded-full" />
  </div>
</div>; */
}
