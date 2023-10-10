import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import successImage from "../../public/assets/success-tick.png";
import { useRouter, useSearchParams } from "next/navigation";
import { getBookingInfo } from "../lib/api";
export default function Invoice() {
  const [isGrowing, setIsGrowing] = useState(true);
  const [invoice, setInvoice] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log("INVOICE", invoice);

  async function getBookingData() {
    // setLoaded(false);
    if (searchParams.get("order_id")) {
      let order_id: any = searchParams.get("order_id");
      //console.log("Order id", order_id);
      const bookingInfo = await getBookingInfo(order_id);
      //console.log("bookingInfo", bookingInfo);
      setInvoice(bookingInfo.invoice);
    }
    // setLoaded(true);
  }
  useEffect(() => {
    getBookingData();
  }, []);

  const size = isGrowing ? "100px" : "120px";

  return (
    <div className="w-full h-[70vh] py-8 flex items-center justify-center flex-col font-poppins">
      Please click here to see the invoice
      <a href={invoice}>Invoice</a>
      You can style this page and show more information. We have information
      about his booking in bookingInfo
    </div>
  );
}
