//import node module libraries
import Head from "next/head";
import React, { useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "@/components/Responsive";

//import utility helper function
import { client } from "../lib/client";

//import custom components
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import ProductCard from "@/components/UI/ProductCard";
import HowWeWork from "../components/featured/HowWeWork";
import MobileHero from "@/components/Hero/MobileHero";
import DesktopHero from "@/components/Hero/DesktopHero";
import PartnerLogo from "@/components/featured/PartnerLogo";

//import required data file
import { productSliderSettings } from "../data/ProductSliderSettings";
import ProductList from "@/components/DisplayProducts/ProductList";
import ProductSlider from "@/components/DisplayProducts/ProductSlider";
import Modal from "@/components/common/Modal";

const Index = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  return (
    <>
      <div>
        <Head>
          <title>Adventure, Activity Online Travel Portal</title>
          <meta name="description" content="Online tour booking system" />
        </Head>
      </div>
      {isTablet ? <MobileHero /> : <DesktopHero />}

      {/* Activity Slider */}
      <ProductSlider
        heading="Top Adventure Activity"
        subheading="Top Adventure"
        textAlign="center"
        data={props.allActivity}
      />
      <Modal />
      <section className="bg-lightBg">
        <HowWeWork />
      </section>

      <section>
        <Container>
          <Heading
            heading="Top Rated Brands"
            subheading="Our Valuable Partner"
            textAlign="center"
          />
          <PartnerLogo />
        </Container>
      </section>
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const activityQuery = `*[_type == "product" && category._ref in *[_type == "category" && category_name == "Activity"]._id] {
_id,
product_title,
  "slug":slug.current,
  "category":category->category_name,
  "category_slug":category->slug.current,
  "images":images[0].asset->url,
price,
discount,
state,
location,
duration,
deposit
}`;

  const allActivity = await client.fetch(activityQuery);

  return {
    props: { allActivity },
  };
};
