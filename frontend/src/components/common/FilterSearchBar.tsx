import { BsSearch } from "react-icons/bs";
import Select from "react-dropdown-select";
import { RxCross1 } from "react-icons/rx";

export default function FilterSearchBar() {
  const options = [
    { value: 0, label: "High Priority" },
    { value: 1, label: "High Relevance" },
    { value: 2, label: "High Ratings" },
  ];
  const onChange = () => {};

  return (
    <div className=" flex flex-row  h-[60px] bg-white rounded-full justify-between items-center px-6 mx-12 mt-6 drop-shadow-lg z-20">
      <div className="flex flex-row items-center ">
        <BsSearch />
        <input
          type="text"
          placeholder="Search..."
          className="border-none border-transparent focus:border-transparent focus:ring-0"
        />
        <RxCross1 />
        <div className="flex flex-row ml-10 mr-3 items-center">
          <span className="text-gray-400 text-sm">Sort By:</span>
          <div className="z-50 mx-4 rounded-md bg-gray-200 w-[200px] ">
            <Select options={options} onChange={(values) => onChange()} />
          </div>
        </div>
      </div>
      <div className="flex flex-row text-gray-400 text-sm">
        Showing 1-20 of 31 results
      </div>
    </div>
  );
}
