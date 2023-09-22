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
import { Button } from "@/components/common/Button";
import Loader from "react-loader";
import {
  fetchProducts,
  getCategories,
  getPriceRange,
  getProductsWithFilter,
  getSubCategories,
} from "@/lib/api";
import { getHomePageActivity } from "@/lib/api";

const index = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState<string | null | number>(29);
  const [subcategory, setSubCategory] = useState<string | null>(null);
  const [finalPriceRange, setFinalPriceRange] = useState<any>([]);
  const [minMaxPrice, setMinMaxPrice] = useState({
    minPrice: null,
    maxPrice: null,
  });
  const [products, setProducts] = useState([]);

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
    setIsLoading(false);
    const categoryFetched = await getCategories();
    setCategories(categoryFetched);
    const subcategoryFetched = await getSubCategories();
    setSubCategories(subcategoryFetched);

    const priceRange = await getPriceRange({
      category,
      subcategory,
    });
    const getBreakup = await calculateRange(priceRange[0]);

    setFinalPriceRange(getBreakup);
    const prod = await getProductsWithFilter({
      category,
      subcategory,
      minMaxPrice,
    });
    setProducts(prod);
    setIsLoading(true);
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

  return (
    <>
      <div className="relative w-full h-64 overflow-hidden font-poppins">
        <div className="shrink-0 w-full h-full">
          <Image
            src={CoverImage}
            alt=""
            className="object-cover w-full h-full cursor-pointer"
          />
        </div>
        <div className="absolute top-0 bg-lightOverlay w-full h-full flex items-center justify-center px-4">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl text-white font-bold font-merri">
              Things To Do : Grab Exciting Deals | Upto 30% Off
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Content Template Start */}
      <section>
        <Container className="font-poppins">
          <div className="flex flex-col gap-4 w-full h-full md:flex-row">
            <div className="w-full">
              {/* Filter Option Start */}
              <div className="flex flex-row items-center  justify-between flex-wrap gap-3 pt-6 w-full">
                <div className="flex flex-row items-center gap-2 w-full md:w-2/5">
                  {/* Category Dropdown */}
                  <div className="border border-neutral-600 rounded-sm max-w-xs w-1/2 md:w-4/5">
                    <select
                      className="border-none w-full"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option defaultValue="Category">Category</option>
                      {categories.map((cate: any) => (
                        <option value={cate.id}>{cate.category}</option>
                      ))}
                    </select>
                  </div>
                  {/* Sub Category Dropdown */}
                  <div className="border border-neutral-600 rounded-sm max-w-xs w-1/2 md:w-4/5">
                    <select
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="border-none w-full"
                    >
                      <option defaultValue="Destination">Type</option>
                      {subcategories.map((cate: any) => (
                        <option value={cate.id}>{cate.subcategory}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price Range */}
                <div className="border border-neutral-600 rounded-sm w-full md:max-w-xs">
                  <select
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="border-none w-full"
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
                </div>
              </div>
              {/* Filter Option End */}
              {/* Search Result Heading && Grid Toggle */}
              <div className="flex items-center justify-between py-4">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-800">
                  Search Tour/Activity
                </h3>
              </div>
              {/* Main Product Listing */}
              <VerticalLayout data={products} />
              <div className="">
                <Loader
                  loaded={isLoading}
                  lines={20}
                  length={10}
                  width={5}
                  radius={20}
                  corners={1}
                  rotate={0}
                  direction={1}
                  color={"#FF8359"}
                  speed={1}
                  trail={60}
                  shadow={false}
                  hwaccel={false}
                  zIndex={2e9}
                  top="50%"
                  left="50%"
                  scale={1.0}
                  loadedClassName="loadedContent"
                />
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
