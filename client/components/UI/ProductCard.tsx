import { FiClock, FiMapPin } from "react-icons/fi";
import { GoZap } from "react-icons/go";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCardProps } from "helper/interface";
import { calculateSalePrice } from "helper/utils";
import CustomBadge from "components/common/CustomBadge";
import { Button } from "./Button";

type ProductProps = {
  product: ProductCardProps;
};

const ProductCard = ({ product }: ProductProps) => {
  const {
    product_title,
    slug,
    category_slug,
    images,
    price,
    discount,
    duration,
    location,
    state,
  } = product;

  const salePrice = calculateSalePrice(price, discount);

  return (
    <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative  flex h-60 overflow-hidden rounded-xl aspect-square"
        href={`${category_slug}/${slug}`}
      >
        <Image
          className="object-cover"
          src={images || "/images/acdeehllopr.jpg"}
          alt="goa adventure"
          width={400}
          height={400}
        />

        {discount > 0 && (
          <CustomBadge
            content={`${discount}% OFF`}
            className="absolute top-0 left-0 m-2"
            bg="bg-orange-500"
          />
        )}
      </Link>
      <div className="mt-4 px-2 pb-4">
        <Link href="#">
          <h5 className="text-base font-semibold tracking-tight text-slate-900 line-clamp-1">
            {product_title}
          </h5>
        </Link>

        <div className="my-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-slate-900 flex items-center">
              <MdOutlineCurrencyRupee size={20} strokeWidth={2.5} />
              {salePrice}
            </span>
            <span className="text-base text-slate-900 line-through flex items-center gap-0">
              <MdOutlineCurrencyRupee size={16} />
              {price}
            </span>
          </div>
        </div>

        <div className="flex justify-between w-full text-sm pt-1">
          <span className="flex items-center gap-1">
            <FiMapPin size={16} />
            {state}
          </span>
          <span className="flex items-center gap-1">
            <FiClock size={16} />
            {duration}
          </span>
        </div>
      </div>
      <Button size={"sm"} href={`${category_slug}/${slug}`} variant={"dark"}>
        <GoZap size={16} className="mr-2" />
        Book Now
      </Button>
    </div>
  );
};

export default ProductCard;
