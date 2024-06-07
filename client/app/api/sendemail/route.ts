import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "nodeMailerConfig";

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
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
      return res.status(400).json({ message: "Bad Request" });
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

      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  console.log(req.body);

  return res.status(400).json({ message: "Bad Request" });
};

export default POST;
