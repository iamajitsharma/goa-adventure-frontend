import React, { useState } from "react";
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

const ItineraryData = [
  { time: "7:00AM", itineray: "Pick Up & Drop Off" },
  { time: "8:00AM", itineray: "Pick Up & Drop Off" },
  { time: "9:00AM", itineray: "Pick Up & Drop Off" },
  { time: "10:00AM", itineray: "Pick Up & Drop Off" },
];

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus ipsam voluptatum culpa magni dolor reiciendis modi soluta nostrum iste consequuntur vel, accusamus fugit expedita rerum. Temporibus nihil non perspiciatis! Necessitatibus amet, possimus unde ut est id reiciendis ipsa nemo similique vitae architecto aliquid non repudiandae accusantium quo atque obcaecati maxime doloribus impedit culpa. Laudantium explicabo consectetur reprehenderit nostrum officia? Ipsam reprehenderit quo nobis facere, illum deserunt atque quaerat optio ipsum sint iusto ex incidunt assumenda nulla deleniti natus laborum animi vitae, ut quae ea non. Quasi quaerat non quos? Deleniti voluptas harum, ipsam mollitia minus culpa ut obcaecati deserunt? Error veniam quasi fugiat quia rerum deserunt, assumenda molestias iusto ratione quaerat. Illum suscipit illo dolor, eligendi ex itaque consectetur. Quaerat incidunt nemo dicta voluptatem non commodi ab reprehenderit eos vel, aperiam culpa at mollitia! Esse qui, quia nam corporis optio aspernatur pariatur autem incidunt aliquam beatae, totam assumenda quam. Asperiores consequatur veritatis placeat alias rem animi molestias aperiam voluptatem sed distinctio! Pariatur provident voluptatem, nisi ipsum dolorem nulla. Officiis, dolores repellat cupiditate quod laudantium quisquam ipsum consequatur aspernatur corporis!";
const index = () => {
  const router = useRouter();
  const activityId = router.query.activityId;

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
                <ProductTitle h1 title="Scuba Diving Grand Island" />
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
                <ProductTitle h2 title="Scuba Diving Overview" />
                <Overviews description={description} />
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
                <ProductTitle h4 title="Scuba Diving Grand Island Itinerary" />
                {ItineraryData.map((item, index) => (
                  <Itinerary
                    key={index}
                    timeSlot={item.time}
                    itinerary={item.itineray}
                  />
                ))}
              </div>
              {/* Reviews Section Start      */}
              {[0, 1, 2].map((item, index) => (
                <Reviews
                  key={index}
                  profileImg={"/assets/placeholder.jpg"}
                  reviewer="Ajit Sharma"
                  reviewDate="11-Dec-2022"
                  review="Purchase Universal Studios Singapore tickets and enter a world in Resorts World Sentosa where the worlds of blockbuster films and their iconic characters come to life! In this wonderful theme park, you and your companions can experience the thrills of cutting-edge rides, shows, and attractions based on movies and television shows like Puss In Boots’ Giant Journey, Battlestar G"
                />
              ))}

              <div className="bg-white shadow-md p-4 rounded-md mt-4">
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <Accordion
                    key={index}
                    title="Why Scuba Diving Is Famous"
                    content="Answer is here"
                  />
                ))}
              </div>
            </div>
            {/* Main Content End       */}
            {/* Sidebar Start */}
            <div className="sidebar_layout">
              <div className="w-full shadow-lg p-4 rounded-md bg-white">
                <DetailsPagePricing
                  regularPrice="2500"
                  salePrice={1350}
                  discount={"40% off"}
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

export default index;
