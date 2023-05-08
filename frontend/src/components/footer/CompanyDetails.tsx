import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import visa from "../../../public/assets/paymentlogo/visa.png";
import master from "../../../public/assets/paymentlogo/master.png";
import paypal from "../../../public/assets/paymentlogo/paypal.png";
import americanexpress from "../../../public/assets/paymentlogo/americanexpress.png";
import gpay from "../../../public/assets/paymentlogo/gpay.png";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";

const CompanyDetails = () => {
  return (
    <div>
      <Image src={logo} alt="Goa Adventure" />
      <div className="flex flex-col gap-4 mt-4">
        <span className="flex flex-row gap-2 items-center text-sm font-medium text-gray-500">
          <MdLocalPhone fontSize={20} />
          +91 7387387386
        </span>

        <span className="flex flex-row gap-2 items-center text-sm font-medium text-gray-500">
          <MdEmail fontSize={20} />
          choiceyourtrip@gmail.com
        </span>
        <span className="flex flex-row gap-2 items-center text-sm font-medium text-gray-500">
          <MdLocationOn fontSize={20} />
          Calangute Umta Vado Goa 503415
        </span>
      </div>

      <div className="pt-4">
        <span className="text-sm text-center font-medium text-gray-500">
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
