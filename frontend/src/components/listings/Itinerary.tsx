import React from "react";

interface ItineraryProps {
  timeSlot?: string;
  itinerary?: string;
}

const Itinerary: React.FC<ItineraryProps> = ({ timeSlot, itinerary }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-8 p-4">
      <div className="text-white font-medium bg-variantColor py-2 px-2 max-w-[6rem] w-full text-center rounded-full ">
        {timeSlot}
      </div>
      <div className="font-medium text-base text-textBlack">{itinerary}</div>
    </div>
  );
};

export default Itinerary;
