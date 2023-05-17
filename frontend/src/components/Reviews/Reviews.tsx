import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface ReviewProps {
  src?: any;
  profileImg?: any;
  reviewer?: string;
  reviewDate?: string;
  reviewIcon?: IconType;
  review?: string;
}

const Reviews: React.FC<ReviewProps> = ({
  src,
  profileImg,
  reviewer,
  reviewDate,
  reviewIcon,
  review,
}) => {
  return (
    <div className="shadow-md p-4 bg-white rounded-md mt-4">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={profileImg}
          alt=""
          width={100}
          height={100}
          className="rounded-full shadow-md"
        />
        <div className="flex flex-col">
          <span className="font-medium text-textBlack">{reviewer}</span>
          <span className="text-gray-400">{reviewDate}</span>
          <span>
            <i className="ri-star-fill text-2xl text-yellow-400"></i>
            <i className="ri-star-fill text-2xl text-yellow-400"></i>
            <i className="ri-star-fill text-2xl text-yellow-400"></i>
            <i className="ri-star-fill text-2xl text-yellow-400"></i>
          </span>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-sm text-textBlack leading-loose">{review}</p>
      </div>
      <div className="flex flex-row items-center gap-4 pt-6">
        <img src={src} alt="" className="w-[100px] h-[100px] rounded-md" />
      </div>
    </div>
  );
};

export default Reviews;
