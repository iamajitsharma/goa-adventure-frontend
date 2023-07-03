import React from "react";

import { motion } from "framer-motion";

const DestinationCard = () => {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-2xl flex items-end justify-center">
      <img
        src="/assets/location.jpg"
        alt="Location"
        className="top-0 left-0 h-full w-full object-cover filter brightness-100 transform scale-100 transition-all duration-300 ease-in-out overflow-hidden -z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-full rounded-xl z-0 bg-gradient-to-t from-blackOverlay to-transparent to-50%"></div>
      <span className="text-xl uppercase font-medium z-10 mb-5 text-center">
        Goa
      </span>
    </div>
  );
};

export default DestinationCard;
