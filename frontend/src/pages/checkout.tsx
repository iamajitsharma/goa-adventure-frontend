import React, { useState } from "react";
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

const Checkout = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [checkedInfo, setCheckedInfo] = useState(false);
  const [custMeetingPoint, setMeetingPoint] = useState("");
  const [custNote, setCustomerNote] = useState("");
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

      //console.log("HEELLO");

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
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
        },
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
        // "https://backend.goaadventure.in/v1/payment/create-order",
        "http://localhost:4000/v1/payment/create-order",
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
        key: "rzp_test_lcf9GSjJoWx5Gk", // Enter the Key ID generated from the Dashboard
        name: "Safar Travel Express",
        currency: data?.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your payment",
        image:
          "data:image/png;base64,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",
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
      if (customer.user.id) {
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
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full gap-4 pt-4">
                <div className="w-full border-none outline-none bg-white">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="w-full border-none focus:ring-0 outline-none bg-gray-100 placeholder:text-sm placeholder:text-gray-800"
                    value={customer?.user?.name}
                    required
                  />
                </div>
                <div className="w-full border-none outline-none bg-white ">
                  <input
                    type="text"
                    placeholder="Mobile No."
                    value={customer?.user?.mobile_number}
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
                    {meeting_point.map((point: any) => (
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
