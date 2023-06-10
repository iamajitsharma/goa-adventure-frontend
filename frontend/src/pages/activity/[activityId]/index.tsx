import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import DetailsPageSlider from "@/components/listings/DetailsPageSlider";
import DetailsPagePricing from "@/components/listings/DetailsPagePricing";
import Container from "@/components/common/Container";
import ProductTitle from "@/components/listings/ProductTitle";
import Col from "@/components/common/Col";
import Itinerary from "@/components/listings/Itinerary";
import Button from "@/components/common/Button";
import Reviews from "@/components/Reviews/Reviews";
import HighLightsSlider from "@/components/ThingsToDo/HighLights/HighLightsSlider";
import Overviews from "@/components/listings/Overviews";
import Accordion from "@/components/common/Accordion";
import { AiFillStar } from "react-icons/ai";
import { products } from "@/data/ActivityData";

const ItineraryData = [
  { time: "7:00AM", itineray: "Pick Up & Drop Off" },
  { time: "8:00AM", itineray: "Pick Up & Drop Off" },
  { time: "9:00AM", itineray: "Pick Up & Drop Off" },
  { time: "10:00AM", itineray: "Pick Up & Drop Off" },
];

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus ipsam voluptatum culpa magni dolor reiciendis modi soluta nostrum iste consequuntur vel, accusamus fugit expedita rerum. Temporibus nihil non perspiciatis! Necessitatibus amet, possimus unde ut est id reiciendis ipsa nemo similique vitae architecto aliquid non repudiandae accusantium quo atque obcaecati maxime doloribus impedit culpa. Laudantium explicabo consectetur reprehenderit nostrum officia? Ipsam reprehenderit quo nobis facere, illum deserunt atque quaerat optio ipsum sint iusto ex incidunt assumenda nulla deleniti natus laborum animi vitae, ut quae ea non. Quasi quaerat non quos? Deleniti voluptas harum, ipsam mollitia minus culpa ut obcaecati deserunt? Error veniam quasi fugiat quia rerum deserunt, assumenda molestias iusto ratione quaerat. Illum suscipit illo dolor, eligendi ex itaque consectetur. Quaerat incidunt nemo dicta voluptatem non commodi ab reprehenderit eos vel, aperiam culpa at mollitia! Esse qui, quia nam corporis optio aspernatur pariatur autem incidunt aliquam beatae, totam assumenda quam. Asperiores consequatur veritatis placeat alias rem animi molestias aperiam voluptatem sed distinctio! Pariatur provident voluptatem, nisi ipsum dolorem nulla. Officiis, dolores repellat cupiditate quod laudantium quisquam ipsum consequatur aspernatur corporis!";
const index = (props: any) => {
  const [product, setProduct] = useState({});
  const router = useRouter();
  console.log("Final Product received ", product);
  useEffect(() => {
    const activityId = router.query.activityId;
    // if (!activityId) {
    //   router.push({
    //     pathname: `/`,
    //   });
    // }
    const singleProduct = products.filter((fil: any) => fil?.id == activityId);
    console.log("Final Received product info", singleProduct[0]);
    setProduct(singleProduct[0]);
  }, []);

  console.log(product);
  return (
    <>
      {/* Product Slider Start */}
      <div className="grid grid-cols-4 gap-1 items-center text-center justify-items-stretch md:min-h-full">
        <div className="">
          <img
            src="/Things-To-Do1.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="row-span-2 col-span-2 w-full h-full">
          <img
            src="/Rectangle_29.png"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="">
          <img
            src="/Things-To-Do1.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="">
          <img
            src="/Things-To-Do1.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="">
          <img
            src="/Things-To-Do1.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Product Slider End */}
      {/* Product Title & Pricing Section Start */}
      <section className="bg-neutral-100  font-poppins">
        <Container>
          <div className="grid md:grid-cols-4 gap-4 grid-flow-row-dense">
            <div className="main_layout">
              {/* Product Title Section */}
              <div className="bg-white shadow-sm p-4 rounded-md">
                <ProductTitle h1 title="t" />
                <div className="flex flex-row items-center gap-6 py-4">
                  <span className="flex flex-row items-center gap-2">
                    <i className="ri-map-pin-line text-mainColor text-2xl"></i>
                    Grand Island
                  </span>
                  <span className="flex flex-row items-center gap-2">
                    <i className="ri-star-fill text-2xl text-yellow-400"></i>
                    4.5
                  </span>
                  <button className="bg-green-600/80 text-white text-sm p-2 rounded-full">
                    450 reviews
                  </button>
                </div>
              </div>
              {/* Product Title Section End */}
              {/* Overview Section Start */}
              <div className="bg-white shadow-sm p-4 rounded-md mt-4">
                <ProductTitle h2 title={product?.attributes?.title} />
                <Overviews description={product?.attributes?.overview} />
              </div>
              {/* Overview Section End */}
              {/* Acitivity Navigation   */}
              <div className="bg-white shadow-sm p-4 rounded-md mt-4">
                <div className="flex flex-row items-center gap-4">
                  <Button outline label="Itinerary" onClick={() => {}} />
                  <Button outline label="Review" onClick={() => {}} />
                  <Button outline label="Policies" onClick={() => {}} />
                  <Button outline label="FAQ" onClick={() => {}} />
                </div>
              </div>
              {/*Itinerary*/}
              <div className="bg-white shadow-md p-4 rounded-md mt-4">
                <ProductTitle h4 title={product?.attributes?.title} />
                {ItineraryData.map((item, index) => (
                  <Itinerary
                    key={index}
                    timeSlot={item.time}
                    itinerary={item.itineray}
                  />
                ))}
              </div>
              {/* Reviews Section Start      */}
              <div className="bg-white shadow-md p-4 rounded-md mt-4">
                <div className="flex flex-row items-center gap-4 py-4">
                  <div className="text-5xl font-bold">
                    4.8<span className="text-lg font-medium">/5</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="flex flex-row items-center">
                      {[0, 1, 2, 3, 4].map((item, index) => (
                        <AiFillStar
                          key={index}
                          className="w-7 h-7 text-yellow-500/80"
                        />
                      ))}
                    </span>
                    <span className="text-base text-textBlack">
                      50K+ reviews
                    </span>
                  </div>
                </div>
                {[0, 1, 2].map((item, index) => (
                  <Reviews
                    key={index}
                    profileImg={"/assets/placeholder.jpg"}
                    reviewer="Ajit Sharma"
                    reviewDate="11-Dec-2022"
                    review="Purchase Universal Studios Singapore tickets and enter a world in Resorts World Sentosa where the worlds of blockbuster films and their iconic characters come to life! In this wonderful theme park, you and your companions can experience the thrills of cutting-edge rides, shows, and attractions based on movies and television shows like Puss In Boots’ Giant Journey, Battlestar G"
                  />
                ))}
              </div>

              {/* FAQ Start */}
              <div className="bg-white shadow-md p-4 rounded-md mt-4">
                <ProductTitle h4 title={`${product?.attributes?.title} FAQ`} />
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <Accordion
                    key={index}
                    title="Why Scuba Diving Is Famous"
                    content="Answer is here"
                  />
                ))}
              </div>
              {/* FAQ End */}
              {/* Policy Section Start */}
              <div className="bg-white shadow-md p-4 rounded-md mt-4">
                <ProductTitle
                  h4
                  title={`${product?.attributes?.title} Policies`}
                />
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <Accordion
                    key={index}
                    title="Why Scuba Diving Is Famous"
                    content="Answer is here"
                  />
                ))}
              </div>
              {/* Policy Section End */}
            </div>
            {/* Main Content End       */}
            {/* Sidebar Start */}
            <div className="sidebar_layout">
              <div className="w-full shadow-lg p-4 rounded-md bg-white">
                <DetailsPagePricing
                  regularPrice={product?.attributes?.price}
                  salePrice={product?.attributes?.salePrice}
                  discount={`${product?.attributes?.discount_percent}%`}
                  onClick={() => {}}
                />
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
