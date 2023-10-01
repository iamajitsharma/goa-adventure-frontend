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
import Link from "next/link";

const CompanyDetails = () => {
  return (
    <div className="font-poppins">
      <FooterTitle title={"Reach Us"} />
      <div className="flex flex-col gap-4 mt-4">
        <h4 className="font-poppins text-base font-semibold text-neutral-700">
          Safar Travel Express
        </h4>
        <Link href={"tel:+917387960861"}>
          <span className="flex flex-row gap-2 items-center  text-sm font-medium tracking-wider text-neutral-700">
            <MdLocalPhone fontSize={24} />
            +91 7387960861
          </span>
        </Link>
        <Link href={"tel:+918237060861"}>
          <span className="flex flex-row gap-2 items-center  text-sm font-medium tracking-wider text-neutral-700">
            <MdLocalPhone fontSize={24} />
            +91 8237060861
          </span>
        </Link>
        <Link href={"mailto:info@goaadventure.in"}>
          <span className="flex flex-row gap-2 items-center text-sm font-medium tracking-wider text-neutral-700">
            <MdEmail fontSize={24} />
            info@goaadventure.in
          </span>
        </Link>
        <span className="flex flex-row gap-2 items-center text-sm font-medium tracking-wider text-neutral-700">
          <MdLocationOn fontSize={24} />
          Car Parking Calngute Beach Goa 403516
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
