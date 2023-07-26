import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
// import DetailsPageSlider from "@/components/listings/DetailsPageSlider";
import Container from "@/components/common/Container";
import ProductTitle from "@/components/common/ProductTitle";
import Col from "@/components/common/Col";
// import Itinerary from "@/components/listings/Itinerary";
import Button from "@/components/common/Button";
import Reviews from "@/components/Reviews/Reviews";
// import HighLightsSlider from "@/components/ThingsToDo/HighLights/HighLightsSlider";
import Overviews from "@/components/SingleProductPage/Overviews";
import Accordion from "@/components/common/Accordion";
import { AiFillStar } from "react-icons/ai";
import { products } from "@/data/ActivityData";
import ProductImages from "@/components/SingleProductPage/ProductImages";
import Pricing from "@/components/SingleProductPage/Pricing";
import { RiAlbumLine } from "react-icons/ri";
import Box from "@/components/common/Box";
import { BsCheck2Circle, BsCurrencyRupee, BsInfoCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin, FiMinus, FiPlus } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImWhatsapp } from "react-icons/im";

const ItineraryData = [
  { time: "7:00AM", itineray: "Pick Up & Drop Off" },
  { time: "8:00AM", itineray: "Pick Up & Drop Off" },
  { time: "9:00AM", itineray: "Pick Up & Drop Off" },
  { time: "10:00AM", itineray: "Pick Up & Drop Off" },
];

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus ipsam voluptatum culpa magni dolor reiciendis modi soluta nostrum iste consequuntur vel, accusamus fugit expedita rerum. Temporibus nihil non perspiciatis! Necessitatibus amet, possimus unde ut est id reiciendis ipsa nemo similique vitae architecto aliquid non repudiandae accusantium quo atque obcaecati maxime doloribus impedit culpa. Laudantium explicabo consectetur reprehenderit nostrum officia? Ipsam reprehenderit quo nobis facere, illum deserunt atque quaerat optio ipsum sint iusto ex incidunt assumenda nulla deleniti natus laborum animi vitae, ut quae ea non. Quasi quaerat non quos? Deleniti voluptas harum, ipsam mollitia minus culpa ut obcaecati deserunt? Error veniam quasi fugiat quia rerum deserunt, assumenda molestias iusto ratione quaerat. Illum suscipit illo dolor, eligendi ex itaque consectetur. Quaerat incidunt nemo dicta voluptatem non commodi ab reprehenderit eos vel, aperiam culpa at mollitia! Esse qui, quia nam corporis optio aspernatur pariatur autem incidunt aliquam beatae, totam assumenda quam. Asperiores consequatur veritatis placeat alias rem animi molestias aperiam voluptatem sed distinctio! Pariatur provident voluptatem, nisi ipsum dolorem nulla. Officiis, dolores repellat cupiditate quod laudantium quisquam ipsum consequatur aspernatur corporis!";
const index = () => {
  const [product, setProduct] = useState<any>([]);
  const router = useRouter();
  const activityId = router.query.activityId;

  useEffect(() => {
    const singleProduct = products.filter((item) => {
      item.id === activityId;
    });
    setProduct(singleProduct[0]);
    console.log(product);
  }, []);

  console.log(product);
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
                  Scuba Diving Grand Island
                </h1>
                <div className="flex flex-row items-center w-full gap-4 py-4">
                  <span className="flex flex-row items-center gap-2 text-neutral-600 text-sm font-medium sm:text-base">
                    <FiMapPin className="text-primary text-xl" />
                    Grand Island Goa India
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
                  {[0, 1, 2, 3, 4].map((item, index) => (
                    <li className="flex items-center gap-2 text-textBlack pt-2 leading-loose">
                      <RiAlbumLine className="text-primary text-xl" />
                      <p className="text-sm font-medium">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
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
                <Overviews
                  description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                />
              </div>
              {/* Overview Section End */}

              {/* Inclusion */}
              <Box>
                <Accordion title="Inclusion" isOpen>
                  <ul>
                    {[0, 1, 2, 3].map((item, index) => (
                      <li className="flex items-center gap-6">
                        <BsCheck2Circle className="text-green-600 text-xl" />
                        Scuba Diving Inclusion
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </Box>
              {/* Exlusion */}
              <Box>
                <Accordion title="Exclusion">
                  <ul>
                    {[0, 1, 2, 3].map((item, index) => (
                      <li className="flex items-center gap-6">
                        <IoIosCloseCircleOutline className="text-red-500 text-xl" />
                        Scuba Diving Inclusion
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </Box>
              {/* Know Before You Go */}
              <Box>
                <Accordion title="Know Before You Go">
                  <ul>
                    {[0, 1, 2, 3].map((item, index) => (
                      <li className="flex items-center gap-6">
                        <BsInfoCircle className="text-primary text-xl" />
                        Scuba Diving Inclusion
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </Box>
            </div>
            {/* Main Content End       */}
            {/* Sidebar Start */}
            <div className="w-full md:w-4/12">
              <Pricing price={2000} salePrice={1500} discount={`20%`} />

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
