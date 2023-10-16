import React from "react";
import BookingCard from "./BookingCard";
import { Button } from "../common/Button";

const BookingList = ({ data }: any) => {
  console.log("data", data);
  return (
    <>
      {data.length > 0 ? (
        data?.map((item: any, index: any) => (
          <BookingCard item={item} key={index} />
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-4 font-poppins">
          <h2 className="text-2xl text-neutral-700 font-semibold ">
            No Bookings
          </h2>
          <p className="text-lg text-neutral-800">
            Unlock your next adventure with a simple click!
          </p>
          <Button variant="primary" href="/">
            Book Now
          </Button>
        </div>
      )}
    </>
  );
};

export default BookingList;
