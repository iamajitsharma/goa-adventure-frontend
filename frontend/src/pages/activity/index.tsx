import React, { useState } from "react";
import Container from "@/components/common/Container";
import SearchBar from "@/components/common/SearchBar";
import ProductList from "@/components/UI/ProductList";
import { products } from "../../data/ActivityData";
import { BsSearch, BsCurrencyRupee } from "react-icons/bs";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const index = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-300">Sidebar</div>
        <div className="col-span-3">
          <h2>Search activity or tour</h2>
          <div>
            <div className="flex items-center justify-between">
              {/* Search Bar */}
              <div className="flex items-center gap-0 bg-white shadow-md rounded-md w-1/2">
                <input
                  type="text"
                  placeholder="Search Activity, Tour, Destination"
                  className="w-full focus:ring-0 border-none text-base text-neutral-500"
                />
                <button className="text-variant p-3 rounded-r-md">
                  <BsSearch className="w-6 h-6" />
                </button>
              </div>
              {/* Price Range */}
              <div className="">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Price Range
                  {isOpen ? (
                    <SlArrowDown fontSize={20} />
                  ) : (
                    <SlArrowUp fontSize={20} />
                  )}
                </button>
                {isOpen && (
                  <MultiRangeSlider
                    min={0}
                    max={25000}
                    onChange={({ min, max }: any) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4 mt-12">
            <ProductList data={products} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
