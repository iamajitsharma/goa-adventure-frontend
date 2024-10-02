import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import axios from "axios";
import { apiVersion, dataset, projectId, sanityToken } from "../sanity/env";
import toast from "react-hot-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_URL = "https://goaadventure.in";

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
    const response = await axios.post("/api/sendemail", data); // Ensure the URL is correct
    return response.data;
  } catch (error) {
    console.error("Failed to send email:", error); // Log the error for debugging
    throw new Error("Failed to send message");
  }
};

export async function sendBookingEmail(data: any) {
  try {
    const response = await axios.post("/api/send-booking-mail", data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to send booking email");
  }
}

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

const logoBase64 =
  "data:image/png;base64,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";

export const generateInvoiceHTML = (data: any) => {
  const {
    customer_name,
    customer_email,
    customer_number,
    products,
    deposit_percent,
    deposit_amount,
    pending_amount,
    order_total,
    coupon_code,
    customer_note,
    discount_percent,
    discount_amount,
  } = data;

  console.log(products);

  const productRows = products
    .map(
      (product: any) => `
    <tr>
          <td style="border:solid windowtext 1.0pt;padding: 0in 5.4pt;">
            <p style='text-align:center;'>${product.product_title}</p>
          </td>
          <td style="border:solid windowtext 1.0pt;padding: 0in 5.4pt;">
            <p style='text-align:center;'>${product.trip_date}</p>
          </td>
          <td style="border:solid windowtext 1.0pt;padding: 0in 5.4pt;">
            <p style='text-align:center;'>${product.meeting_point}</p>
          </td>
          <td style="border:solid windowtext 1.0pt;padding: 0in 5.4pt;">
            <p style='text-align:center;'>${product.quantity}</p>
          </td>
          <td style="border:solid windowtext 1.0pt;padding: 0in 5.4pt;">
            <p style='text-align:center;'>${product.sale_price}</p>
          </td>
          <td style="border:solid windowtext 1.0pt;padding: 0in 5.4pt;">
            <p style='text-align:center;'>${product.total_amount}</p>
          </td>
        </tr>
  `
    )
    .join("");

  // Return the full invoice HTML
  return `
  <table
      style="
        width: 75%;
        margin-left: -0.2in;
        border-collapse: collapse;
        border: none;
        margin-right: calc(-1%);
      "
    >
      <tbody>
        <tr>
          <td
            rowspan="2"
            style="
              width: 90.3pt;
              border: solid #bfbfbf 1pt;
              background: #f2f2f2;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <img src=${logoBase64} style="width: 99px; height: 99px" />
            </p>
          </td>
          <td
            colspan="6"
            style="
              border: solid #bfbfbf 1pt;
              background: rgb(242, 242, 242);
              padding: 0.75pt;
            "
          >
            <p style="text-align: center"><strong>Invoice</strong></p>
            <p style="text-align: center">
              <strong style="color: #00b050">BOOKING CONFIRMATION</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td
            colspan="6"
            style="
              border: solid #bfbfbf 1pt;
              background: rgb(242, 242, 242);
              padding: 0.75pt;
            "
          >
            <p><strong>Safar Travel Express</strong></p>
            <p>Calangute Beach, Car Parking Goa: 403516</p>
            <p>+91 7387960861</p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p>Customer Name: ${customer_name}</p>
            <p>Mobile No: ${customer_number}</p>
            <p>Email Id: ${customer_email}</p>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center"><strong>Product Details</strong></p>
          </td>
        </tr>
        <tr>
          <td
            style="
              border: solid #bfbfbf 1pt;
              background: #1f4e79;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <strong style="color: white">Product Title</strong>
            </p>
          </td>
          <td
            style="
              border: solid #bfbfbf 1pt;
              background: #1f4e79;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <strong style="color: white">Trip Date</strong>
            </p>
          </td>
          <td
            style="
              border: solid #bfbfbf 1pt;
              background: #1f4e79;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <strong style="color: white">Meeting Point</strong>
            </p>
          </td>
          <td
            style="
              border: solid #bfbfbf 1pt;
              background: #1f4e79;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <strong style="color: white">Qty</strong>
            </p>
          </td>
          <td
            style="
              border: solid #bfbfbf 1pt;
              background: #1f4e79;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <strong style="color: white">Sale Price</strong>
            </p>
          </td>
          <td
            style="
              border: solid #bfbfbf 1pt;
              background: #1f4e79;
              padding: 0in 5.4pt;
            "
          >
            <p style="text-align: center">
              <strong style="color: white">Total</strong>
            </p>
          </td>
        </tr>
        
        ${productRows}

        <tr>
          <td
            colspan="4"
            rowspan="4"
            style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt"
          >
            <p><strong>Customer Note: ${customer_note}</strong></p>
          </td>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center"><strong>Sub Total</strong></p>
          </td>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center">${order_total}</p>
          </td>
        </tr>
        <tr>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center">
              <strong
                >Discount (Coupon Code: ${coupon_code} - ${discount_percent}%
                Off)</strong
              >
            </p>
          </td>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center">${discount_amount}</p>
          </td>
        </tr>
        <tr>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center">
              <strong>Deposit Amount (${deposit_percent}% Deposit)</strong>
            </p>
          </td>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center">${deposit_amount}</p>
          </td>
        </tr>
        <tr>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center"><strong>Pending Amount</strong></p>
          </td>
          <td style="border: solid #bfbfbf 1pt; padding: 0in 5.4pt">
            <p style="text-align: center">${pending_amount}</p>
          </td>
        </tr>
        <tr>
          <td
            colspan="7"
            style="
              width: 495.2pt;
              border-right: 1pt solid rgb(191, 191, 191);
              border-bottom: 1pt solid rgb(191, 191, 191);
              border-left: 1pt solid rgb(191, 191, 191);
              border-image: initial;
              border-top: none;
              padding: 0in 5.4pt;
              height: 42pt;
              vertical-align: top;
            "
          >
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <strong
                ><u
                  ><span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      color: red;
                    "
                    >Cancellation Policy</span
                  ></u
                ></strong
              >
            </p>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <strong
                ><u
                  ><span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      color: black;
                    "
                    >Cancellation &amp; Refund Policy For Sightseeing,
                    Adventure, Cab, Water Sports</span
                  ></u
                ></strong
              >
            </p>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 0.0001pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
                line-height: normal;
              "
            >
              <span
                style="
                  font-size: 13px;
                  font-family: &quot;Arial&quot;, sans-serif;
                "
                >Change of plan? &ndash;</span
              >
            </p>
            <div
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <ul style="margin-bottom: 0in; list-style-type: disc">
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >Traveler can change trip date anytime, but he/she has to
                    inform before 1 days through email or call.</span
                  >
                </li>
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >If cancellations are made before 1 days of the trip?</span
                  >
                </li>
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >100% refund within 3 working days.</span
                  >
                </li>
              </ul>
            </div>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 0.0001pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
                line-height: normal;
              "
            >
              <span
                style="
                  font-size: 13px;
                  font-family: &quot;Arial&quot;, sans-serif;
                "
                >&nbsp;</span
              >
            </p>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 0.0001pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
                line-height: normal;
              "
            >
              <span
                style="
                  font-size: 13px;
                  font-family: &quot;Arial&quot;, sans-serif;
                "
                >Cancellation made due to adverse weather or any act of
                god?</span
              >
            </p>
            <div
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <ul style="margin-bottom: 0in; list-style-type: disc">
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      line-height: 107%;
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >Travel will get 100% refund within 3 working days.</span
                  >
                </li>
              </ul>
            </div>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <strong
                ><span
                  style="
                    font-family: &quot;Arial&quot;, sans-serif;
                    color: black;
                  "
                  >&nbsp;</span
                ></strong
              >
            </p>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <strong
                ><u
                  ><span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      color: black;
                    "
                    >Cancellation &amp; Refund Policy For Hotel Booking</span
                  ></u
                ></strong
              >
            </p>
            <div
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <ul style="margin-bottom: 0in; list-style-type: disc">
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >Cancellation Rs. 1000/- service charges of Safar Travel
                    Express</span
                  >
                </li>
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >Each hotel has its own cancellation policy, which will
                    apply to your booking as well.</span
                  >
                </li>
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                    "
                    >Standard check inn timings are 02:00 pm &amp; check out
                    timing is 11:00 am</span
                  >
                </li>
              </ul>
            </div>
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <strong
                ><span
                  style="
                    font-family: &quot;Arial&quot;, sans-serif;
                    color: #ff5050;
                  "
                  >&nbsp;</span
                ></strong
              >
            </p>
          </td>
        </tr>
        <tr>
          <td
            colspan="7"
            style="
              width: 495.2pt;
              border-right: 1pt solid rgb(191, 191, 191);
              border-bottom: 1pt solid rgb(191, 191, 191);
              border-left: 1pt solid rgb(191, 191, 191);
              border-image: initial;
              border-top: none;
              padding: 0in 5.4pt;
              height: 42pt;
              vertical-align: top;
            "
          >
            <p
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <strong
                ><span
                  style="
                    font-family: &quot;Arial&quot;, sans-serif;
                    color: #00b0f0;
                  "
                  >Important Notes:</span
                ></strong
              >
            </p>
            <div
              style="
                margin-top: 0in;
                margin-right: 0in;
                margin-bottom: 8pt;
                margin-left: 0in;
                font-size: 11pt;
                font-family: &quot;Calibri&quot;, sans-serif;
              "
            >
              <ul style="margin-bottom: 0in; list-style-type: disc">
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      line-height: 107%;
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                      color: black;
                    "
                    >The pending amount must be paid at check-in<strong
                      >&nbsp;</strong
                    ></span
                  >
                </li>
                <li
                  style="
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8pt;
                    margin-left: 0in;
                    font-size: 11pt;
                    font-family: &quot;Calibri&quot;, sans-serif;
                  "
                >
                  <span
                    style="
                      line-height: 107%;
                      font-family: &quot;Arial&quot;, sans-serif;
                      font-size: 13px;
                      color: black;
                    "
                    >Pickup and drop-off will be at the nearest railway station
                    if you are arriving by train.</span
                  >
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};
