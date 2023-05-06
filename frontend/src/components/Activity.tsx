import React from "react";
import Image from "next/image";
import TourCardImg from "../../public/assets/tourcard.jpeg";

export default function ActivityCard() {
  return (
    <div className="card">
      <Image
        src={TourCardImg}
        alt="Tour"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
