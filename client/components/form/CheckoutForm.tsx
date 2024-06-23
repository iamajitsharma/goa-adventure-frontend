"use client";
import { useRef, useState } from "react";
import Box from "components/UI/Box";
import { Button } from "components/UI/Button";
import Input from "components/UI/Input";
import Select from "components/UI/Select";
import TextArea from "components/UI/TextArea";
import { useForm } from "react-hook-form";
import { useProduct } from "hooks/useProduct";
import axios from "axios";
import { initializeRazorpay } from "helper/utils";
import toast from "react-hot-toast";
import { saveOrder } from "helper/utils";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import crypto from "crypto-js";

const CheckoutForm = () => {
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [meetingPoint, setMeetingPoint] = useState("");
  const [note, setNote] = useState("");

  const bookingRef = useRef(null);
  const router = useRouter();
  const { products, cartSummary, clearCartItem } = useProduct();
  const { depositAmount } = cartSummary;

  const handlePayment = async (status: any, orderDetails: any = {}) => {
    //Loop through the product
    const bookedProducts = products.map((item: any) => {
      return {
        _key: uuid(),
        product_title: item.product_title,
        image: item.image,
        sale_price: item.salePrice,
        quantity: item.quantity,
        total_amount: item.totalPrice,
        trip_date: item.activityDate,
        meeting_point: item.meeting_point,
      };
    });

    // Calculation of balance amount
    const balanceAmount =
      cartSummary.subTotal - cartSummary.discountAmount - depositAmount;
    const orderTotal = cartSummary.subTotal - cartSummary.discountAmount;

    const bookingDetails = {
      customer_name: fullName,
      customer_number: Number(mobileNumber),
      customer_email: emailId,
      products: bookedProducts,
      deposit_percent: cartSummary.depositPercent,
      deposit_amount: cartSummary.depositAmount,
      pending_amount: balanceAmount,
      order_total: orderTotal,
      coupon_code: cartSummary.coupon,
      customer_note: note,
      order_status: status,
      order_id: orderDetails.orderId, // Generate dynamically in real scenario
      payment_id: orderDetails.paymentId, // Generate dynamically in real scenario
    };

    saveOrder(bookingDetails);
  };

  const callRazorPay = async (event: any) => {
    try {
      event.preventDefault();

      const { data } = await axios.post("/api/payment", {
        amount: cartSummary.depositAmount,
        currency: "INR",
      });

      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }

      var options = {
        key: process.env.razorPayKey, // Enter the Key ID generated from the Dashboard
        name: "Safar Travel Express",
        currency: data?.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for the payment",
        handler: async function (response: any) {
          // Validate payment at server - using webhooks is a better idea.

          const orderId = response.razorpay_order_id;
          const paymentId = response.razorpay_payment_id;
          const secretKey = process.env.razorPaySecret;

          if (!secretKey) {
            throw new Error(
              "Razorpay credential is not set in the environment."
            );
          }
          const succeeded =
            crypto
              .HmacSHA256(`${orderId}|${paymentId}`, secretKey)
              .toString() === response.razorpay_signature;

          // If successfully authorized. Then we can consider the payment as successful.
          if (succeeded) {
            handlePayment("succeeded", {
              orderId,
              paymentId,
            });

            //Removing item from the cart
            clearCartItem();
            router.push(
              `/payment-success?order_id=${response.razorpay_payment_id}`
            );
          } else {
            handlePayment("failed", {
              orderId,
              paymentId,
            });

            router.push(
              `/order-failed?order_id=${response.razorpay_payment_id}`
            );
          }
        },
      };

      let windowRazorPay = window as any;
      const paymentObject = new windowRazorPay.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle error
    }
  };

  return (
    <form ref={bookingRef}>
      <h4 className="font-medium">Billing Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
        <Input
          type="text"
          placeholder="Enter your fullname"
          value={fullName}
          id="fullname"
          required="Please enter your fullname"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <Input
          type="text"
          value={mobileNumber}
          placeholder="Enter your mobile no"
          id="mobilenumber"
          required="Please enter your mobile number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter your email address"
          id="email"
          onChange={(e) => setEmailId(e.target.value)}
          value={emailId}
        />
        {/* 
        <Select
          items={products[0]?.meeting_point}
          id="meeting_point"
          defaultItem="Select"
          onChange={(e) => setMeetingPoint(e.target.value)}
          value={meetingPoint}
        /> */}

        <TextArea
          id="message"
          value={note}
          placeholder="Special Request"
          className="col-span-full"
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-4 justify-end">
        <Button variant={"outline"} href="/cart">
          Back
        </Button>
        <Button type="submit" onClick={callRazorPay}>
          Proceed To Pay
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
