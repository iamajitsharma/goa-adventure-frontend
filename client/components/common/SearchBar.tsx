import { Search } from "lucide-react";

type SearchBarProps = {
  className?: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div
      className={`w-full md:max-w-xl flex flex-row gap-2 items-center bg-white shadow-3xl mt-4 overflow-hidden font-poppins py-1 md:py-2 px-2 relative ${className}`}
    >
      <input
        type="text"
        id="search"
        placeholder="Search Destination Activity Tour"
        className="w-full p-2 outline-none text-lg font-medium text-neutral-700"
      />
      <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
        <Search size={18} /> Find
      </button>
    </div>
  );
};

export default SearchBar;
