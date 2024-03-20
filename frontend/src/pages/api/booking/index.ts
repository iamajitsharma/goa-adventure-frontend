import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { amount } = req.body;

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: "rzp_test_aL13HDonU0BODH",
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: uuid(),
    };

    try {
      // Create Razorpay order
      const response = await razorpay.orders.create(options);

      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.error("Error occurred:", error);
      res
        .status(400)
        .json({ error: "An error occurred while processing the booking." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
