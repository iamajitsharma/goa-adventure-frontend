import React, { useState } from "react";
import CartCard from "@/components/UI/CartCard";
import Link from "next/link";
import { BsCartPlusFill } from "react-icons/bs";
import { activityData } from "../../public/assets/data/Data";
import { Button } from "@/components/common/Button";
import placeholderImg from "../../public/assets/placeholder.jpg";
import Container from "@/components/common/Container";
import { HiOutlineShoppingBag } from "react-icons/hi";

const cart = () => {
  const [cartItem, setCartItem] = useState([
    {
      title: "Scuba Diving Malvan",
      image: placeholderImg,
      price: 2500,
      quantity: 1,
    },
  ]);

  return (
    <>
      <Container className="h-full">
        {cartItem?.length === 0 ? (
          ""
        ) : (
          <div className="w-full h-full font-poppins py-4 px-4 text-neutral-800">
            <div className="flex items-center justify-start w-full gap-2 text-xl font-semibold">
              <HiOutlineShoppingBag />
              <h3>MY CART</h3>
            </div>
            <p className="text-sm">Let's dive into the world of Adventure!</p>
          </div>
        )}
        {cartItem?.length === 0 ? (
          <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center font-poppins">
            <h1 className="text-2xl font-bold mb-4 ">No Items in Cart</h1>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col gap-3 px-0 py-2 md:flex-row lg:px-4">
            <div className="w-full md:w-9/12 lg:w-8/12 h-full">
              {cartItem?.map((item, index) => (
                <CartCard
                  title="Scuba Diving Grand Island"
                  image={placeholderImg}
                  price={1500}
                  quantity={1}
                />
              ))}
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
                  <span>2500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Discount</span>
                  <span>200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Future Payment</span>
                  <span>1675</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pay Deposit</span>
                  <span>625</span>
                </div>
              </div>
              <Button size="xl" variant="dark" href="/checkout">
                Proceed to checkout
              </Button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default cart;
