import { transporter, mailOptions } from "nodeMailerConfig"; // Ensure this is configured correctly
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const {
    fullname,
    email,
    mobile_number,
    travel_date,
    traveller_count,
    message,
    url,
  } = data;

  if (!fullname || !email || !mobile_number) {
    return NextResponse.json("Bad request", { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Enquiry Received",
      html: `
        <p>Full Name: ${fullname}</p>
        <p>Mobile Number: ${mobile_number}</p>
        <p>Email: ${email}</p>
        <p>Travel Date: ${travel_date}</p>
        <p>Total Persons: ${traveller_count}</p>
        <p>Request From: ${url}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json("Success");
  } catch (error: any) {
    console.error("Error sending email:", error); // Log the error
    return NextResponse.json("Failed", { status: 500 });
  }
};
