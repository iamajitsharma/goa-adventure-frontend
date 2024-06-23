"use client";
import Box from "components/UI/Box";
import { Button } from "components/UI/Button";
import Input from "components/UI/Input";
import { useProduct } from "hooks/useProduct";
import { useState } from "react";
import CustomBadge from "./CustomBadge";
import Alert from "components/UI/Alert";
import { v4 as uuid } from "uuid";

const depositArr = [
  { id: uuid(), title: "15%", percent: 15 },
  { id: uuid(), title: "25%", percent: 25 },
  { id: uuid(), title: "50%", percent: 50 },
  { id: uuid(), title: "Full Payment", percent: 100 },
];

const OrderSummary = ({ hideBtn }: { hideBtn?: boolean }) => {
  const [couponCode, setCouponCode] = useState("");
  const { products, cartSummary, applyCouponCode, handleDeposit } =
    useProduct();

  // Calculate discountAmt if salePrice is provided
  const discountAmt = (cartSummary.subTotal * cartSummary.discount) / 100;

  //Calculate total amount
  const totalAmount = cartSummary.subTotal - discountAmt;

  //calculate deposit amount
  const depositAmount = Number(totalAmount * cartSummary.depositPercent) / 100;

  // Calculate balanceAmount
  const balanceAmount = totalAmount - depositAmount;

  return (
    <div>
      {cartSummary.discount > 0 && (
        <Alert
          content={`Nice! you saved ₹${discountAmt} on your order`}
          isOpen={cartSummary.coupon}
          color="success"
        />
      )}

      {cartSummary.couponFound === false && (
        <Alert
          content={` ${cartSummary.coupon} is Invalid Coupon Code`}
          isOpen={cartSummary.coupon}
          color="danger"
        />
      )}

      <h4 className="my-4 font-medium text-orange-500 border-b">
        Order Summary
      </h4>
      <div className="px-2">
        <div className="flex items-center justify-between text-base font-medium">
          <span>Sub Total:</span>
          <span>{cartSummary.subTotal.toFixed(0)}</span>
        </div>
        {cartSummary.discountAmount > 0 && (
          <div className="border-b pb-2 flex items-center justify-between text-sm font-medium text-green-600">
            <span className="">Discount: {cartSummary.coupon} applied</span>
            <span>-{cartSummary.discountAmount.toFixed(0)}</span>
          </div>
        )}

        <div className="pt-2 flex items-center justify-between text-base font-medium">
          <span>Total:</span>
          <span>{totalAmount.toFixed(0)}</span>
        </div>

        <div className="flex items-center justify-between text-sm font-medium text-rose-400">
          <span className="">Future Payment</span>
          <span>{balanceAmount.toFixed(0)}</span>
        </div>
      </div>
      {/* Advance Payment */}

      <div>
        <div className="w-full py-3 px-2 bg-orange-100 shadow rounded my-2">
          <h5 className="text-sm text-black font-medium">
            Simply make a deposit to reserve your spot.
          </h5>
        </div>
        <div className="flex items-center gap-4">
          {depositArr.map((item) => (
            <Button
              variant={"outline"}
              size={"xs"}
              onClick={() => handleDeposit(totalAmount, item.percent)}
              key={item.id}
              className={`border-blue-500 ${item.percent === cartSummary.depositPercent ? "bg-blue-500 text-white" : "text-blue-500"} hover:bg-blue-500 hover:text-white`}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>

      <div className="border-b mt-3 py-3 px-2 rounded flex items-center justify-between text-base font-medium bg-blue-500 text-white">
        <span className="">
          Advance Payment {`${cartSummary.depositPercent}%`}
        </span>
        <span>INR {cartSummary?.depositAmount?.toFixed(0)}</span>
      </div>

      <div className="mt-8">
        <p className="text-sm">Have a promo code?</p>
        <div className="relative rounded-md shadow-sm max-w-sm mb-2">
          <input
            type="text"
            name="price"
            id="price"
            className="bg-gray-100 outline-none block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black text-base font-normal"
            placeholder="Apply Coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              size={"sm"}
              className="rounded-l-none"
              onClick={() => {
                applyCouponCode(couponCode);
                setCouponCode("");
              }}
            >
              Apply Coupon
            </Button>
          </div>
        </div>
      </div>
      {hideBtn || (
        <div className="pt-3 ">
          <Button size={"xl"} variant={"primary"} href="/checkout">
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
