import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";
import FooterTitle from "./FooterTitle";
import visa from "../../../public/assets/paymentlogo/visa.png";
import master from "../../../public/assets/paymentlogo/master.png";
import paypal from "../../../public/assets/paymentlogo/paypal.png";
import americanexpress from "../../../public/assets/paymentlogo/americanexpress.png";
import gpay from "../../../public/assets/paymentlogo/gpay.png";

const FooterSocials = () => {
  return (
    <div>
      <Image src={logo} alt="Goa Adventure" />
      <div className="py-4">
        <FooterTitle title="Follow Us" />
        <ul className="flex flex-row gap-4 items-center text-gray-50/80">
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
      <div className="pt-4">
        <span className="text-base text-gray-300/80">Payment we accept</span>
        <div className="flex flex-row gap-2 items-center pt-2">
          <div className="p-1 bg-white rounded-md">
            <Image src={visa} alt="visa" />
          </div>
          <div className="p-1 bg-white rounded-md">
            <Image src={master} alt="visa" />
          </div>
          <div className="p-1 bg-white rounded-md">
            <Image src={paypal} alt="visa" />
          </div>
          <div className="p-1 bg-white rounded-md">
            <Image src={americanexpress} alt="visa" />
          </div>
          <div className="p-1 bg-white rounded-md">
            <Image src={gpay} alt="visa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;
