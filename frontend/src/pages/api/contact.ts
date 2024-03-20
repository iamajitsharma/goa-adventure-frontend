import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "@/config/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    const { fullName, email, mobile, date, person, message } = data;

    if (!fullName || !email || !mobile || !date || !person || !message) {
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Enquiry Received",
        html: `
         <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${mobile}</p>
          <p><strong>Travel Date:</strong> ${date}</p>
          <p><strong>Total Person:</strong> ${person}</p>
          <p><strong>Customer Note:</strong> ${message}</p>
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

export default handler;
