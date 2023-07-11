import React, { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Container from "@/components/common/Container";
import { BsSearch } from "react-icons/bs";
import DestinationList from "@/components/UI/DestinationList";
import Heading from "@/components/common/Heading";
import HowWeWork from "@/components/Featured/HowWeWork";
import ProductList from "@/components/UI/ProductList";
import { activityData } from "../../public/assets/data/Data";
import { products } from "../data/ActivityData";
import TourPackageSlider from "@/components/UI/ProductSlider";
import ProductSlider from "@/components/UI/ProductSlider";
import Testimonials from "@/components/Testimonial/Testimonials";
import BannerSlider from "@/components/Featured/BannerSlider";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "@/components/Responsive";
import MobileHero from "@/components/Hero/MobileHero";
import DesktopHero from "@/components/Hero/DesktopHero";
import PartnerLogo from "@/components/Featured/PartnerLogo";

const Index = () => {
  const [activities, setActivities] = useState([]);
  const [tourData, setTourData] = useState([]);

  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  useEffect(() => {
    const filterActivityData: any = products.filter(
      (item) => item.category === "activity"
    );
    const filterTourData: any = products.filter(
      (item) => item.category === "tour"
    );

    setActivities(filterActivityData);
    setTourData(filterTourData);
  }, []);

  return (
    <>
      {isTablet ? <MobileHero /> : <DesktopHero />}

      <section className="">
        <Container>
          <Heading
            textAlign="center"
            heading="Explore Top Destination"
            subheading="Top Destination"
          />
          <DestinationList />
        </Container>
      </section>

      <section className="">
        <Container>
          <Heading
            textAlign="center"
            heading="Top Adventure Activity"
            subheading="TOP ADVENTURE"
          />
          <ProductSlider data={activities} />
        </Container>
      </section>

      <section className="bg-lightBg">
        <HowWeWork />
      </section>

      <section>
        <Container>
          <Heading
            heading="Recommended Tour Package"
            subheading="Top Rated Experience"
            textAlign="center"
          />
          <ProductSlider data={tourData} />
        </Container>
      </section>

      <section>
        <Container>
          <BannerSlider />
        </Container>
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
