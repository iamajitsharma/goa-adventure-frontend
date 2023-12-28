"use client";
import React, { useEffect, useState } from "react";
import CartCard from "@/components/UI/CartCard";
import Link from "next/link";
import { BsCartPlusFill } from "react-icons/bs";
import { activityData } from "../../public/assets/data/Data";
import { Button } from "@/components/common/Button";
import placeholderImg from "../../public/assets/placeholder.jpg";
import Container from "@/components/common/Container";
import { HiOutlineShoppingBag } from "react-icons/hi";
import useProduct from "@/hook/useProduct";
import useCustomer from "@/hook/useCustomer";
import useAuthModal from "@/hook/useAuthModal";
import { useRouter } from "next/router";

const cart = () => {
  const { product, setProduct, discardProduct } = useProduct();
  const router = useRouter();
  const { customer, setCustomer }: any = useCustomer();

  const subTotal = Number(product.actualPrice) * Number(product.quantity);
  const discount =
    (Number(product.actualPrice) - Number(product.priceToBePaid)) *
    Number(product.quantity);
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

  console.log(product, "From Cart");

  return (
    <Container>
      {product?.product_id ? (
        <div className="flex flex-col md:flex-row items-start justify-between h-full">
          <div className="w-full h-full p-2 font-poppins md:w-9/12 lg:w-8/12">
            <div className="w-full h-full font-poppins py-4 px-4 text-neutral-800">
              <div className="flex items-center justify-start w-full gap-2 text-xl font-semibold">
                <HiOutlineShoppingBag />
                <h3>MY CART</h3>
              </div>
              <p className="text-sm">Let's dive into the world of Adventure!</p>
            </div>
            {product ? (
              <CartCard
                title={product.title}
                image={product.product_img}
                price={product.actualPrice}
                quantity={product.quantity}
              />
            ) : (
              <div className="w-full h-full">
                <h3>Your cart is empty</h3>
                <Button href="/" size={"lg"}>
                  Book Now
                </Button>
              </div>
            )}
          </div>
          <div className="w-full h-full shadow-3xl p-2 font-poppins md:w-3/12 lg:w-4/12">
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
            </div>
            <Button
              size="xl"
              variant="dark"
              href="/checkout"
              // href={customer?.user?.id ? "/checkout" : undefined}
              // disabled={customer?.user?.id ? false : true}
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default cart;
