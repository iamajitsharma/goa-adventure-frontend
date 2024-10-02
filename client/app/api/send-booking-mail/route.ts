import { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "nodeMailerConfig";
import { NextRequest, NextResponse } from "next/server";
import { generateInvoiceHTML } from "helper/utils";

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const {
    customer_name,
    customer_email,
    customer_number,
    products,
    deposit_percent,
    deposit_amount,
    pending_amount,
    order_total,
    coupon_code,
    customer_note,
    discount_percent,
    discount_amount,
  } = data;

  try {
    const invoiceHTML = generateInvoiceHTML(data);

    // const generateInvoicePDF = (htmlContent:any) => {
    //   return new Promise((resolve, reject) => {
    //     pdf.create(htmlContent).toBuffer((err:any, buffer:any) => {
    //       if (err) return reject(err);
    //       resolve(buffer);
    //     });
    //   });
    // };

    await transporter.sendMail({
      from: `"Goa Adventure Website" <info@goaadventure.in>`,
      to: `choiceyourtrip@gmail.com, info@goaadventure.in, ${customer_email}`,
      subject:
        "Booking Received | Congratulations you have received new booking",
      html: invoiceHTML,
    });

    return NextResponse.json("Success");
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json("Failed");
  }
};
