import Razorpay from "razorpay";
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: "rzp_test_aL13HDonU0BODH",
  key_secret: "F2xTcKTqLVfCHOrc2piHOLor",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { amount, currency } = req.body;

    try {
      const options = {
        amount: amount * 100, // Amount in paisa (1 Rupee = 100 Paisa)
        currency: currency,
      };

      console.log(options.amount);

      // Initiate Order
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error("Error initiating payment:", error);
      res.status(500).json({ error: "Failed to initiate payment" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
