import Index from "@/pages";
import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const destinationList = [
  "Andhra Pradesh",
  "Himachal Pradesh",
  "Delhi",
  "Mumbai",
  "Goa",
  "Kolkata",
  "Kerala",
  "Bangalore",
  "Pune",
  "Punjab",
  "Madhya Pradesh",
  "Rajasthan",
];
const DestinationListItems = () => {
  return (
    <div className="border-r border-gray-400">
      <h4 className="text-base font-semibold tracking-wide px-2 py-2 text-neutral-700">
        Destination
      </h4>
      <div>
        <ul className="p-2">
          {destinationList.map((item: any, index: any) => (
            <li
              key={index}
              className="flex items-center gap-2 text-base text-neutral-700 hover:bg-gray-200 p-2 w-full"
            >
              <MdOutlineCheckBoxOutlineBlank />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationListItems;
