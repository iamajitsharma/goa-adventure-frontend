import React from "react";
import ListingCard from "../../components/listings/ListingCard";
import Image from "next/image";
import ActivityCover from "../../../public/assets/activityCover.png";
import Container from "../../components/common/Container";
import FilterCheckBox from "../../components/common/FIlterCheckBox";
import ActivityData from "../../data/ActivityData.ts";
import { BsSearch } from "react-icons/bs";
import FilterTitle from "../../components/common/FilterTitle";
import FilterLine from "../../components/common/FilterLine";
import { RxCross1 } from "react-icons/rx";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-dropdown-select";

const index = () => {
  const location = [
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
  const options = [
    { value: 0, label: "High Priority" },
    { value: 1, label: "High Relevance" },
    { value: 2, label: "High Ratings" },
  ];
  const onChange = () => {};
  const defaultOption = options[0];

  return (
    <section className="">
      <div className="relative h-[300px]">
        <Image
          src={ActivityCover}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute top-1/2 text-center w-full">
          <h2 className="text-4xl text-white font-bold">Things To Do</h2>
        </div>
      </div>
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
            <div className="z-50 mx-4 rounded-full bg-gray-200 w-[200px] z-50 ">
              <Select
                options={options}
                onChange={(values) => onClick()}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <Container className="flex flex-row justify-center">
        <div className="bg-white drop-shadow-lg h-full w-[300px] rounde-md flex flex-col my-8 rounded-2xl pt-2 pb-8">
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
          {location.map((loc) => (
            <FilterCheckBox label={loc} />
          ))}

          <div className="text-orange-500 font-semibold mx-6 my-2 cursor-pointer">
            Load More...
          </div>
          <FilterTitle title="Tour Type" />
          <FilterCheckBox label="Activities" />
          <FilterCheckBox label="Tour" />
          <FilterTitle title="Categories" />
          {location.map((loc) => (
            <FilterCheckBox label={loc} />
          ))}
          <FilterTitle title="Duration " />
          {duration.map((loc) => (
            <FilterCheckBox label={loc} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-3 md:gap-0 md:max-w-7xl  py-8">
          {ActivityData?.map((item) => (
            <ListingCard
              key={item.id}
              title={item.title}
              image={item.images[0].image}
              salePrice={item.salePrice}
              regularPrice={item.regularPrice}
              href={`/activity/${item.id}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default index;
