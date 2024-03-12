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
      <section className="pt-0">
        <Container>
          <Heading
            textAlign="center"
            heading="Top Adventure Activity"
            subheading="TOP ADVENTURE"
          />
          <Slider {...productSliderSettings} className="pt-8">
            {props.allActivity.map((item: any, index: number) => (
              <ProductCard item={item} isLoading={isLoading} key={index} />
            ))}
          </Slider>
        </Container>
      </section>

      <section className="bg-lightBg">
        <HowWeWork />
      </section>

      {/* {props?.tourData.length > 3 ? (
        <section>
          <Container>
            <Heading
              heading="Recommended Tour Package"
              subheading="Top Rated Experience"
              textAlign="center"
            />

            <ProductSlider />
          </Container>
        </section>
      ) : (
        ""
      )} */}

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
duration
}`;

  const allActivity = await client.fetch(activityQuery);

  return {
    props: { allActivity },
  };
};
