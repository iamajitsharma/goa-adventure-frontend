import { useRouter } from "next/router";
import Image from "next/image";
import Container from "@/components/common/Container";
import ProductTitle from "@/components/SingleProductPage/ProductTitle";
import Overviews from "@/components/SingleProductPage/Overviews";
import Accordion from "@/components/common/Accordion";
import { AiFillStar } from "react-icons/ai";
import ProductImages from "@/components/SingleProductPage/ProductImages";
import Pricing from "@/components/SingleProductPage/Pricing";
import { RiAlbumLine } from "react-icons/ri";
import Box from "@/components/common/Box";
import { BsCheck2Circle, BsTelephone } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiMapPin, FiMinus, FiPlus } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImWhatsapp } from "react-icons/im";
import { getSinglePageDetails } from "../../../lib/api";
import { calculateSalePrice } from "@/lib/operations";
import { getHomePageTour } from "../../../lib/api";
import ProductLayout from "@/components/SingleProductPage/ProductLayout";

const index = (props: any) => {
  console.log("Resp in tour", props);
  const salePrice = calculateSalePrice(
    props?.data[0]?.discount_percent,
    props?.data[0]?.price
  );

  return (
    <section className="pt-0 bg-slate-50">
      {/* Product Slider Start */}
      <ProductImages
        featuredImage={props?.data[0]?.featured_image}
        galleryImage={props?.data[0]?.gallery}
      />
      {/* Product Slider End */}
      <ProductLayout
        price={props?.data[0]?.price}
        salePrice={salePrice}
        discount={props?.data[0]?.discount_percent}
      >
        {/* Product Title Section */}
        <Box className="bg-white">
          <h1 className="text-lg font-semibold md:text-xl">
            {props?.data[0]?.title}
          </h1>
          <div className="flex flex-row items-center w-full gap-4 py-4">
            <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
              <FiMapPin className="text-primary text-xl" />
              {props?.data[0]?.city} {props?.data[0]?.state}
            </span>
            <div className="flex items-center gap-1">
              <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
                <AiFillStar className="text-primary text-xl" />
                4.5
              </span>
              <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-green-600/80 text-white  rounded-full">
                450 reviews
              </button>
            </div>
          </div>

          {/* Product Title Section End */}
        </Box>

        <Box className="bg-white">
          <ProductTitle
            variant="h2"
            title={`Overview: ${props?.data[0]?.title}`}
          />
          <Overviews description={props?.data[0]?.overview} />
        </Box>

        <Box className="bg-white">
          <Accordion title="Inclusion" isOpen>
            <ul>
              {props?.data[0]?.activity_inclusion?.map(
                (item: any, index: any) => (
                  <li key={index} className="flex items-center gap-6">
                    <BsCheck2Circle className="text-green-600 text-xl" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </Accordion>
          <Accordion title="Exclusion">
            <ul>
              {props?.data[0]?.activity_exclusion?.map((item: any) => (
                <li key={item} className="flex items-center gap-6">
                  <IoIosCloseCircleOutline className="text-red-500 text-xl" />
                  {item}
                </li>
              ))}
            </ul>
          </Accordion>
        </Box>
      </ProductLayout>
    </section>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const data = await getSinglePageDetails(slug);
  return {
    props: { data },
    revalidate: 360,
  };
}

export async function getStaticPaths() {
  const allTour = await getHomePageTour();
  //Creating an array of objects

  const paths = allTour.map((tour: any) => {
    return {
      params: { slug: tour.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default index;
