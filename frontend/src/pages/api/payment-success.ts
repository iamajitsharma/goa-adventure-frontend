import axios from "axios";
import Razorpay from "razorpay";
import { NextApiRequest, NextApiResponse } from "next";

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
    try {
      const projectId = process.env.SANITY_STUDIO_SANITY_PROJECT_ID;
      const dataset = process.env.SANITY_STUDIO_DATASET;
      const tokenWithWriteAccess = process.env.SANITY_STUDIO_API_TOKEN;

      const response = await axios.post(
        `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
        {
          mutations: [
            {
              create: {
                _type: "booking",
                createdAt: new Date().toISOString(),
                ...req.body,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );

      console.log("Response Data:", response.data);
      res.status(200).json(response.data);
    } catch (error: any) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
