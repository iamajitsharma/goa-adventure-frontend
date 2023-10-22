import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import { Button } from "../common/Button";
import { dateFormate } from "@/lib/operations";

const BookingList = ({ data }: any) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [upcomingBooking, setUpcomingBooking] = useState([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const currentDate = dateFormate(new Date());
    const todaysDate = Number(new Date());
    console.log("Current date", todaysDate);
    console.log("Date ", data);
    const histroyBooking = data?.filter(
      (booking: any) => Number(new Date(booking.start_date)) < todaysDate
    );

    setBookingHistory(histroyBooking);

    const futureBooking = data?.filter(
      (booking: any) => Number(new Date(booking.start_date)) >= todaysDate
    );

    setUpcomingBooking(futureBooking);

    console.log(currentDate);
  }, []);

  console.log(bookingHistory);
  console.log(upcomingBooking);

  //Toggle Handler
  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-around w-full cursor-pointer">
          <div
            className={`w-1/2 h-full shadow-3xl py-2 text-center font-medium ${
              isActive ? "bg-primary text-white" : ""
            }`}
            onClick={() => setIsActive(true)}
          >
            Upcoming
          </div>
          <div
            className={`w-1/2 h-full shadow-3xl py-2 text-center font-medium ${
              !isActive ? "bg-primary text-white" : ""
            }`}
            onClick={() => setIsActive(false)}
          >
            Booking History
          </div>
        </div>

        <div>
          {isActive ? (
            <div className="py-2">
              {upcomingBooking &&
                upcomingBooking.map((item: any, index) => (
                  <BookingCard item={item} key={index} />
                ))}
            </div>
          ) : (
            <div className="py-2">
              {bookingHistory &&
                bookingHistory.map((item: any, index) => (
                  <BookingCard item={item} key={index} />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingList;
