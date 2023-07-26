import React from "react";
import BookingCard from "./BookingCard";
import WishListCard from "./WishListCard";

const Wishlists = ({ data }: any) => {
  return (
    <>
      {data?.map((item: any, index: any) => (
        <WishListCard item={item} key={index} />
      ))}
    </>
  );
};

export default Wishlists;
