import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "nodeMailerConfig";
import { client } from "sanity/lib/client";
import axios from "axios";
import { sendContactForm } from "helper/utils";

type POSTResponse = Promise<Response>;

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

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
    return NextResponse.json(
      "Bad Request, FullName, Email and Mobile No. is compulsory"
    );
  }

  try {
    const result = await client.create({
      _type: "enquiry",
      fullname: fullname,
      mobile_number: mobile_number,
      email: email,
      travel_date: travel_date,
      traveller_count: traveller_count,
      message: message,
      url: url,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
