import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.razorPayKey as string,
  key_secret: process.env.razorPaySecret,

  // key_id: process.env.razorPayTestKey as string,
  // key_secret: process.env.razorPayTestSecret,
});

export async function POST(request: NextRequest) {
  const { amount, currency } = (await request.json()) as {
    amount: number;
    currency: string;
  };

  try {
    //Razorpay Option
    var options = {
      amount: amount * 100,
      currency: currency,
      payment_capture: 1,
    };

    //Initiate Order
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    NextResponse.json({ error: "Failed to initiate the payment" });
  }
}
