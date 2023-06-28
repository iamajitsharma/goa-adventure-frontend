import React from "react";
import Header from "@/components/Header/Header";
import Container from "@/components/Container";
import { BsSearch } from "react-icons/bs";
import DestinationList from "@/components/UI/DestinationList";
import Heading from "@/components/common/Heading";
import HowWeWork from "@/components/Featured/HowWeWork";
import ProductList from "@/components/UI/ProductList";
import { activityData } from "../../public/assets/data/Data";
import TourPackageSlider from "@/components/UI/ProductSlider";
import ProductSlider from "@/components/UI/ProductSlider";

const index = () => {
  return (
    <>
      <div className="bg-lightBg w-full h-full max-h-min">
        <div className="flex md:flex-row items-center justify-between px-16 gap-0">
          <div className="w-1/2">
            <h1 className="text-8xl font-merri font-black leading-none text-variant tracking-tighter">
              Go where you
              <br />
              <span className="text-7xl leading-none">
                feel most <span className="text-orange-500">alive</span>
              </span>
            </h1>
            <div className="flex flex-row gap-2 items-center bg-white md:max-5xl rounded-lg shadow-md mt-4 font-poppins py-2 px-2">
              <input
                type="text"
                id="search"
                placeholder="Search Destination Activity Tour"
                className="w-full focus:ring-0 border-none text-lg text-neutral-800 font-medium"
              />
              <button className="bg-secondary text-white p-4 rounded-md">
                <BsSearch className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="w-1/2 object-contain">
            <img src="/assets/images/flight.png" alt="" />
          </div>
        </div>
      </div>
      <section className="py-16">
        <Heading
          heading="Explore Top Destination"
          subheading="Top Destination"
          textAlign="center"
        />
        <div className="flex flex-row items-center gap-4 px-20">
          <DestinationList />
        </div>
      </section>
      <section className="bg-lightBg">
        <HowWeWork />
      </section>

      {/* Activity Listing Start  */}
      <section className="py-16 px-20">
        <Heading
          heading="Enjoy Thrillilng Adventure"
          subheading="Top Adeventures"
          textAlign="center"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductList data={activityData} />
        </div>
      </section>
      {/* Activity Listing End  */}
      {/* Banner Start  */}
      <section className="px-20">
        <Heading
          heading="Recommended Tour Package"
          subheading="Top Selling Packages"
          textAlign="center"
        />
        <div className="w-full">
          <ProductSlider data={activityData} />
        </div>
      </section>
    </>
  );
};

export default index;
