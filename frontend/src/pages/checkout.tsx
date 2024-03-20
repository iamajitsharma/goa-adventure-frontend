import React, { useEffect, useRef, useState } from "react";
import Input from "@/components/common/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Container from "@/components/common/Container";
import { FiSmartphone } from "react-icons/fi";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Select from "@/components/common/inputs/CustomSelect";
import CustomSelect from "@/components/common/inputs/CustomSelect";
import useProduct from "@/hook/useProduct";
import useCustomer from "@/hook/useCustomer";
import useAuthModal from "@/hook/useAuthModal";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "@/components/Responsive";
import Image from "next/image";
import { initializeRazorpay } from "@/lib/utils";
import { v4 as uuid } from "uuid";
import { client } from "@/lib/client";
import axios from "axios";
import crypto from "crypto-js";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const [customerNote, setCustomerNote] = useState("");

  const [customerMeetingPoint, setCustomerMeetingPoint] = useState("");

  const router = useRouter();

  // Responsive
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const bookingForm = useRef(null);

  //Get product from redux state
  const { product }: any = useProduct();

  // Destructure product properties
  const {
    id,
    image,
    product_title,
    meeting_point,
    price,
    salePrice,
    quantity,
    discount,
    deposit,
    activityDate,
    location,
  } = product;

  // Convert necessary properties to numbers
  const numericPrice = Number(price);
  const numericSalePrice = Number(salePrice);
  const numericQuantity = Number(quantity);
  const numericDeposit = Number(deposit);

  // Product Total Calculation
  // Calculate productTotal
  const productTotal = numericSalePrice * numericQuantity;

  // Calculate discountAmt if salePrice is provided
  const discountAmt = salePrice
    ? (numericPrice - numericSalePrice) * numericQuantity
    : 0;

  // Calculate depositAmount
  const depositAmount = (productTotal * numericDeposit) / 100;

  // Calculate balanceAmount
  const balanceAmount = productTotal - depositAmount;

  const handlePayment = async (status: any, orderDetails: any = {}) => {
    const customerInfo = {
      customer_name: bookingInfo.name,
      customer_number: bookingInfo.mobileNumber.toString(),
      customer_email: bookingInfo.email,
      product_title: product_title,
      quantity: quantity.toString(),
      total_amount: productTotal.toString(),
      deposit_amount: depositAmount.toString(),
      pending_amount: balanceAmount.toString(),
      trip_date: activityDate,
      trip_location: location,
      meeting_point: customerMeetingPoint,
      customer_note: customerNote,
    };

    const paymentDetails = {
      order_status: status,
      order_id: orderDetails.orderId,
      payment_id: orderDetails.paymentId,
    };

    const response = await axios.post("/api/payment-success", {
      ...customerInfo,
      ...paymentDetails,
    });

    console.log("Booking Created", response);
  };

  const callRazorPay = async (event: any) => {
    try {
      event.preventDefault();

      const { data } = await axios.post("/api/payment", {
        amount: depositAmount,
        currency: "INR",
      });

      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }

      var options = {
        key: "rzp_test_aL13HDonU0BODH", // Enter the Key ID generated from the Dashboard
        name: "Safar Travel Express",
        currency: data?.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your test donation",

        handler: async function (response: any) {
          // Validate payment at server - using webhooks is a better idea.
          console.log("Payment succeeded");
          console.log(response);
          const orderId = response.razorpay_order_id;
          const paymentId = response.razorpay_payment_id;
          const succeeded =
            crypto
              .HmacSHA256(`${orderId}|${paymentId}`, "F2xTcKTqLVfCHOrc2piHOLor")
              .toString() === response.razorpay_signature;

          // If successfully authorized. Then we can consider the payment as successful.
          if (succeeded) {
            handlePayment("succeeded", {
              orderId,
              paymentId,
            });

            router.push(`/success?order_id=${response.razorpay_payment_id}`);
          } else {
            handlePayment("failed", {
              orderId,
              paymentId,
            });
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
    <Container>
      <div className="w-full h-full py-4">
        <h3 className="font-poppins font-semibold text-2xl">Checkout</h3>
      </div>
      <div className="w-full h-full flex flex-col-reverse md:flex-row gap-4 items-start font-poppins my-4">
        <div className="w-full md:w-8/12 h-full">
          <div className="py-4 shadow-3xl p-2">
            <h4 className="font-semibold text-sm md:text-base">
              Billing Information
            </h4>
            <form ref={bookingForm}>
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-4 pt-4">
                <div className="w-full border-none outline-none bg-white">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="
                    w-full 
                    border-none 
                    focus:ring-0 
                    outline-none 
                    bg-gray-100 
                    text-sm
                    md:text-base
                    placeholder:text-sm 
                    placeholder:text-gray-800"
                    value={bookingInfo.name}
                    onChange={(e) => {
                      setBookingInfo({
                        name: e.target.value,
                        email: bookingInfo.email,
                        mobileNumber: bookingInfo.mobileNumber,
                      });
                    }}
                    required
                  />
                </div>
                <div className="w-full border-none outline-none bg-white ">
                  <input
                    type="text"
                    placeholder="Mobile No."
                    className="
                    w-full 
                    border-none 
                    focus:ring-0 
                    outline-none 
                    bg-gray-100
                    text-sm
                    md:text-base 
                    placeholder:text-gray-800 
                    placeholder:text-sm"
                    value={bookingInfo.mobileNumber}
                    onChange={(e) => {
                      setBookingInfo({
                        name: bookingInfo.name,
                        email: bookingInfo.email,
                        mobileNumber: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="w-full border-none outline-none bg-white ">
                  <input
                    type="text"
                    placeholder="Email Id"
                    className="
                    w-full 
                    border-none 
                    focus:ring-0 
                    outline-none 
                    bg-gray-100
                    text-sm
                    md:text-base 
                    placeholder:text-gray-800 
                    placeholder:text-sm"
                    value={bookingInfo.email}
                    onChange={(e) => {
                      setBookingInfo({
                        name: bookingInfo.name,
                        email: e.target.value,
                        mobileNumber: bookingInfo.mobileNumber,
                      });
                    }}
                    required
                  />
                </div>
                <div className="w-full border-none outline-none bg-white">
                  <select
                    className="
                    w-full 
                    border-0 
                    text-gray-800 
                    ring-0 
                    bg-gray-100 
                    text-sm
                    md:text-base
                    focus:ring-0  
                    sm:text-sm sm:leading-6"
                    value={customerMeetingPoint}
                    onChange={(e) => {
                      setCustomerMeetingPoint(e.target.value);
                    }}
                    required
                  >
                    <option defaultValue="">Select Meeting Point</option>
                    {meeting_point?.map((point: any) => (
                      <option value={point}>{point}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full border-none outline-none bg-white col-span-full">
                  <textarea
                    rows={5}
                    placeholder="Special request"
                    className="
                    w-full 
                    border-none 
                    focus:ring-0 
                    outline-none 
                    bg-gray-100 
                    text-sm
                    md:text-base
                    placeholder:text-sm 
                    placeholder:text-gray-800"
                    onChange={(e) => setCustomerNote(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="text-end">
                {isMobile ? (
                  <Button size="sm" variant="dark" onClick={callRazorPay}>
                    Proceed to Pay
                  </Button>
                ) : (
                  <Button size="lg" variant="dark" onClick={callRazorPay}>
                    Proceed to Pay
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-4/12  h-full shadow-3xl p-2">
          <h4 className="py-2 font-semibold text-sm md:text-base">
            Order Summary
          </h4>
          {/* <div className="flex items-center w-full shadow-3xl p-0 rounded-sm">
            <input
              type="text"
              placeholder="Have coupon code?"
              className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-sm"
            />
            <Button>Apply</Button>
          </div> */}
          <div
            className="
          w-full
          h-full 
          flex 
          flex-col 
          gap-4 
          px-1 
          py-4 
          font-semibold 
          text-xs 
          md:text-sm"
          >
            <div className="flex justify-between items-center">
              <div className="flex align-items-center gap-1">
                <Image
                  src={product.image}
                  alt=""
                  width={60}
                  height={60}
                  className="object-cover object-center rounded-md"
                />
                <div>
                  <h4>{product_title}</h4>
                  <span className="text-xs font-light">
                    Total person : {quantity} x {product.price}
                  </span>
                </div>
              </div>
              <span>{quantity * price}</span>
            </div>

            <div className="flex justify-between items-center text-xs text-green-500 font-light">
              <h5>Discount {discount}% applied</h5>
              <span>{`-${discountAmt}`}</span>
            </div>
            <hr className="w-full" />
            <div className="flex justify-between items-center">
              <h5>Sub Total</h5>
              <span>{productTotal}</span>
            </div>
            <div className="flex justify-between items-center">
              <h5>{product.deposit}% Deposit Amount</h5>
              <span>{depositAmount}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center text-rose-500">
              <h5>Balance Amount</h5>
              <span>{balanceAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
