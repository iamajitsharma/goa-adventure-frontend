import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { transporter, mailOptions } from "nodeMailerConfig";
import { client } from "sanity/lib/client";
import axios from "axios";
import { sendContactForm } from "helper/utils";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

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
    return res.status(400).json({
      message: "Bad Request, FullName, Email and Mobile No. is compulsory",
    });
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

    console.log(result);

    return result;
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}
