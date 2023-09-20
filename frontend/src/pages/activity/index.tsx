import React, { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import SearchBar from "@/components/common/SearchBar";
import MultiRangeSlider from "@/components/MultiRangeSlider/MultiRangeSlider";
import { IoGridOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import Image from "next/image";
import CoverImage from "../../../public/assets/cover.jpeg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DestinationListItems from "@/components/SearchPage/DestinationListItems";
import HorizontalLayout from "@/components/SearchPage/HorizontalLayout";
import VerticalLayout from "@/components/SearchPage/VerticalLayout";
import {
  fetchProducts,
  getCategories,
  getPriceRange,
  getProductsWithFilter,
  getSubCategories,
} from "@/lib/api";
import { getHomePageActivity } from "@/lib/api";
import { toast } from "react-toastify";

interface ActivitySearchProps {
  min?: any;
  max?: any;
}

const destinationList = [
  "Andhra Pradesh",
  "Himachal Pradesh",
  "Delhi",
  "Mumbai",
  "Goa",
  "Kolkata",
  "Kerala",
  "Bangalore",
  "Pune",
  "Punjab",
  "Madhya Pradesh",
  "Rajasthan",
];

const index: React.FC<ActivitySearchProps> = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productSwitch, setProductSwitch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState<string | null>(null);
  const [subcategory, setSubCategory] = useState<string | null>(null);
  const [finalPriceRange, setFinalPriceRange] = useState<any>([]);
  const [minMaxPrice, setMinMaxPrice] = useState({
    minPrice: null,
    maxPrice: null,
  });
  const [products, setProducts] = useState([]);

  console.log("Activity Page", props);
  async function calculateRange(rangeValues: any) {
    rangeValues.max_price = Number(rangeValues.max_price);
    rangeValues.min_price = Number(rangeValues.min_price);
    const interval = (rangeValues.max_price - rangeValues.min_price) / 5;
    let finalArray = [];
    finalArray[4] = rangeValues.max_price;
    finalArray[0] = rangeValues.min_price;
    for (let i = 1; i < 4; i++) {
      finalArray[i] = rangeValues.min_price + interval * i;
    }
    console.log("FInal Array", finalArray);
    return finalArray;
  }
  async function getData() {
    const categoryFetched = await getCategories();
    setCategories(categoryFetched);
    const subcategoryFetched = await getSubCategories();
    setSubCategories(subcategoryFetched);

    const priceRange = await getPriceRange({
      category,
      subcategory,
    });
    const getBreakup = await calculateRange(priceRange[0]);
    console.log("FINAL RANGE FETCHED", priceRange);

    setFinalPriceRange(getBreakup);
    const prod = await getProductsWithFilter({
      category,
      subcategory,
      minMaxPrice,
    });
    setProducts(prod);
  }

  async function getProds() {
    console.log("MInium max price", minMaxPrice);
    const prod = await getProductsWithFilter({
      category,
      subcategory,
      minMaxPrice,
    });
    setProducts(prod);
  }

  async function handlePriceChange(indexValue: string) {
    const minVal = finalPriceRange[Number(indexValue)];
    const maxVal = finalPriceRange[Number(indexValue) + 1];
    setMinMaxPrice({ minPrice: minVal, maxPrice: maxVal });
  }
  useEffect(() => {
    getData();
  }, [category, subcategory, minMaxPrice]);

  useEffect(() => {
    getProds();
  }, [category, subcategory, minMaxPrice]);

  const notify = () => toast("Wow so easy");
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden font-poppins">
        <div className="shrink-0 w-full h-full">
          <Image
            src={CoverImage}
            alt=""
            className="object-cover w-full h-full cursor-pointer"
          />
        </div>
        <div
          className="absolute top-0 bg-lightOverlay w-full h-full flex items-center justify-start"
          onClick={notify}
        >
          <div className="w-full md:w-3/4 lg:w-3/5">
            <h1 className="text-3xl md:text-5xl text-white font-bold pl-2 md:pl-16 font-merri">
              Switzerland Tour Packages : Grab Exciting Deals | Upto 50% Off
            </h1>
          </div>
        </div>
      </div>

      {/* Content Template Start */}
      <section>
        <Container className="font-poppins">
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
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer"
                  >
                    <option defaultValue="Destination">Category Type</option>
                    {categories.map((cate: any) => (
                      <option value={cate.id}>{cate.category}</option>
                    ))}
                  </select>
                </div>
                {/* Sub Category Dropdown */}
                <div>
                  <select
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer"
                  >
                    <option defaultValue="Destination">
                      Sub Category Type
                    </option>
                    {subcategories.map((cate: any) => (
                      <option value={cate.id}>{cate.subcategory}</option>
                    ))}
                  </select>
                </div>
                {/* Price Range */}
                <div className="relative">
                  <select
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="inline-flex items-center gap-3 px-3 py-1 border border-neutral-500 rounded-md text-sm md:text-base cursor-pointer"
                  >
                    <option defaultValue="Destination">Price Range</option>
                    {finalPriceRange.map((cate: any, index: number) =>
                      index !== 4 ? (
                        <option value={index}>
                          {finalPriceRange[index] +
                            "-" +
                            finalPriceRange[index + 1]}
                        </option>
                      ) : null
                    )}
                  </select>
                  {/* <button
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
                  </button> */}
                  {/* {isOpen && (
                    // <div className="absolute top-10 right-0 z-10">
                    //   <MultiRangeSlider
                    //     min={0}
                    //     max={25000}
                    //     onChange={({}) =>
                    //       console.log(`min = ${min}, max = ${max}`)
                    //     }
                    //   />
                    // </div>
                  )} */}
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
                {productSwitch ? (
                  <VerticalLayout data={products} />
                ) : (
                  <HorizontalLayout data={products} />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const response = await getHomePageActivity();

  return {
    props: { response },
    revalidate: 360,
  };
}
