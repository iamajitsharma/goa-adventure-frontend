import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { client } from "@/lib/client";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initializeRazorpay = () => {
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

export async function getProductByCategoryAndSlug(
  categoryName: any,
  productSlug: any
) {
  const searchQuery = `*[_type == "product" && slug.current == $productSlug && category->slug.current == $categoryName] | order(_updatedAt desc) [0]`;

  const params = {
    categoryName,
    productSlug,
  };

  try {
    const product = await client.fetch(searchQuery, params);
    return product;
  } catch (error: any) {
    console.error("Error fetching product", error.message);
    return null;
  }
}

export async function getProductByCategoryName(categoryName: string) {
  const searchQuery = `*[_type == "product" && category._ref in *[_type == "category" && category_name == $categoryName]._id]{
    _id,
product_title,
  "slug":slug.current,
  "category":category->category_name,
  "category_slug":category->slug.current,
  "images":images[0].asset->url,
price,
discount,
state,
location,
duration
  }`;

  const params = {
    categoryName,
  };
  try {
    const products = await client.fetch(searchQuery, params);
    return products;
  } catch (error: any) {
    console.log(error.message);
  }
}

export function thousandSeparator(number: number | null) {
  if (number === null) {
    return ""; // Or handle null case as appropriate
  }
  console.log(number);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
