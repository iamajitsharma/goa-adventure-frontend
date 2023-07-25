import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";

interface TourInterface {
  title: string;
  state: string;
  country: string;
  bookingDate: string;
  bookingStatus: string;
}
export default function WishInfo(tourData: any) {
  console.log("Title received", tourData?.bookingInfo);
  tourData = tourData?.tourData;

  return (
    <>
      <div className="px-4 flex flex-col ">
        <div className="text-lg">{tourData?.title}</div>
        <div className="flex flex-row items-center mb-1">
          <div className="flex flex-row items-center mt-3 mb-2">
            <span className="text-gray-400">
              <HiOutlineLocationMarker />
            </span>
            <span className="mr-4 ml-1 text-gray-400">
              {tourData?.state}
              {", "}
              {tourData?.country}
            </span>
          </div>
          <div
            className={`flex flex-row items-center mt-3 mb-2 ${
              tourData?.color ? tourData?.color : ""
            }`}
          >
            <span className="ml-4">{tourData?.icon}</span>
            <span className="ml-1">{tourData?.status}</span>
          </div>
        </div>
        <div className="flex justify-end text-xs text-gray-500">
          {"Added : "}
          {tourData?.bookingDate}
        </div>
      </div>
    </>
  );
}
