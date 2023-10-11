import React from "react";
import BookingCard from "./BookingCard";

const BookingList = ({ data }: any) => {
  console.log("data", data);
  return (
    <>
      {data.length > 0
        ? data?.map((item: any, index: any) => (
            <BookingCard item={item} key={index} />
          ))
        : null}
    </>
  );
};

export default BookingList;
