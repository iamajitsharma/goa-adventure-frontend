import React from "react";
import { AiFillStar } from "react-icons/ai";

const DestinationCard = () => {
  return (
    <div className="w-6/12 md:w-3/12 lg:w-3/12 flex flex-col items-center ">
      <div className="w-full rounded-3xl bg-white shadow-md">
        <img
          src="/assets/location.jpg"
          alt=""
          className="max-h-[275px] w-full h-full object-cover rounded-t-3xl"
        />

        <div className="w-full py-4 px-3 font-poppins">
          <div className="font-semibold  text-base">
            <h4>North Goa</h4>
          </div>
          <div className="flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-1 text-primary text-lg py-2">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span className="text-gray-300/80">
                <AiFillStar />
              </span>
            </div>
            <div className="text-primary font-semibold text-base tracking-wide">
              Rs12900
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
