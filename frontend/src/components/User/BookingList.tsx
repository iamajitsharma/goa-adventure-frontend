import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import { Button } from "../common/Button";
import { dateFormate } from "@/lib/operations";

const BookingList = ({ data }: any) => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [upcomingBooking, setUpcomingBooking] = useState([]);
  const [isActive, setIsActive] = useState(true);

  async function selectionSort(bookInfo: any) {
    for (let i = 0; i < bookInfo.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < bookInfo.length; j++) {
        if (
          Number(new Date(bookInfo[j]?.start_date)) <
          Number(new Date(bookInfo[lowest]?.start_date))
        ) {
          lowest = j;
        }
      }
      if (lowest !== i) {
        // Swap
        [bookInfo[i], bookInfo[lowest]] = [bookInfo[lowest], bookInfo[i]];
      }
    }
    return bookInfo;
  }
  // console.log(selectionSort([3, 5, 1, 2])); // [1, 2, 3, 5]
  async function setData() {
    const currentDate = dateFormate(new Date());
    const todaysDate = Number(new Date());
    console.log("Current date", todaysDate);
    console.log("Date ", data);
    const histroyBooking = data?.filter(
      (booking: any) => Number(new Date(booking.start_date)) < todaysDate
    );

    const futureBooking = data?.filter(
      (booking: any) => Number(new Date(booking.start_date)) >= todaysDate
    );
    setBookingHistory(await selectionSort(histroyBooking));
    setUpcomingBooking(await selectionSort(futureBooking));
  }
  useEffect(() => {
    setData();
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
              {upcomingBooking.length > 0 &&
                upcomingBooking?.map((item: any, index) => (
                  <BookingCard item={item} key={index} />
                ))}
            </div>
          ) : (
            <div className="py-2">
              {bookingHistory.length > 0 &&
                bookingHistory?.map((item: any, index) => (
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
