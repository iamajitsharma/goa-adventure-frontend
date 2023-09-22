import React, { useState, useEffect } from "react";
import Image from "next/image";
import CoverImage from "../../../../../public/assets/cover.jpeg";
import { useRouter } from "next/router";
import Container from "@/components/common/Container";
import Box from "@/components/common/Box";
import Overviews from "@/components/SingleProductPage/Overviews";
import { products } from "@/data/ActivityData";
import ProductSlider from "@/components/UI/ProductSlider";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import DestinationListItems from "@/components/SearchPage/DestinationListItems";
import HorizontalLayout from "@/components/SearchPage/HorizontalLayout";
import VerticalLayout from "@/components/SearchPage/VerticalLayout";
import SearchBar from "@/components/common/SearchBar";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";

interface StateProps {
  min?: any;
  max?: any;
}

const index: React.FC<StateProps> = ({ min, max }) => {
  const [activity, setActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productSwitch, setProductSwitch] = useState(false);
  const router = useRouter();
  const { state } = router.query;

  useEffect(() => {
    setIsLoading(true);
    const filterActivityData: any = products.filter(
      (item) => item.category === "activity"
    );
    setActivity(filterActivityData);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-96 overflow-hidden font-poppins">
        <div className="shrink-0 w-full h-full">
          <Image
            src={CoverImage}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-0 bg-lightOverlay w-full h-full flex items-center justify-start">
          <div className="w-full md:w-3/4 lg:w-3/5">
            <h1 className="text-3xl md:text-5xl text-white font-bold pl-2 md:pl-16 font-merri capitalize">
              {state} Tour Packages : Grab Exciting Deals | Upto 50% Off
            </h1>
          </div>
        </div>
      </div>

      <section className="bg-neutral-100 font-poppins">
        <Container>
          <Box className="bg-white">
            <div className="pt-2 pb-6">
              <h2 className="text-lg md:text-xl font-semibold capitalize py-[2px] px-2 border-l-4 border-l-primary">
                Know more about {state}
              </h2>
            </div>
            <Overviews
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem hic magni, ipsum quo rem quia, pariatur, consectetur sit fuga
            ex omnis. Vero doloremque dolor inventore illo sed dolorem facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem hic magni, ipsum quo rem quia, pariatur, consectetur sit fuga
            ex omnis. Vero doloremque dolor inventore illo sed dolorem facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem hic magni, ipsum quo rem quia, pariatur, consectetur sit fuga
            ex omnis. Vero doloremque dolor inventore illo sed dolorem facilis."
            />
          </Box>
          <Box className="bg-white">
            <div className="pt-2 pb-6">
              <h2 className="text-lg md:text-xl font-semibold capitalize py-[2px] px-2 border-l-4 border-l-primary">
                Things to do in {state}
              </h2>
            </div>
            <ProductSlider data={activity} isLoading={isLoading} />
          </Box>
          {/* Search Field */}

          <div className="flex flex-col gap-4 w-full h-full md:flex-row">
            {/* <div className="hidden md:block md:w-3/12">
              <DestinationListItems />
            </div> */}
            <div className="w-full md:w-9/12">
              <SearchBar />
              {/* Filter Option Start */}
              <div className="flex flex-row items-center flex-wrap gap-3 pt-6 w-full">
                {/* Destination Drodown */}
                {/* <div>
                  <select className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer">
                    <option defaultValue="Destination">Destination</option>
                    <option>Goa</option>
                    <option>Kerala</option>
                    <option>Himachal Pradesh</option>
                  </select>
                </div> */}
                {/* Category Dropdown */}
                <div>
                  <select className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer">
                    <option defaultValue="Destination">Category</option>
                    <option>Tour Package</option>
                    <option>Adventure</option>
                    <option>Local Sightseeing</option>
                  </select>
                </div>
                {/* Sub Category Dropdown */}
                <div>
                  <select className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer">
                    <option defaultValue="Destination">Category Type</option>
                    <option>Tour Package</option>
                    <option>Adventure</option>
                    <option>Local Sightseeing</option>
                  </select>
                </div>
                {/* Price Range */}
                <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Price Range
                    {isOpen ? (
                      <IoIosArrowUp
                        fontSize={14}
                        className="text-base font-medium"
                      />
                    ) : (
                      <IoIosArrowDown
                        fontSize={14}
                        className="text-base font-medium"
                      />
                    )}
                  </button>
                  {isOpen && (
                    <div className="absolute top-10 right-0 z-10">
                      <MultiRangeSlider min={0} max={25000} />
                    </div>
                  )}
                </div>
              </div>
              {/* Filter Option End */}
              {/* Search Result Heading && Grid Toggle */}
              <div className="flex items-center justify-between py-4">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-800">
                  Result for goa tour package
                </h3>
                <span className="flex items-center py-6 gap-4 text-xl text-neutral-700 cursor-pointer">
                  <AiOutlineBars onClick={() => setProductSwitch(false)} />
                  <IoGridOutline onClick={() => setProductSwitch(true)} />
                </span>
              </div>
              {/* Main Product Listing */}
              <div>
                {productSwitch ? <VerticalLayout /> : <HorizontalLayout />}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
