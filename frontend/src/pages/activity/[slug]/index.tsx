import { useRouter } from "next/router";
import Image from "next/image";
import Container from "@/components/common/Container";
import ProductTitle from "@/components/common/ProductTitle";
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

const index = (props: any) => {
  const router = useRouter();
  console.log("Single Page Data", props);
  const salePrice = calculateSalePrice(
    props.data[0].discount_percent,
    props.data[0].price
  );

  return (
    <>
      {/* Product Slider Start */}
      <ProductImages />
      {/* Product Slider End */}
      {/* Product Title & Pricing Section Start */}
      <section className="bg-neutral-100 font-poppins">
        <Container>
          <div className="flex flex-col gap-4 p-3 md:flex-row">
            {/* Layout Start */}
            <div className="bg-neutral-100 w-full md:w-8/12">
              {/* Product Title Section */}
              <div className="bg-white shadow-sm p-4 rounded-md">
                <h1 className="text-lg font-semibold md:text-xl">
                  {props.data[0].title}
                </h1>
                <div className="flex flex-row items-center w-full gap-4 py-4">
                  <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
                    <FiMapPin className="text-primary text-xl" />
                    {props.data[0].city} {props.data[0].state}
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
              </div>
              {/* Product Title Section End */}
              <div className="bg-white shadow-sm p-4 rounded-md mt-4">
                <ProductTitle h4 title="Highlights" />
                <ul className="">
                  {props.data[0].highlight.map((item: any, index: any) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-textBlack pt-2 leading-loose"
                    >
                      <RiAlbumLine className="text-primary text-xl" />
                      <p className="text-sm font-medium">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Overview Section Start */}
              <div className="bg-white shadow-sm p-4 rounded-md mt-4">
                <ProductTitle
                  h4
                  title={"Overview: Scuba Diving Grand Island"}
                />
                <Overviews description={props.data[0].overview} />
              </div>
              {/* Overview Section End */}

              {/* Inclusion */}
              <Box>
                <Accordion title="Inclusion" isOpen>
                  <ul>
                    {props.data[0].activity_inclusion.map(
                      (item: any, index: any) => (
                        <li key={index} className="flex items-center gap-6">
                          <BsCheck2Circle className="text-green-600 text-xl" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </Accordion>
              </Box>
              {/* Exlusion */}
              <Box>
                <Accordion title="Exclusion">
                  <ul>
                    {props.data[0].activity_exclusion.map((item: any) => (
                      <li key={item} className="flex items-center gap-6">
                        <IoIosCloseCircleOutline className="text-red-500 text-xl" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </Box>
            </div>
            {/* Main Content End       */}
            {/* Sidebar Start */}
            <div className="w-full md:w-4/12">
              <Pricing
                price={props.data[0].price}
                salePrice={salePrice}
                discount={props.data[0].discount_percent}
              />

              <Box className="hidden md:block">
                <h5 className="text-xl font-semibold text-variant">
                  For more information
                </h5>
                <div className="flex flex-col gap-3 pt-4 pl-2">
                  <motion.span
                    className="flex items-center gap-2 text-base font-semibold tracking-wider"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BsTelephone className="text-primary text-xl" />
                    <Link href={"tel:+917387960861"}>+91 7387960861</Link>
                  </motion.span>
                  <motion.span
                    className="flex items-center gap-2 text-base font-semibold tracking-wider"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BsTelephone className="text-primary text-xl" />
                    <Link href={"tel:+917387960861"}>+91 7387960861</Link>
                  </motion.span>
                </div>
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-1 text-white bg-green-600/80 py-2 px-4 w-full rounded-md my-4"
                  whileTap={{ scale: 1.2 }}
                >
                  <ImWhatsapp fontSize={24} /> WhatsApp
                </motion.button>
              </Box>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const data = await getSinglePageDetails(slug);
  return {
    props: { data },
  };
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.query;

//   const itemsFromStorage = localStorage.getItem("products");
//   if (itemsFromStorage) {
//     const items = JSON.parse(itemsFromStorage);
//     const products = items.filter((fil: any) => fil?.id == id);
//     console.log("Final Received product info", products[0]);
//     return {
//       props: {
//         product: products[0],
//       },
//     };
//   }
//   return {
//     redirect: {
//       permanent: false,
//       destination: "/",
//     },
//   };
// };

export default index;
