import { BsSearch } from "react-icons/bs";
import Select from "react-dropdown-select";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

export default function FilterSearchBar() {
  const options = [
    { value: 0, label: "High Priority" },
    { value: 1, label: "High Relevance" },
    { value: 2, label: "High Ratings" },
  ];
  const onChange = () => {};

  return (
    <div className=" flex flex-col lg:flex-row  lg:h-[60px] bg-white rounded-full lg:justify-between justify-center items-center px-6 mx-12 mt-6 drop-shadow-lg z-20">
      <div className="lg:flex lg:flex-row hidden items-center ">
        <BsSearch />
        <input
          type="text"
          placeholder="Search..."
          className="border-none border-transparent focus:border-transparent focus:ring-0"
        />
        <RxCross1 />
        <div className="lg:flex lg:flex-row lg:ml-10 lg:mr-3 lg:items-center hidden">
          <span className="text-gray-400 text-sm">Sort By:</span>
          <div className="z-50 mx-4 rounded-md bg-gray-200 w-[200px] ">
            <Select options={options} onChange={(values) => onChange()} />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:text-gray-400 lg:text-sm hidden">
        Showing 1-20 of 31 results
      </div>
      {/* Mobile View */}
      {/* <div> */}
      <div className="lg:hidden flex flex-row items-center w-full justify-center">
        <div className="flex flex-row items-center justify-center w-1/2">
          <span className="px-2">Sort By</span>
          <AiOutlineSortAscending />
        </div>
        <div className="flex flex-row items-center justify-center w-1/2">
          <span className="px-2">Filter By</span>
          <BiFilterAlt />
        </div>
        {/* </div> */}
      </div>
      <div className="flex flex-row ml-10 mr-3 items-center w-10/12 justify-center my-5">
        <div className="z-50 mx-4 rounded-md bg-gray-200 w-3/5 ">
          <Select
            options={options}
            onChange={(values) => onChange()}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
