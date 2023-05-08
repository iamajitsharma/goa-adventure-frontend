import React from "react";
import Link from "next/link";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import {
  SlSocialYoutube,
  SlSocialTwitter,
  SlLocationPin,
} from "react-icons/sl";
import FooterTitle from "./FooterTitle";

const FooterSubscribe = () => {
  return (
    <div className="pt-2 mx-auto">
      <div>
        <h4 className="text-slate-700 font-medium">
          Subscribe our newsletter to get discount upto 50%
        </h4>
      </div>
      <div
        className="relative
       flex flex-row bg-white shadow-lg max-w-sm p-2 rounded-md mt-4"
      >
        <input
          type="text"
          className="w-full border-none focus:ring-0 text-base"
          placeholder="Enter your email address"
        />
        <button
          className="
        absolute
        right-0
        top-0
        p-2
        text-white
        bg-orange-500
        h-full
        rounded-r-md
        
        "
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <div className="py-4">
        <FooterTitle title="Follow Us" />
        <ul className="flex flex-row gap-4 items-center text-gray-500">
          <li>
            <Link href="#">
              <AiOutlineFacebook fontSize={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <RiInstagramLine fontSize={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <SlSocialYoutube fontSize={30} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <SlSocialTwitter fontSize={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSubscribe;
