import { useState, useEffect } from "react";
import { FiMapPin, FiCheckCircle } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlinePending } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { dateFormatChange } from "@/lib/operations";
import { getProductById } from "@/lib/api";
import { BsDownload, BsPinMap, BsClock, BsCurrencyRupee } from "react-icons/bs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { Button } from "../common/Button";
import { IoIosArrowDown } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

interface Item {
  product_id: number;
  productTitle?: string;
  destination_location: string;
  createdAt: string;
  invoice: any;
  meeting_point: string | null;
  total_seat: string | number;
  booking_status: number;
  start_date: string;
}

const BookingCard = ({ item }: any) => {
  const [product, setProduct] = useState<Item | null>(null);
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  const statusHandler = (status: any) => {
    switch (status) {
      case 0:
        return (
          <span className="inline-flex items-center gap-1 text-amber-500">
            <MdOutlinePending />
            Pending
          </span>
        );
      case 1:
        return (
          <span className="inline-flex items-center gap-1 text-green-500">
            <FiCheckCircle />
            Complete
          </span>
        );
        break;

      case 2:
        return (
          <span className="inline-flex items-center gap-1 text-red-500">
            <RxCrossCircled />
            Cancelled
          </span>
        );
      case 3:
        return (
          <span className="inline-flex items-center gap-1 text-blue-500">
            <HiOutlineReceiptRefund />
            Refunded
          </span>
        );
        break;
    }
  };

  console.log("Booking Card", item);

  //Date Format
  const dateInfo = dateFormatChange(item.start_date);

  return (
    <>
      {item ? (
        <div className="w-full my-4 p-2 relative bg-white shadow-3xl rounded-md font-poppins">
          {/* DateSection */}
          <div className="flex flex-row gap-2">
            <div className="flex flex-col items-center justify-center  shadow-4xl p-1 w-20 h-20 rounded-md font-semibold">
              <span className="text-sm md:text-base">{dateInfo.month}</span>
              <span className="text-xl md:text-2xl text-primary">
                {dateInfo.day}
              </span>
              <span className="text-sm md:text-base">{dateInfo.year}</span>
            </div>

            <div className="flex flex-col justify-between  w-full">
              <h3 className="text-sm sm:text-lg font-semibold text-neutral-700">
                {item.title}
              </h3>
              <div className="flex flex-row items-center w-full justify-between gap-3 text-sm text-gray-500 font-semibold md:font-medium py-2">
                <div className="flex items-center w-full gap-4 ">
                  <span className="hidden sm:block text-sm text-gray-500 font-medium transition ease-in duration-200">
                    Booked On:{" "}
                    {dateFormatChange(item.booking_date).formattedDate}
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm text-neutral-700">
                    <FiUsers className="text-primary text-lg" />{" "}
                    {item.total_seat}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-neutral-700">
                    {/* Display Status  */}
                    {statusHandler(item.booking_status)}
                  </span>
                </div>
                <motion.span
                  className="bg-primary text-white p-2 rounded-full shadow-md cursor-pointer self-end"
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={toggleHandler}
                >
                  {isActive ? (
                    <IoIosArrowDown
                      className={`text-xl ${
                        isActive ? "rotate-180" : "rotate-0"
                      } transition duration-500`}
                    />
                  ) : (
                    <IoIosArrowDown className=" text-xl transition duration-500" />
                  )}
                </motion.span>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="grid grid-cols-3  content-center gap-4 py-4 transition-all ease-in duration-300">
                  <div className="flex flex-col justify-center items-center">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                      <FiMapPin />
                      Destination
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-neutral-800">
                      {item.destination_location}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                      <BsPinMap />
                      Meeting Point
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-neutral-800">
                      {item.meeting_point}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                      <BsClock />
                      Reporting
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-neutral-800">
                      {item.reporting_time}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                      <BsCurrencyRupee />
                      Total Amount
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-neutral-800">
                      {item.total_amount}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                      <BsCurrencyRupee />
                      Deposit
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-neutral-800">
                      {item.deposit_amount}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-500">
                      <BsCurrencyRupee />
                      Pending
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-neutral-800">
                      {item.pending_amount}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="flex gap-2 justify-end w-full transition duration-600 ease-in"
                  variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
                  transition={{ duration: 0.8 }}
                >
                  <Button variant="outline" href={item.invoice} target="_blank">
                    Download Invoice
                  </Button>

                  <Button variant="outline">Cancel</Button>
                </motion.div>
                <div className="pt-2 text-end sm:hidden ">
                  <span className="text-sm text-gray-500 font-medium transition ease-in duration-200">
                    Booked On:{" "}
                    {dateFormatChange(item.booking_date).formattedDate}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Skeleton className="w-full h-24" />
      )}
    </>
  );
};

export default BookingCard;
