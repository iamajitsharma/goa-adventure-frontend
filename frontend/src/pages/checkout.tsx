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

const Checkout = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedInfo, setCheckedInfo] = useState(false);
  const [custMeetingPoint, setMeetingPoint] = useState("");
  const [custNote, setCustomerNote] = useState("");
  const [bookingInfo, setBookingInfo] = useState({"name": "", "email": "", "mobileNumber": "", "isGuest": false});
  const bookingForm = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});
  const { product } = useProduct();
  const { customer }: any = useCustomer();

  //Meeting Points
  const meeting_point: any = product?.meeting_point;
  console.log(meeting_point);
  console.log("Custyomer meeting pount", custMeetingPoint);
  console.log("Customer note", custNote);
  console.log("PRoudcts in redux", product);
  console.log("Customer inr redux", customer);
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  console.log("PRoduct", product);
  const subTotal = Number(product.actualPrice) * Number(product.quantity);
  const discount =
    (Number(product.actualPrice) - Number(product.priceToBePaid)) *
    Number(product.quantity);
  // const finalPayment = Number(product.priceToBePaid) * Number(product.quantity);
  const finalPayment = subTotal - discount;
  const payNow =
    (finalPayment * Number(product.deposit_value) * Number(product.quantity)) /
    100;
  const futurePayment = subTotal - discount - payNow;
  const { openLogin, closeLogin } = useAuthModal();

  // useEffect(() => {
  //   if (!customer?.user?.id) {
  //     openLogin();
  //   }
  //   if (!product?.product_id) {
  //     console.log("Hitted");
  //     router.push("/");
  //   }
  // });

  async function callRazorPay() {
    if (checkedInfo) {
      // const subTotal = Number(product.actualPrice) * Number(product.quantity);
      // const discount =
      //   (Number(product.actualPrice) - Number(product.priceToBePaid)) *
      //   Number(product.quantity);
      // const finalPayment =
      //   Number(product.priceToBePaid) * Number(product.quantity);
      // const payNow = (subTotal * Number(product.deposit_value)) / 100;
      const futurePayment = finalPayment - payNow;
      const amount = payNow;
      // const booking_id = 2;
      const customer_id = customer?.user.id;
      const product_id = product?.product_id;
      const quantity = product.quantity;
      bookingInfo.isGuest = customer != undefined ? false: true;
      if(bookingInfo.isGuest && (bookingInfo.name == "" || bookingInfo.mobileNumber == "")){
        alert("Please complete the billing information form");
      }
      //console.log("HEELLO");

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      console.log("REsponse", {
        customerPrice: {
          totalAmount: subTotal.toString(),
          depositAmount: payNow.toString(),
          payingFull: false,
        },
        productDetails: {
          productId: product?.product_id,
          customerId: customer?.user.id,
          quantity: product?.quantity,
          startDate: product?.fromDate,
          endDate: product?.toDate,
          meeting_point: custMeetingPoint,
          note: custNote,
        },
      });
      var raw = JSON.stringify({
        customerPrice: {
          totalAmount: subTotal.toString(),
          depositAmount: payNow.toString(),
          payingFull: false,
        },
        productDetails: {
          productId: product?.product_id,
          customerId: customer?.user.id,
          quantity: product?.quantity,
          startDate: product?.fromDate,
          endDate: product?.toDate,
          meeting_point: custMeetingPoint,
          note: custNote,
        },
        bookingInfo
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      // fetch("http://localhost:4000/v1/payment/create-order", requestOptions)
      //   .then(response => response.text())
      //   .then(result => //console.log(result))
      //   .catch(error => //console.log('error', error));

      // Make API call to the serverless API

      const data: any = await fetch(
        "https://backend.goaadventure.in/v1/payment/create-order",
        // "http://localhost:8000/v1/payment/create-order",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: raw,
          redirect: "follow",
        }
      ).then((t) => {
        //console.log("The response T", t);
        return t.json();
      });

      //console.log("Data consiting of order", data);
      const res = await initializeRazorpay();
      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }

      var options: any = {
        key: "rzp_live_4McSVg85pQ5tAa", // Enter the Key ID generated from the Dashboard
        name: "Safar Travel Express",
        currency: data?.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your payment",

        handler: function (response: any) {
          // Validate payment at server - using webhooks is a better idea.
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          router.push(`/success?order_id=${response.razorpay_payment_id}`);
        },

        // prefill: {
        //   name: "Ajit Sharma",
        //   email: "ajitsharma@gmail.com",
        //   contact: "9999999999",
        // },
      };
      if(bookingInfo.isGuest){
        options.prefill = {
          name: bookingInfo.name,
          email: bookingInfo.email,
          contact: bookingInfo.mobileNumber,
        };
      }
      if (customer != null && customer.user.id) {
        options.prefill = {
          name: customer.user.name,
          email: customer.user.email,
          contact: customer.user.mobile_number,
        };
        // options.prefill.email = customer.email;
        // options.prefill.contact = customer.mobile_number;
      }

      let windowRazorPay = window as any;
      const paymentObject = new windowRazorPay.Razorpay(options);
      paymentObject.open();
    }
  }

  return (
    <Container>
      <div className="w-full h-full py-4">
        <h3 className="font-poppins font-semibold text-2xl">Checkout</h3>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row gap-4 items-start font-poppins my-4">
        <div className="w-full md:w-8/12 h-full">
          <div className="py-4 shadow-3xl p-2">
            <h4 className="font-semibold text-base">Billing Information</h4>
            <form ref={bookingForm}>
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-4 pt-4">
                <div className="w-full border-none outline-none bg-white">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-sm placeholder:text-gray-800"
                    value={customer?.user?.name}
                    onChange={(e) => setBookingInfo({name: e.target.value, email: bookingInfo.email, mobileNumber:bookingInfo.mobileNumber, isGuest: false})}
                    required
                  />
                </div>
                <div className="w-full border-none outline-none bg-white ">
                  <input
                    type="text"
                    placeholder="Mobile No."
                    value={customer?.user?.mobile_number}
                    onChange={(e) => setBookingInfo({name: bookingInfo.name, email: bookingInfo.email, mobileNumber:e.target.value, isGuest: false})}
                    className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-gray-800 placeholder:text-sm"
                    required
                  />
                </div>
                <div className="w-full border-none outline-none bg-white ">
                  <input
                    type="text"
                    placeholder="Email Id"
                    className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-gray-800 placeholder:text-sm"
                    required
                    value={customer?.user?.email}
                    onChange={(e) => setBookingInfo({name: bookingInfo.name, email: e.target.value, mobileNumber:bookingInfo.mobileNumber, isGuest: false})}
                  />
                </div>
                <div className="w-full border-none outline-none bg-white">
                  <select
                    className="w-full border-0 text-gray-800 ring-0 bg-gray-100 focus:ring-0  sm:text-sm sm:leading-6"
                    onChange={(e) => setMeetingPoint(e.target.value)}
                    required
                  >
                    <option disabled selected>
                      Select Meeting Point
                    </option>
                    {meeting_point?.map((point: any) => (
                      <option value={point}>{point}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full border-none outline-none bg-white col-span-full">
                  <textarea
                    onChange={(e) => setCustomerNote(e.target.value)}
                    rows={5}
                    placeholder="Special request"
                    className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-sm placeholder:text-gray-800"
                  ></textarea>
                </div>
              </div>
              {/* <div className="pt-6 text-right">
                <Button>Add Details</Button>
              </div> */}
            </form>
          </div>
        </div>
        <div className="w-full md:w-4/12  h-full shadow-3xl p-2">
          <h4 className="py-2 font-semibold text-xl">Order Summary</h4>
          <div className="flex items-center w-full shadow-3xl p-0 rounded-sm">
            <input
              type="text"
              placeholder="Have coupon code?"
              className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-sm"
            />
            <Button>Apply</Button>
          </div>
          <div className="w-full h-full flex flex-col gap-4 px-1 py-4 font-semibold text-sm">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>{subTotal}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Discount</span>
              <span> {discount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Future Payment</span>
              <span> {futurePayment}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pay Deposit</span>
              <span>{payNow}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-neutral-600 pt-4">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="p-2 rounded-sm"
                  onChange={(e) => setCheckedInfo(e.target.checked)}
                  required
                />
                I agree with the{" "}
                <Link href="/terms-conditions" className="text-blue-400">
                  terms & condition
                </Link>
              </label>
            </div>
          </div>
          {/* <Button size="xl" variant="dark" onClick={callRazorPay}> */}
          <Button size="xl" variant="dark" onClick={callRazorPay}>
            Proceed to Pay
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
