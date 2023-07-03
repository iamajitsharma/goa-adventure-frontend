import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import DetailsPageSlider from "@/components/listings/DetailsPageSlider";
import Container from "@/components/common/Container";
import ProductTitle from "@/components/common/ProductTitle";
import Col from "@/components/common/Col";
import Itinerary from "@/components/listings/Itinerary";
import Button from "@/components/common/Button";
import Reviews from "@/components/Reviews/Reviews";
import HighLightsSlider from "@/components/ThingsToDo/HighLights/HighLightsSlider";
import Overviews from "@/components/SingleProductPage/Overviews";
import Accordion from "@/components/common/Accordion";
import { AiFillStar } from "react-icons/ai";
import { products } from "@/data/ActivityData";
import ProductImages from "@/components/SingleProductPage/ProductImages";
import Pricing from "@/components/SingleProductPage/Pricing";
import { RiAlbumLine } from "react-icons/ri";
import Box from "@/components/common/Box";
import { BsCheck2Circle } from "react-icons/bs";

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
      <section className="bg-neutral-100  font-poppins">
        <Container>
          <div className="grid md:grid-cols-4 gap-4 grid-flow-row-dense">
            <div className="main_layout">
              {/* Product Title Section */}
              <div className="bg-white shadow-sm p-4 rounded-md">
                <h1 className="font-semibold text-xl">
                  Scuba Diving Grand Island
                </h1>
                <div className="flex flex-row items-center gap-6 py-4">
                  <span className="flex flex-row items-center gap-2">
                    <i className="ri-map-pin-line text-primary text-xl"></i>
                    Grand Island Goa India
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="flex flex-row items-center gap-2">
                      <i className="ri-star-fill text-xl text-primary"></i>
                      4.5
                    </span>
                    <button className="bg-green-600/80 text-white text-sm p-2 rounded-full">
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
                    <li className="flex items-center gap-2 text-sm text-textBlack pt-2">
                      <RiAlbumLine className="text-primary" />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
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
                        <BsCheck2Circle className="text-green-600 w-6 h-6" />
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
                        <BsCheck2Circle className="text-green-600 w-6 h-6" />
                        Scuba Diving Inclusion
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </Box>
            </div>
            {/* Main Content End       */}
            {/* Sidebar Start */}
            <div className="sidebar_layout">
              <div className="w-full shadow-lg p-2 rounded-md bg-white">
                <Pricing price={2000} salePrice={1500} discount={`20%`} />
              </div>
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
