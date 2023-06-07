import React from "react";
import ListingCard from "../../components/listings/ListingCard";
import Image from "next/image";
import ActivityCover from "../../../public/assets/activityCover.png";
import Container from "../../components/common/Container";
import FilterComponents from "../../components/common/FilterComponents";
import ActivityData from "../../data/ActivityData";
import FilterSearchBar from "../../components/common/FilterSearchBar";
import { useEffect, useState } from "react";
import { fetchProducts, url } from "../../lib/api";
import { useRouter } from "next/router";

const index = () => {
  const [showFilterOption, setShowFilterOption] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const router = useRouter();

  async function setProducts() {
    let products = await fetchProducts();
    console.log("products check", products);

    products.map((check) => console.log("Check key", check.id));
    setAllProducts(products);
  }

  useEffect(() => {
    console.log("Privacy policy", allProducts);
    let test = setProducts();
  }, []);

  function handleClick(event: any) {
    console.log("Event tiggered ", event);
    const finalProduct = allProducts.filter((fil: any) => fil?.id == event);
    console.log("Fianl product to be pushed", finalProduct);

    // router.push({
    //   pathname: `/activity/${1}`,
    //   state: { finalProduct },
    // });
  }
  return (
    <>
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
      <FilterSearchBar
        setShowFilterOption={setShowFilterOption}
        showFilterOption={showFilterOption}
      />

      <Container className="flex flex-col lg:flex-row justify-center">
        <FilterComponents showFilterOption={showFilterOption} />
        <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-3 md:gap-0 md:max-w-7xl  py-8">
          {allProducts?.map((item) => (
            <ListingCard
              prodId={item?.id}
              key={item?.id}
              title={item?.attributes?.title}
              image={
                item?.attributes?.featured_image?.data?.attributes?.formats
                  ?.thumbnail?.url
              }
              location={item?.attributes?.state}
              duration={item?.attributes?.duration}
              review={4.5}
              reviewCount={`(450 reviews)`}
              salePrice={item?.attributes?.salePrice}
              regularPrice={item?.attributes?.price}
              discount={`${item?.attributes?.discount_percent}%`}
              href="localhost"
              onClick={handleClick}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default index;
