//import custom components
import Hero from "components/hero/Hero";
import ProductGrid from "components/product/ProductGrid";
import { Fragment } from "react";
import { getTourPackage, getActivities } from "sanity/query/productQuery";
import { ProductCardProps } from "helper/interface";
import HeroImage from "components/hero/HeroImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goa Adventure",
  description: "Online tour and travel",
};

const Home = async () => {
  const [tours, activities]: any = await Promise.all([
    getTourPackage(),
    getActivities(),
  ]).catch((err) => console.error("Unable to fetch data", err));

  return (
    <Fragment>
      {/* <Hero /> */}
      <HeroImage />
      <ProductGrid
        products={activities}
        title="Things to do in goa"
        link="/activity"
        infinite
      />
      <ProductGrid products={tours} title="Goa Tour Packages" link="/tour" />
    </Fragment>
  );
};

export default Home;
