import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "nodeMailerConfig";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest, response: NextResponse) => {
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
    return NextResponse.json("Bad request");
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Enquiry Received",
      html: `
      <p>FullName:${fullname}</p>
      <p>Mobile Number:${mobile_number}</p>
      <p>Email:${email}</p>
      <p>Travel Date:${travel_date}</p>
      <p>Total Person:${traveller_count}</p>
      <p>Request From:${url}</p>
      <p>Message:${message}</p>
      `,
    });

    return NextResponse.json("Success");
  } catch (error: any) {
    return NextResponse.json("Failed");
  }
};
