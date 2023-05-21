import FilterTitle from "./FilterTitle";
import FilterCheckBox from "./FilterCheckBox";

import FilterLine from "./FilterLine";
import { RxCross1 } from "react-icons/rx";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-dropdown-select";
export default function FilterComponents() {
  const locationData = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Bengaluru",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Delhi",
    "Mumbai",
    "Kolkata",
  ];
  const duration = ["0-2 Hours", "2-5 Hours", "Full Day", "Multi Day"];
  return (
    <div className="bg-white drop-shadow-lg h-full w-[300px] rounde-md lg:flex lg:flex-col hidden my-8 rounded-2xl pt-2 pb-8 ">
      <div className="flex flex-row justify-between px-4 pt-3 pb-2">
        <button className="text-black  px-4 py-1 rounded-md font-semibold">
          Filter
        </button>
        <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
          Reset
        </button>
      </div>
      <FilterLine />

      <FilterCheckBox label="Instant Booking" />
      <FilterCheckBox label="Safar Guarantee" />
      <FilterTitle title="Destinations" />
      {locationData.map((loc) => (
        <FilterCheckBox label={loc} />
      ))}

      <div className="text-orange-500 font-semibold mx-6 my-2 cursor-pointer">
        Load More...
      </div>
      <FilterTitle title="Tour Type" />
      <FilterCheckBox label="Activities" />
      <FilterCheckBox label="Tour" />
      <FilterTitle title="Categories" />
      {locationData.map((loc) => (
        <FilterCheckBox label={loc} />
      ))}
      <FilterTitle title="Duration " />
      {duration.map((loc) => (
        <FilterCheckBox label={loc} />
      ))}
    </div>
  );
}
