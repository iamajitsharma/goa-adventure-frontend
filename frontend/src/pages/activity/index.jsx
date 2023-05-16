import React from "react";
import ListingCard from "../../components/listings/ListingCard";
import Image from "next/image";
import ActivityCover from "../../../public/assets/activityCover.png";
import Container from "../../components/Container";
import ActivityData from "../../data/ActivityData.ts";

const index = () => {
  return (
    <section className="">
      <div className="relative h-[300px]">
        <Image
          src={ActivityCover}
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute top-1/2 text-center w-full">
          <h2 className="text-4xl text-white font-bold">Things To Do</h2>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-2 gap-4 px-5 md:grid-cols-4 md:max-w-7xl mx-auto py-8">
          {ActivityData?.map((item) => (
            <ListingCard
              key={item.id}
              title={item.title}
              image={item.images[0].image}
              salePrice={item.salePrice}
              regularPrice={item.regularPrice}
              href={`/activity/${item.id}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default index;
