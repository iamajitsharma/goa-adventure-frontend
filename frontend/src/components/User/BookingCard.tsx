import React from "react";
import { FiMapPin, FiCheckCircle } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlinePending } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const BookingCard = ({ item }: any) => {
  const statusHandler = () => {
    switch (item.status) {
      case "Complete":
        return (
          <span className="inline-flex items-center gap-1 text-green-500">
            <FiCheckCircle />
            Complete
          </span>
        );
        break;
      case "Refunded":
        return (
          <span className="inline-flex items-center gap-1 text-blue-500">
            <HiOutlineReceiptRefund />
            Refunded
          </span>
        );
        break;
      case "Canceled":
        return (
          <span className="inline-flex items-center gap-1 text-red-500">
            <RxCrossCircled />
            Cancelled
          </span>
        );
      case "Pending":
        return (
          <span className="inline-flex items-center gap-1 text-amber-500">
            <MdOutlinePending />
            Pending
          </span>
        );
    }
  };

  return (
    <div className="shadow-4xl bg-white rounded-md w-full my-4 flex flex-row items-center gap-2 p-2 font-poppins">
      <div className="flex flex-col items-center justify-center bg-white shadow-4xl p-1 w-20 h-20 rounded-md font-semibold">
        <span className="text-base">Jan</span>
        <span className="text-2xl text-primary">01</span>
        <span>2023</span>
      </div>
      <div className="w-full flex flex-col">
        <h3 className="text-base font-semibold text-neutral-700">
          {item.title}
        </h3>
        <div className="flex flex-row gap-3 text-sm text-gray-500 font-semibold md:font-medium py-2">
          <span className="inline-flex items-center gap-2">
            <FiMapPin />
            Goa India
          </span>
          <div className="flex items-center gap-2">{statusHandler()}</div>
        </div>
        <span className="text-sm text-gray-500 font-medium self-end">
          {item.bookingDate}
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
