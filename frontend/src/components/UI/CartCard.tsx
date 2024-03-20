import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import placeholderImg from "../../../public/assets/placeholder.jpg";
import Image from "next/image";
import { MdCurrencyRupee } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../Responsive";
import { motion } from "framer-motion";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import useProduct from "@/hook/useProduct";

interface CartCardProps {
  image: any | null;
  title: string | null;
  price: number | null;
  quantity: number | null;
}

const CartCard: React.FC<CartCardProps> = ({
  image,
  title,
  price,
  quantity,
}) => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const { product, setProduct, discardProduct } = useProduct();

  useEffect(() => {
    let ankit = product;
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="shadow-3xl flex flex-row gap-2 justify-start w-full h-24 rounded-md overflow-hidden font-poppins">
          <div className="shrink-0 max-w-24">
            <Image
              src={image}
              alt=""
              className="w-24 h-24"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full p-1">
            <div className="flex flex-col justify-between w-full h-full">
              <h4 className="font-semibold text-sm">{title}</h4>
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center font-semibold text-lg">
                  <MdCurrencyRupee />
                  {price}
                </span>

                <span className="text-base font-semibold">
                  Quantity : {quantity}
                </span>
                <span
                  className="text-2xl text-rose-500"
                  onClick={() => discardProduct({})}
                >
                  <AiOutlineDelete />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow-3xl flex flex-row gap-0 justify-start w-full h-24 rounded-md overflow-hidden font-poppins">
          <div className="shrink-0 max-w-32">
            <Image
              src={image}
              alt=""
              className="w-32 h-24 object-cover"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center gap-3 w-full h-full px-2">
              <h4 className="whitespace-normal max-w-[300px] text-sm font-semibold leading-loose">
                {title}
              </h4>
              <span className="flex items-center font-semibold text-lg">
                <MdCurrencyRupee />
                {price}
              </span>
              <span className="text-sm font-semibold">Qty : {quantity}</span>
              <span
                className="text-2xl text-rose-500"
                onClick={() => discardProduct({})}
              >
                <AiOutlineDelete />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartCard;
