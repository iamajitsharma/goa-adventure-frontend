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
export default function TourInfo(tourData: any) {
  console.log("Title received", tourData);
  tourData = tourData.tourData;

  switch (tourData.status) {
    case "Complete":
      tourData.color = "text-green-500";
      tourData.logo = <BiCheckCircle />;
      break;
    case "Pending":
      tourData.color = "text-yellow-500";
      tourData.logo = <MdOutlinePending />;
      break;
    case "Canceled":
      tourData.color = "text-red-500";
      tourData.logo = <RxCrossCircled />;
      break;
    case "Refunded":
      tourData.color = "text-blue-600";
      tourData.logo = <HiOutlineReceiptRefund />;
      break;
  }
  return (
    <>
      <div className="px-4 flex flex-col ">
        <div className="text-lg">{tourData.title}</div>
        <div className="flex flex-row items-center mt-3 mb-2">
          <div className="flex flex-row items-center mt-3 mb-2">
            <span className="text-gray-400">
              <HiOutlineLocationMarker />
            </span>
            <span className="mr-4 ml-1 text-gray-400">
              {tourData.state}
              {", "}
              {tourData.country}
            </span>
          </div>
          <div
            className={`flex flex-row items-center mt-3 mb-2 ${
              tourData.color ? tourData.color : ""
            }`}
          >
            <span className="ml-4">{tourData.logo}</span>
            <span className="ml-1">{tourData.status}</span>
          </div>
        </div>
        <div className="flex justify-end text-xs">{tourData.bookingDate}</div>
      </div>
    </>
  );
}
