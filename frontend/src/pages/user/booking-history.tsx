import React from "react";
import Container from "@/components/common/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import UserContent from "@/components/User/UserContent";
import BookingList from "@/components/User/BookingList";

const data = [
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Complete",
  },
  {
    title: "Goa Watersports",
    state: "Calangute",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Refunded",
  },
  {
    title: "Adventure Boat Party",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Canceled",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Pending",
  },
  {
    title: "Scuba Diving Grand Island",
    state: "Goa",
    country: "India",
    bookingDate: "25th Dec 2023",
    status: "Complete",
  },
];

const BookingHistory = () => {
  const router = useRouter();
  console.log(router);
  return (
    <UserContent>
      <h3 className="text-xl font-poppins py-2 font-semibold tracking-wider uppercase">
        Bookings
      </h3>
      <BookingList data={data} />
    </UserContent>
  );
};

export default BookingHistory;
