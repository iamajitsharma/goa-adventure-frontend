import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

interface ReviewProps {
  item?: any;
}

const ReviewCard: React.FC<ReviewProps> = ({ item: any }) => {
  return (
    <div className="relative bg-white shadow-lg p-4 w-full h-[200px] rounded-lg font-poppins">
      <span className="absolute right-4 -top-4 font-merri text-4xl text-primary">
        <RiDoubleQuotesR />
      </span>
      <div className="flex items-center gap-5">
        <img
          src="/assets/placeholder.jpg"
          alt=""
          className="rounded-full w-16 h-16"
        />
        <div>
          <h5 className="font-semibold text-base text-variant">Ajit Sharma</h5>
          <span className="text-base text-gray-500">Goa India</span>
        </div>
      </div>
      <p className="py-2 text-sm text-gray-500 overflow-ellipsis overflow-hidden whitespace-pre-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      </p>
    </div>
  );
};

export default ReviewCard;
