import React, { useState, useEffect } from "react";
import Box from "../common/Box";
import Pricing from "./Pricing";
import { motion } from "framer-motion";
import { BsCurrencyRupee, BsTelephone } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";
import useProduct from "@/hook/useProduct";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

interface ProductSidebarProps {
  price: string | number;
  salePrice: string | number;
  discount: string | number;
  date?: Date;
  product_id: number;
  title: string;
  deposit_value: any;
  product_img?: any;
  meeting_point: string[];
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({
  price,
  salePrice,
  discount,
  date,
  product_id,
  title,
  deposit_value,
  product_img,
  meeting_point,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [toDate, setToDate] = useState<any>(null);
  const [fromDate, setFromDate] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const isOpen = useSelector(
    (state: any) => state.bookingModal.isBookingModalOpen
  );

  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const { product, setProduct, discardProduct } = useProduct();

  useEffect(() => {
    setShowModal(true);
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, []);

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const DecrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const router = useRouter();
  console.log("TO Date", toDate);

  //Handle Add to card
  const handleAddToCart = () => {
    const cartItem = {
      quantity,
      actualPrice: price,
      priceToBePaid: salePrice,
      toDate,
      fromDate,
      product_id,
      title,
      deposit_value,
      product_img,
      meeting_point,
    };

    discardProduct(cartItem);
    setProduct(cartItem);

    router.push(`/cart`);
  };

  return (
    <>
      <Box
        className="
      block
      md:hidden  
      rounded-none 
      fixed 
      bottom-0 
      right-0 
      w-full 
      z-50 
      bg-white 
      p-1 
      shadow-neutral-600"
      >
        <Button
          size="lg"
          variant="primary"
          className="w-full"
          onClick={() => setShowModal(true)}
        >
          Book Now
        </Button>
      </Box>

      {/* Pricing Section for small device */}
      {showModal && (
        <div
          className="
        fixed 
        overflow-hidden 
        inset-0 z-[999] 
        outline-none 
        focus:outline-none 
        bg-neutral-800/70 
        w-screen 
        h-screen
        flex
        items-end
        "
        >
          <div
            className={` relative 
          bg-white 
          backdrop-blur-lg 
          rounded-t-[2.5rem] 
          p-6 
          overflow-hidden 
          shadow-xl 
          transition-all 
          ease-in-out 
          w-full
          h-[60vh] 
          pb-14
          duration-300
          ${showModal ? "translate-y-0" : "translate-y-full"}
         ${showModal ? "opacity-100" : "opacity-0"}
         `}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-700 font-semibold">{title}</h3>
              <h5 className="text-2xl text-primary font-semibold">
                {`₹${salePrice}`}
              </h5>
            </div>

            <div className="w-full h-full pt-8 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium">Select Date</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-md border-2 border-gray-600"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-base font-medium">Adult: {quantity}</span>
                <div className="flex items-center gap-1">
                  <Button onClick={() => DecrementHandler()}>
                    <FiMinus className="rounded-sm text-white" />
                  </Button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={() => {}}
                    className="p-2 w-12 sm:w-16 h-10 rounded-md text-lg font-semibold text-center appearance-none"
                  />

                  <Button onClick={() => incrementHandler()}>
                    <FiPlus className="rounded-sm text-white" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Section For Medium Device */}
      <Box className=" hidden md:block bg-white mt-0">
        <div className="flex flex-col md:gap-3 font-roboto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-base text-gray-500">
              <p>Starting from</p>
              <span className="flex items-center line-through">
                <BsCurrencyRupee />
                {price}
              </span>
            </div>
            <button className="p-2 bg-orange-200/80 text-primary font-medium rounded-md max-w-fit">
              {discount}% Off
            </button>
          </div>
          <div className="flex items-center justify-between gap-0 md:flex-col md:gap-4 lg:flex-row ">
            <div className="flex items-center">
              <span className="flex items-center justify-center text-3xl font-semibold text-variant">
                <BsCurrencyRupee />
                {salePrice}
              </span>
              <span className="text-primary self-end text-base"> /Person</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="rounded-md cursor-pointer"
                onChange={(e) => setFromDate(e.target.value)}
              />

              {/* <input
                  type="date"
                  className="rounded-md"
                  onChange={(e) => setToDate(e.target.value)}
                /> */}
            </div>
          </div>
          <div className="flex justify-between items-center md:flex-col lg:flex-row">
            <p className="md:hidden lg:block text-xs text-textBlack">
              Just pay 25% now to book your seat
            </p>
            <div className="flex items-center gap-2">
              <motion.span
                className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
                whileTap={{ scale: 1.1 }}
                onClick={() => DecrementHandler()}
              >
                <FiMinus />
              </motion.span>

              <input
                type="text"
                min={1}
                value={quantity}
                className="w-12 h-8 rounded-md text-base font-semibold"
              />

              <motion.span
                className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
                whileTap={{ scale: 1.1 }}
                onClick={() => incrementHandler()}
              >
                <FiPlus />
              </motion.span>
            </div>
          </div>

          <Button
            size="xl"
            variant="primary"
            // href="/cart"
            disabled={fromDate ? false : true}
            onClick={() => {
              console.log(
                "Selected PRoduct",
                quantity,
                price,
                salePrice,
                toDate,
                fromDate,
                product_id,
                title
              );
              discardProduct({
                quantity,
                actualPrice: price,
                priceToBePaid: salePrice,
                toDate,
                fromDate,
                product_id,
                title,
                deposit_value,
                product_img,
                meeting_point,
              });
              setProduct({
                quantity,
                actualPrice: price,
                priceToBePaid: salePrice,
                toDate,
                fromDate,
                product_id,
                title,
                deposit_value,
                product_img,
                meeting_point,
              });
              router.push(`/cart`);
            }}
          >
            Book Now
          </Button>
        </div>
      </Box>

      {/* Contact Information */}
      <Box className="hidden md:block bg-white">
        <h5 className="text-xl font-semibold text-variant">
          For more information
        </h5>
        <div className="flex flex-col gap-3 pt-4 pl-2">
          <motion.span
            className="flex items-center gap-2 text-base font-semibold tracking-wider"
            whileHover={{ scale: 1.1 }}
          >
            <BsTelephone className="text-primary text-xl" />
            <Link href={"tel:+917387960861"}>+91 7387960861</Link>
          </motion.span>
          <motion.span
            className="flex items-center gap-2 text-base font-semibold tracking-wider"
            whileHover={{ scale: 1.1 }}
          >
            <BsTelephone className="text-primary text-xl" />
            <Link href={"tel:+918237060861"}>+91 8237060861</Link>
          </motion.span>
        </div>
        <motion.button
          type="button"
          className="flex items-center justify-center gap-1 text-white bg-green-600/80 py-2 px-4 w-full rounded-md my-4"
          whileTap={{ scale: 1.2 }}
        >
          <ImWhatsapp fontSize={24} /> WhatsApp
        </motion.button>
      </Box>
    </>
  );
};

export default ProductSidebar;
