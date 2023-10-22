import React, { useState } from "react";
import Container from "@/components/common/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import UserContent from "@/components/User/UserContent";
import BookingList from "@/components/User/BookingList";
import { getUserBookings } from "@/lib/api";
import useCustomer from "@/hook/useCustomer";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const { customer, setCustomer }: any = useCustomer();
  const router = useRouter();
  async function fetchUserBookings(customerId: number) {
    const booking = await getUserBookings(customerId);

    if (!booking?.message) {
      setBookings(booking.bookings);
    }
  }

  React.useEffect(() => {
    if (customer?.user?.id) {
      fetchUserBookings(customer?.user?.id);
    }
  }, []);
  console.log("Booking History", bookings);
  //console.log(router);
  return (
    <UserContent>
      <h3 className="text-xl font-poppins py-2 font-semibold tracking-wider uppercase">
        Bookings
      </h3>
      {/* {bookings.length > 0 ? <BookingList data={bookings} /> : null} */}
    </UserContent>
  );
};

export default BookingHistory;
