import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import visa from "../../../public/assets/paymentlogo/visa.png";
import master from "../../../public/assets/paymentlogo/master.png";
import paypal from "../../../public/assets/paymentlogo/paypal.png";
import americanexpress from "../../../public/assets/paymentlogo/americanexpress.png";
import gpay from "../../../public/assets/paymentlogo/gpay.png";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import FooterTitle from "./FooterTitle";

const CompanyDetails = () => {
  return (
    <div className="font-poppins">
      <FooterTitle title={"Reach Us"} />
      <div className="flex flex-col gap-4 mt-4">
        <span className="flex flex-row gap-2 items-center text-base font-medium text-neutral-700">
          <MdLocalPhone fontSize={24} />
          +91 7387960861
        </span>

        <span className="flex flex-row gap-2 items-center text-base font-medium text-neutral-700">
          <MdEmail fontSize={24} />
          choiceyourtrip@gmail.com
        </span>
        <span className="flex flex-row gap-2 items-center text-base font-medium text-neutral-700">
          <MdLocationOn fontSize={24} />
          Calangute Umta Vado Goa 503415
        </span>
      </div>

      <div className="pt-4">
        <span className="text-base text-center font-semibold text-neutral-700">
          Payment we accept
        </span>
        <div className="flex flex-row gap-2 justify-center items-center pt-2 md:justify-start">
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

export default CompanyDetails;
