import React from "react";
import Image from "next/image";

interface LocationSliderProps {
  image?: any;
  location?: String;
}

const LocationSlider: React.FC<LocationSliderProps> = ({ image, location }) => {
  return (
    <div className="relativ">
      <Image
        src={image}
        width={220}
        height={300}
        alt="Location"
        className="rounded-3xl"
      />
      <div className="absolute bottom-0 pb-4">
        <h4 className="text-base font-medium text-slate-700">{location}</h4>
      </div>
    </div>
  );
};

export default LocationSlider;
