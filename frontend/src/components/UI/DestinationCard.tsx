import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LocationImage from "../../../public/assets/location.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

interface DestinationCardProps {
  state?: string;
  country: string;
  lowestPrice?: number;
  image?: any;
  review?: any;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  state,
  country,
  lowestPrice,
  image,
  review,
}) => {
  const router = useRouter();
  console.log("Image received", image);

  //Navigation To Location
  const navigationHandler = (country: any, location: any) => {
    const locationNav = location.replace(" ", "-").toLowerCase();
    const countryNav = country.toLowerCase();

    router.push(`/destination/${countryNav}/${locationNav}`);
  };

  return (
    <div
      className="max-w-xs w-[95%] md:w-[84%] max-h-min h-full bg-white border border-gray-200 rounded-xl overflow-hidden drop-shadow-sm shadow-sm mx-auto font-poppins cursor-pointer"
      onClick={() => router.push(`/destination/${country}/${state}`)}
    >
      <div className="shrink-0 w-full h-40 overflow-hidden">
        <Image
          src={image}
          alt="Tour"
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="p-2 w-full flex flex-col justify-between gap-4 bg-white overflow-hidden ">
        <h4 className="text-sm lg:text-base text-variant tracking-wider font-semibold">
          {state}
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-0">
            <span className="flex items-center text-sm md:text-base text-primary">
              {[0, 1, 2, 3].map((item, index) => (
                <AiFillStar key={index} />
              ))}
            </span>
            <span className="text-sm md:text-base text-neutral-500">
              <AiOutlineStar />
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="self-end text-xs font-medium tracking-wider text-variant">
              Starting from
            </span>
            <span className="text-sm md:text-base font-semibold text-primary inline-flex items-center tracking-wider">
              <BsCurrencyRupee />
              {lowestPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
