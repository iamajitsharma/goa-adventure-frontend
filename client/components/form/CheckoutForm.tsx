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
import { initializeRazorpay, sendBookingEmail } from "helper/utils";
import toast from "react-hot-toast";
import { saveOrder } from "helper/utils";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import crypto from "crypto-js";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CheckoutForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const { products, cartSummary, clearCartItem } = useProduct();
  const {
    subTotal,
    discount,
    discountAmount,
    depositAmount,
    depositPercent,
    coupon,
  } = cartSummary;

  const submitHandler = async (data: any) => {
    // destucturing the user informatin
    const { fullname, mobilenumber, email, message } = data;

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
    const balanceAmount = subTotal - discountAmount - depositAmount;
    const orderTotal = subTotal - discountAmount;

    const bookingDetails = {
      customer_name: fullname,
      customer_number: Number(mobilenumber),
      customer_email: email,
      products: bookedProducts,
      deposit_percent: depositPercent,
      deposit_amount: depositAmount,
      pending_amount: balanceAmount,
      order_total: orderTotal,
      coupon_code: coupon,
      customer_note: message,

      // order_id: orderDetails.orderId, // Generate dynamically in real scenario
      // payment_id: orderDetails.paymentId, // Generate dynamically in real scenario
    };

    try {
      const { data } = await axios.post("/api/create-order", {
        amount: Math.floor(cartSummary.depositAmount),
      });

      console.log(data, "Checkout Form");

      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }

      var options = {
        key: process.env.razorPayKey, // Enter the Key ID generated from the Dashboard
        name: "Safar Travel Express",
        currency: "INR",
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for the payment",
        handler: async function (response: any) {
          // Validate payment at server - using webhooks is a better idea.
          console.log(response, "from submit handler");
          console.log(response.razorpay_order_id);
          const orderId = response.razorpay_order_id;
          const paymentId = response.razorpay_payment_id;
          const secretKey = process.env.razorPayTestSecret;

          if (!secretKey) {
            throw new Error(
              "Razorpay credential is not set in the environment."
            );
          }
          const succeeded =
            crypto
              .HmacSHA256(`${orderId}|${paymentId}`, secretKey)
              .toString() === response.razorpay_signature;
          console.log(succeeded, "from submit handler");
          // If successfully authorized. Then we can consider the payment as successful.
          if (succeeded) {
            await saveOrder({
              ...bookingDetails,
              order_status: "success",
              order_id: orderId,
              payment_id: paymentId,
            });

            await sendBookingEmail({
              ...bookingDetails,
              discount_amount: discountAmount,
              discount_percent: discount,
            });
            toast.success("Thanks for placing an order with us", {
              position: "bottom-right",
            });

            //Removing item from the cart
            clearCartItem();
            router.push(
              `/payment-success?order_id=${response.razorpay_payment_id}`
            );
          } else {
            await saveOrder({
              ...bookingDetails,
              order_status: "failed",
              order_id: orderId,
              payment_id: paymentId,
            });

            await sendBookingEmail({
              ...bookingDetails,
              discount_amount: discountAmount,
              discount_percent: discount,
            });
            toast.error(
              "Payment failed. Our executive will contact you soon.",
              {
                position: "bottom-right",
              }
            );

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
    <form onSubmit={handleSubmit(submitHandler)}>
      <h4 className="font-medium">Billing Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
        <Input
          type="text"
          placeholder="Enter your fullname"
          id="fullname"
          register={register}
          required="Please enter your fullname"
          // onChange={(e) => {
          //   setFullName(e.target.value);
          // }}
          errors={errors}
        />
        <Input
          type="text"
          placeholder="Enter your mobile no"
          id="mobilenumber"
          required="Please enter your mobile number"
          register={register}
          errors={errors}
          // onChange={(e) => setMobileNumber(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter your email address"
          id="email"
          // onChange={(e) => setEmailId(e.target.value)}

          required="Enter your email address"
          errors={errors}
          register={register}
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
          placeholder="Special Request"
          className="col-span-full"
          // onChange={(e) => {
          //   setNote(e.target.value);
          // }}
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex gap-4 justify-end">
        <Button variant={"outline"} href="/cart">
          Back
        </Button>
        <Button type="submit">Proceed To Pay</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
