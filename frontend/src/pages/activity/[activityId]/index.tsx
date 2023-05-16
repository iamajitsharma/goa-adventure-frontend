import React from "react";
import { useRouter } from "next/router";
import ImageSection from "@/components/ThingsToDo/ImgSection";
import ActivityData from "@/data/ActivityData";
import Image from "next/image";
import DetailsPageSlider from "@/components/listings/DetailsPageSlider";
import DetailsPagePricing from "@/components/listings/DetailsPagePricing";
import Container from "@/components/Container";
import ProductTitle from "@/components/listings/ProductTitle";
import { GrLocation } from "react-icons/gr";

const index = () => {
  const router = useRouter();
  const activityId = router.query.activityId;
  const activity = ActivityData.find((activity) => activity.id === activityId);

  return (
    <section>
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
        <div className="flex flex-row items-center gap-4">
          <div className="md:w-9/12 p-4 shadow-lg">
            <div className="flex flex-col gap-3">
              <ProductTitle h1={true} title="Scuba Diving Grand Island" />
              <div className="flex flex-row items-center gap-4">
                <span className="flex flex-row items-center gap-2">
                  <GrLocation className="w-6 h-6 text-mainColor" /> Grand Island
                </span>
                <span className="flex flex-row items-center gap-2">
                  <GrLocation className="w-6 h-6 text-mainColor" /> 4.5
                </span>
                <button className="bg-green-600/80 text-white text-sm p-2 rounded-full">
                  450 reviews
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/12 shadow-lg p-4 rounded-md">
            <DetailsPagePricing />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default index;
