import React from "react";
import BookingCard from "./BookingCard";

const BookingList = ({ data }: any) => {
  return (
    <>
      {data?.map((item: any, index: any) => (
        <BookingCard item={item} key={index} />
      ))}
    </>
  );
};

export default BookingList;
