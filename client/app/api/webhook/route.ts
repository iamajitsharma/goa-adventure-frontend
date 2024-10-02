import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";

export async function POST(request: NextRequest) {
  const secret = process.env.webhookSecret as string;

  // Get the signature from the headers
  const signature = request.headers.get("x-razorpay-signature") || "";
  const body = await request.text();

  // Generate HMAC SHA256 signature
  const calculatedSignature = CryptoJS.HmacSHA256(body, secret).toString(
    CryptoJS.enc.Hex
  );

  // Verify the signature
  if (calculatedSignature !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  // Handle the event
  const event = JSON.parse(body).event;

  if (event === "payment.captured") {
    const paymentId = JSON.parse(body).payload.payment.entity.id;
    const orderId = JSON.parse(body).payload.payment.entity.notes.order_id; // Assuming you included this in the notes

    // Here you can update your database to reflect payment success
    console.log("Payment Captured:", paymentId, "for Order:", orderId);
    // await updateOrderStatus(orderId, 'success', paymentId); // Implement this function
  }

  return NextResponse.json({ received: true });
}
