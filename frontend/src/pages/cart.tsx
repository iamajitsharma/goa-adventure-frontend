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

  // useEffect(() => {
  //   if (!customer?.user?.id) {
  //     openLogin();
  //   }
  //   if (!product?.product_id) {
  //     console.log("Hitted");
  //     router.push("/");
  //   }
  // });

  return (
    <Container className="py-6">
      {product?.id ? (
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
                title={product_title}
                image={image}
                price={price}
                quantity={quantity}
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
            <div className="w-full h-full flex flex-col gap-4 px-1 py-4 font-semibold text-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h4>{product_title}</h4>
                  <span className="text-xs font-light">
                    Total person : {quantity} x {product.price}
                  </span>
                </div>
                <span>{quantity * price}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-green-500 font-light">
                <h5>Discount {discount}% applied</h5>
                <span>{`-${discountAmt}`}</span>
              </div>
              <hr />
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
