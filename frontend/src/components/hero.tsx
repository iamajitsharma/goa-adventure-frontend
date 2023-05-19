import { BsSearch } from "react-icons/bs";
import LocationMobileSlider from "./location/LocationMobileSlider";

const Hero = () => {
  return (
    <div className="relative bg-hero md:h-[70vh] h-[50vh] w-full bg-cover bg-center">
      <div className="flex flex-col justify-center h-full mx-auto gap-4 text-center max-w-2xl ">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Where you want to go?
        </h1>
        <div>
          <div className="flex flex-row gap-2 items-center bg-white p-1 md:p-2 md:max-5xl mx-2 md:mx-0 px-4 rounded-lg shadow-md">
            <BsSearch className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              id="search"
              placeholder="Search Destination Activity Tour"
              className="w-full focus:ring-0 border-none text-lg text-slate-700"
            />
          </div>
        </div>
        <LocationMobileSlider />
      </div>
    </div>
  );
};

export default Hero;
