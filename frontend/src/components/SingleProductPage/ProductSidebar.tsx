import React, { useState } from "react";
import Box from "../common/Box";
import Pricing from "./Pricing";
import { motion } from "framer-motion";
import { BsCurrencyRupee, BsTelephone } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../common/Button";
import { deviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";
import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";

interface ProductSidebarProps {
  price: string | number;
  salePrice: string | number;
  discount: string | number;
  date?: Date;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({
  price,
  salePrice,
  discount,
  date,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [day, setDay] = useState<DayValue>(null);
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  console.log(day);

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const DecrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      {isTablet ? (
        <Box className="fixed bottom-0 right-0 w-full z-50 bg-variant p-1 shadow-neutral-600">
          <span className="inline-flex items-baseline text-xs sm:text-sm text-white">
            Starting from
          </span>
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-0">
              <span className="flex items-center justify-center text-2xl font-semibold tracking-wider text-white">
                <BsCurrencyRupee className="text-2xl" />
                {salePrice}
              </span>
              <span className="flex items-center line-through text-slate-400 decoration-slate-400 decoration-2">
                <BsCurrencyRupee />
                {price}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.span
                className="shadow-md p-1 text-3xl rounded-sm cursor-pointer text-white"
                whileTap={{ scale: 1.2 }}
              >
                <FiMinus
                  onClick={DecrementHandler}
                  className="bg-slate-200 rounded-sm text-variant"
                />
              </motion.span>
              <input
                type="number"
                min={1}
                value={quantity}
                className="p-2 w-12 sm:w-16 h-10 rounded-md text-lg font-semibold text-center appearance-none"
              />
              <motion.span
                className="shadow-md p-1 text-3xl rounded-sm cursor-pointer text-white"
                whileTap={{ scale: 1.2 }}
              >
                <FiPlus
                  onClick={incrementHandler}
                  className="bg-slate-200 rounded-sm text-variant"
                />
              </motion.span>
            </div>
            <motion.button
              type="button"
              className="text-sm sm:text-base  p-2 py-2 px-5 rounded-sm text-variant font-medium bg-white"
              whileTap={{ scale: 1.2 }}
            >
              Book Now
            </motion.button>
          </div>
        </Box>
      ) : (
        <Box className="bg-white mt-0">
          <div className="flex flex-col md:gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <p>Starting from</p>
                <span className="flex items-center line-through ">
                  <BsCurrencyRupee />
                  {price}
                </span>
              </div>
              <button className="p-2 bg-orange-200/80 text-primary font-medium rounded-md max-w-fit">
                {discount}% Off
              </button>
            </div>
            <div className="flex items-center justify-between gap-0">
              <div className="flex items-center">
                <span className="flex items-center justify-center text-2xl font-semibold text-variant">
                  <BsCurrencyRupee />
                  {salePrice}
                </span>
                <span className="text-primary self-end">/Person</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="date" className="rounded-md" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-textBlack">
                Just pay 25% now to book your seat
              </p>
              <div className="flex items-center gap-2">
                <motion.span
                  className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
                  whileTap={{ scale: 1.1 }}
                >
                  <FiMinus />
                </motion.span>
                <input
                  type="text"
                  min={0}
                  className="w-12 h-8 rounded-md text-base font-semibold"
                />
                <motion.span
                  className="shadow-md p-1 text-3xl rounded-md cursor-pointer"
                  whileTap={{ scale: 1.1 }}
                >
                  <FiPlus />
                </motion.span>
              </div>
            </div>

            <Button size="xl" variant="primary" href="/cart">
              Book Now
            </Button>
          </div>
        </Box>
      )}

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
            <Link href={"tel:+917387960861"}>+91 7387960861</Link>
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
