import ListingCard from "./ListingCard";
import TourCardImg from "../../../public/assets/tourcard.jpeg";
import Heading from "../common/Heading";
import { useEffect, useState } from "react";
import { fetchProducts, url } from "../../lib/api";
import { useRouter } from "next/router";
import { products } from "@/data/ActivityData";
import { calculateSalePrice } from "@/lib/operations";

const ActivityListing = () => {
  const [filterProduct, setFilterProduct] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    const filterProductFn = products.filter(
      (item: any) => item.category === "Activity"
    );
    setFilterProduct(filterProductFn);
    console.log(filterProduct);
  }, []);

  function handleClick(event: any) {
    router.push({
      pathname: `/activity/${event}`,
    });
  }

  console.log(filterProduct);
  return (
    <section className="w-screen lg:py-4 bg-white py-24">
      <Heading heading={"Popular Adventure Activities"} />
      <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-4 md:max-w-7xl mx-auto">
        {filterProduct.map((item: any) => (
          <ListingCard
            title={item.title}
            image={item.featuredImage}
            onClick={handleClick}
            prodId={item?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityListing;
