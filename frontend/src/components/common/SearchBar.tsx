import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex flex-row gap-2 items-center bg-white md:max-w-3xl w-full rounded-lg shadow-3xl mt-4 font-poppins py-1 md:py-2 px-2 relative">
      <input
        type="text"
        id="search"
        placeholder="Search Destination Activity Tour"
        className="w-full focus:ring-0 border-none text-lg text-neutral-800 font-medium"
      />
      <button className="bg-secondary text-white p-3 rounded-md">
        <BsSearch className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
