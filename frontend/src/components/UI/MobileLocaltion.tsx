import React from "react";
import Image from "next/image";

interface MobileLocationProps {
  location?: string;
  image?: any;
  onClick?: () => void;
}

const MobileLocaltion: React.FC<MobileLocationProps> = ({
  location,
  image,
  onClick,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 font-poppins z-50">
        <Image src={image} alt="" />
        <span className="text-lg uppercase font-semibold tracking-wider text-variant">
          {location}
        </span>
      </div>
    </div>
  );
};

export default MobileLocaltion;
