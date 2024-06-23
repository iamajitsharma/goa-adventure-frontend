import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import axios from "axios";
import { apiVersion, dataset, projectId, sanityToken } from "../sanity/env";
import toast from "react-hot-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateSalePrice = (price: number, discount: number) => {
  const salePrice = price - (price * discount) / 100;
  return salePrice.toFixed(0);
};

export function capitalizeFirstLetter(str: string) {
  // Check if the input is not empty
  if (str.length === 0) {
    return "";
  }
  // Capitalize the first letter and concatenate it with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const sendContactForm = async (data: any) => {
  try {
    const response = await axios.post("/api/sendemail", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to send message");
  }
};

export async function createEnquiry(data: any) {
  try {
    const response = await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
      {
        mutations: [
          {
            create: {
              _type: "enquiry",
              ...data,
            },
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sanityToken}`,
        },
      }
    );

    toast.success("Form submitted successfully", {
      position: "bottom-right",
    });

    return response;
  } catch (error) {
    toast.error("Form submission failed", {
      position: "bottom-right",
    });
  }
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

export async function saveOrder(data: any) {
  try {
    const response = await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
      {
        mutations: [
          {
            create: {
              _type: "onlinebooking",
              createdAt: new Date().toISOString(),
              ...data,
            },
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sanityToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    return error;
  }
}
