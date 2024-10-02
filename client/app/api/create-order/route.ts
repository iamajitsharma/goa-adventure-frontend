import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.razorPayKey || "",
  key_secret: process.env.razorPaySecret || "",
});

export async function POST(request: NextRequest) {
  const { amount } = await request.json();

  // Validate the amount
  if (typeof amount !== "number" || amount <= 0 || !Number.isInteger(amount)) {
    return NextResponse.json(
      { error: "Invalid amount. It must be a positive integer." },
      { status: 400 }
    );
  }

  try {
    // Razorpay options
    const options = {
      amount: amount * 100, // Convert to smallest currency unit (e.g., paise)
      currency: "INR",
      receipt: "receipt" + Math.random().toString(36).substring(7),
    };

    // Initiate order
    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Error initiating payment:", error);
    return NextResponse.json(
      {
        error: "Failed to initiate the payment",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
