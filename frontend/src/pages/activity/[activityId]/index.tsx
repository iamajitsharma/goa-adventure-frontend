import React from "react";
import { useRouter } from "next/router";
import ImageSection from "@/components/ThingsToDo/ImgSection";
import ActivityData from "@/data/ActivityData";
import Image from "next/image";
import DetailsPageSlider from "@/components/listings/DetailsPageSlider";
import DetailsPagePricing from "@/components/listings/DetailsPagePricing";
import Container from "@/components/Container";
import ProductTitle from "@/components/listings/ProductTitle";
import { MdLocationPin } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Col from "@/components/common/Col";
import Itinerary from "@/components/listings/Itinerary";
import Button from "@/components/common/Button";
import Reviews from "@/components/Reviews/Reviews";

const ItineraryData = [
  { time: "7:00AM", itineray: "Pick Up & Drop Off" },
  { time: "8:00AM", itineray: "Pick Up & Drop Off" },
  { time: "9:00AM", itineray: "Pick Up & Drop Off" },
  { time: "10:00AM", itineray: "Pick Up & Drop Off" },
];

const index = () => {
  const router = useRouter();
  const activityId = router.query.activityId;
  const activity = ActivityData.find((activity) => activity.id === activityId);

  return (
    <section className="relative">
      {/* Product Slider Start */}
      <div className="grid grid-cols-4 gap-2 items-center text-center justify-items-stretch h-[500px]">
        <div className="h-full">
          <Image
            src="/Things-To-Do1.png"
            width={100}
            height={100}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="row-span-2 col-span-2 h-full">
          <DetailsPageSlider />
        </div>
        <div className="h-full">
          <Image
            src="/Things-To-Do1.png"
            width={100}
            height={100}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" h-full">
          <Image
            src="/Things-To-Do1.png"
            width={100}
            height={100}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" h-full">
          <Image
            src="/Things-To-Do1.png"
            width={100}
            height={100}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Product Slider End */}
      <Container className="mt-20">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-9/12 md:p-4 md:shadow-lg">
            <div className="flex flex-col gap-3">
              <ProductTitle h1={true} title="Scuba Diving Grand Island" />
              <div className="flex flex-row items-center gap-4">
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
          </div>
          <div className="w-full bottom-0 inset-x-0 md:w-3/12 shadow-lg p-4 rounded-md">
            <DetailsPagePricing
              regularPrice="2500"
              salePrice={1350}
              discount={"40% off"}
              onClick={() => {}}
            />
          </div>
        </div>
      </Container>
      {/* Overview Section Start */}
      <Container className="flex flex-col md:flex-row items-start gap-4 w-full">
        <Col col3 className="shadow-md p-2">
          <ProductTitle h2={true} title="Scuba Diving Grand Island Overview" />
          <div className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              labore id atque dolore porro esse molestiae quis odit magni
              expedita numquam deserunt laborum, cum saepe nobis ex. Sunt, ab
              tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tenetur labore id atque dolore porro esse molestiae quis odit
              magni expedita numquam deserunt laborum, cum saepe nobis ex. Sunt,
              ab tempora. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Tenetur labore id atque dolore porro esse molestiae quis
              odit magni expedita numquam deserunt laborum, cum saepe nobis ex.
              Sunt, ab tempora. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur labore id atque dolore porro esse
              molestiae quis odit magni expedita numquam deserunt laborum, cum
              saepe nobis ex. Sunt, ab tempora. elit. Tenetur labore id atque
              dolore porro esse molestiae quis odit magni expedita numquam
              deserunt laborum, cum saepe nobis ex. Sunt, ab tempora. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
              id atque dolore porro esse molestiae quis odit magni expedita
              numquam deserunt laborum, cum saepe nobis ex. Sunt, ab tempora.
            </p>
          </div>
        </Col>
        <Col col1>
          <div className="w-full p-4">
            <h4 className="w-full bg-gray-500/60 text-black text-base font-medium p-2 rounded-md">
              Inclusion
            </h4>
            <ul className="pt-4 leading-loose text-sm font-medium text-textBlack list-disc pl-4">
              <li>Scuba Diving Grand Island</li>
              <li>Scuba Diving Grand Island</li>
              <li>Scuba Diving Grand Island</li>
              <li>Scuba Diving Grand Island</li>
            </ul>
          </div>
          <div className="w-full p-4">
            <h4 className="w-full bg-gray-500/60 text-black text-base font-medium p-2 rounded-md">
              Exclusion
            </h4>
            <ul className="pt-4 leading-loose text-sm font-medium text-textBlack list-disc pl-4">
              <li>Scuba Diving Grand Island</li>
              <li>Scuba Diving Grand Island</li>
              <li>Scuba Diving Grand Island</li>
              <li>Scuba Diving Grand Island</li>
            </ul>
          </div>
        </Col>
      </Container>
      {/* Overview Section End */}
      {/* Itinerary Section Start */}
      <Container>
        <Col col3 className="shadow-lg p-4">
          <div className="flex flex-row items-center gap-4">
            <Button outline label="Itinerary" onClick={() => {}} />
            <Button outline label="Review" onClick={() => {}} />
            <Button outline label="Policies" onClick={() => {}} />
            <Button outline label="FAQ" onClick={() => {}} />
          </div>
          <div className="pt-8">
            <ProductTitle h4 title="Scuba Diving Grand Island Itinerary" />
            {ItineraryData.map((item, index) => (
              <Itinerary
                key={index}
                timeSlot={item.time}
                itinerary={item.itineray}
              />
            ))}
          </div>
        </Col>
      </Container>
      {/* Itinerary Section End */}

      <Container>
        <Col col3>
          <Reviews
            profileImg={"/assets/placeholder.jpg"}
            reviewer="Ajit Sharma"
            reviewDate="11-Dec-2022"
            review="Purchase Universal Studios Singapore tickets and enter a world in Resorts World Sentosa where the worlds of blockbuster films and their iconic characters come to life! In this wonderful theme park, you and your companions can experience the thrills of cutting-edge rides, shows, and attractions based on movies and television shows like Puss In Boots’ Giant Journey, Battlestar G"
          />
        </Col>
      </Container>
    </section>
  );
};

export default index;
