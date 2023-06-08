import ListingCard from "./ListingCard";
import TourCardImg from "../../../public/assets/tourcard.jpeg";
import Heading from "../common/Heading";
import { useEffect, useState } from "react";
import { fetchProducts, url } from "../../lib/api";
import { useRouter } from "next/router";

const ActivityListing = () => {
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);

  async function setProducts() {
    let products = await fetchProducts();
    console.log("products check", products);
    localStorage.setItem("products", JSON.stringify(products));
    setAllProducts(products);
  }

  useEffect(() => {
    console.log("Privacy policy", allProducts);
    let test = setProducts();
  }, []);
  function handleClick(event: any) {
    router.push({
      pathname: `/activity/${event}`,
    });
  }
  return (
    <section className="w-screen lg:py-4 bg-white py-24">
      <Heading heading={"Popular Adventure Activities"} />
      <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-4 md:max-w-7xl mx-auto">
        {allProducts.map((prod) => (
          <ListingCard
            prodId={prod?.id}
            key={prod?.id}
            title={prod?.attributes?.title}
            image={
              prod?.attributes?.featured_image?.data?.attributes?.formats
                ?.thumbnail?.url
            }
            location={prod?.attributes?.state}
            duration={prod?.attributes?.duration}
            review={4.5}
            reviewCount={`(450 reviews)`}
            salePrice={prod?.attributes?.salePrice}
            regularPrice={prod?.attributes?.price}
            discount={`${prod?.attributes?.discount_percent}%`}
            href="localhost"
            onClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityListing;
