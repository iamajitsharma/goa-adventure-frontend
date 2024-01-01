import { Request, Response } from "express";
import db from "../models";
const { QueryTypes } = require("sequelize");
import {
  productService,
  helperService,
  paymentService,
  bookingService,
} from "../services";
const crypto = require("crypto");
const mediaInput = require("../middlewares/mediaInput");

const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const ejs = require("ejs");

const data = require("../utils/data");
const puppeteer = require("puppeteer");
// const Razorpay = require("razorpay");

const Payment = db.payment;
const Booking = db.booking;

// const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// Create and Save a new blog
export const createOrder = async (req: any, res: Response): Promise<void> => {
  // try {
  //   // Validate request
  const { customerPrice, productDetails, bookingInfo } = req.body;
  console.log("Request customerPrice", customerPrice);
  console.log("Request productDetails", productDetails);
  console.log("Request customerInfo", bookingInfo);
  
  if (
    typeof productDetails.productId === "number" &&
    typeof productDetails.customerId === "number" &&
    typeof productDetails.quantity === "number"
  ) {
    const allInfo = await helperService.getAllInfo(
      productDetails,
      customerPrice,
      false
    );
    res.send(allInfo);
  }
  else if (
    typeof productDetails.productId === "number" &&
    typeof productDetails.quantity === "number" &&
    (productDetails.customerId == undefined || productDetails.customerId == "")
  ) {
    productDetails.customerId = new Date().valueOf();
    const allInfo = await helperService.getAllInfo(
      productDetails,
      customerPrice,
      true,
      bookingInfo
    );
    res.send(allInfo);
  }
  else {
    console.log(
      typeof productDetails.productId === "number",
      typeof productDetails.customerId === "number",
      typeof productDetails.quantity === "number"
    );

    res.status(500).send("Change of SQL Injection");
  }

  //   const payment_capture = 1;
  //   const amount = 499;
  //   const currency = "INR";
  //   const options = {
  //     amount: (amount * 100).toString(),
  //     currency,
  //     //   receipt: shortid.generate(),
  //     payment_capture,
  //   };

  //   try {
  //     const response = await instance.orders.create(options);
  //     res.status(200).json({
  //       id: response.id,
  //       currency: response.currency,
  //       amount: response.amount,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json(err);
  //   }

  //   if (!req.body) {
  //     console.log("Flailed");
  //     res.status(400).send({ message: "Content missing in body!" });
  //     return;
  //   }

  //   // Save blog in the database
  //   const data = await Payment.create(req.body);
  //   res.send(data);
  // } catch (err: any) {
  //   res.status(500).send({
  //     message: err.message || "Some error occurred while creating the product.",
  //   });
  // }
  // res.send("OK");
};

export const paymentVerification = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("hitted");
  console.log("Request body received", req.body.payload.payment);

  const shasum = crypto.createHmac("sha256", "ABCD1234");
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it

    const finalBody = req.body.payload.payment;

    if (finalBody.entity.status == "captured") {
      let signatureBody = {
        razorpay_payment_id: finalBody.entity.id,
        razorpay_signature: digest,
        razorpay_order_id: finalBody.entity.order_id,
      };
      console.log("Signature body", signatureBody);
      const payment = await paymentService.paymentCaptured(signatureBody);

      if (payment == 0) {
        console.log(
          "Payment successful but updation indb failed",
          finalBody.order_id
        );
      }
      const updateBooking = bookingSuccessful(
        payment.booking_id,
        finalBody.entity.id
      );
      console.log(
        "Payment updation successful in database",
        finalBody.order_id
      );
    } else if (finalBody.entity.status == "failed") {
      let signatureBody = {
        razorpay_order_id: finalBody.order_id,
      };
      const payment = await paymentService.paymentFailed(signatureBody);

      if (payment == 0) {
        console.log(
          "Payment successful but updation indb failed",
          finalBody.order_id
        );
      }
      const updateBooking = await bookingService.bookingFailed(
        payment.booking_id,
        finalBody.entity.id
      );
      console.log(
        "Payment failed and updation successful in database",
        finalBody.order_id
      );
    }
  } else {
    console.log("Webhook received illegal request");
    res.send("Webhook received illegal request");
  }
  res.json({ status: "Ok" });
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    const condition = null;

    const data = await Payment.findAll({ where: condition });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const findByState = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const state = decodeURIComponent(req.params.state);

    const data = await Payment.findOne({
      where: { state_name: state },
      attributes: ["city_info"],
    });
    if (!data) {
      res.status(404).send({ message: "Not found blog with id " });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving blog with id=" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    console.log("Updation body", req.body);

    const [rowsUpdated] = await Payment.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Payment with id=${id}. Maybe Payment was not found!`,
      });
    } else {
      res.send({ message: "Payment was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Payment with id=",
    });
  }
};

export const deletePayment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    console.log("Bokkig id", id);

    const rowsDeleted = await Payment.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Payment with id=${id}. Maybe Payment was not found!`,
      });
    } else {
      res.send({
        message: "Payment was deleted successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Tutorial with ",
    });
  }
};

export const deleteAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const rowsDeleted = await Payment.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Payments were deleted successfully!`,
    });
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all blogs.",
    });
  }
};

export const generateTestPdf = async (req: any, res: any): Promise<void> => {
  const html = fs.readFileSync(
    path.join(__dirname, "../views/invoice-template.html"),
    "utf-8"
  );
  const filename = Math.random() + "_doc" + ".pdf";
  let array: any = [];

  data.forEach((d: any) => {
    const prod = {
      name: d.name,
      description: d.description,
      unit: d.unit,
      quantity: d.quantity,
      price: d.price,
      total: d.quantity * d.price,
      imgurl: d.imgurl,
    };
    array.push(prod);
  });

  let subtotal = 0;
  array.forEach((i: any) => {
    subtotal += i.total;
  });
  const tax = (subtotal * 20) / 100;
  const grandtotal = subtotal - tax;
  const obj = {
    prodlist: array,
    subtotal: subtotal,
    tax: tax,
    gtotal: grandtotal,
  };
  const document = {
    html: html,
    data: {
      products: obj,
    },
    // path: "./docs/" + filename,
    type: "buffer",
  };
  const options = {
    formate: "A4",
    orientation: "portrait",
    border: "2mm",
    timeout: "100000",
  };
  let pdfResponse = await pdf.create(document, options);
  console.log("PDf response", pdfResponse);
  let response = await mediaInput.uploadInvoice(pdfResponse);

  if (!response.uploaded) {
    res.status(500).send({
      message: "File Could not get uploaded please try again later!",
    });
  }

  // const filepath = "http://localhost:3000/docs/" + filename;

  // res.render('download', {
  //     path: filepath
  // });

  res.send({ link: response.url });
};

// const bookingSuccessful = async (requestBody: number, paymentId: string) => {
//   return new Promise(async (res, rej) => {
//     const bookingInfo = await Booking.findByPk(requestBody);
//     bookingInfo.booking_status = 1;
//     console.log("Rerquestd bodu", requestBody);
//     bookingInfo.payment_id = paymentId;
//     let response: any = await db.sequelize.query(
//       `SELECT
//     products.title,
//     bookings.id,
//     bookings.quantity,
//     bookings.total_amount,
//     bookings.deposit_amount,
//     bookings.pending_amount,
//     bookings.start_date,
//     bookings.booking_date,
//     customers.name,
//     customers.mobile_number,
//     customers.city,
//     customers.country
// FROM
//     bookings
// JOIN
//     products ON bookings.product_id = products.id
// JOIN
//     customers ON bookings.customer_id = customers.id
// WHERE
//     products.id = ${bookingInfo.product_id}
//     AND bookings.id = ${bookingInfo.id}
//     AND customers.id = ${bookingInfo.customer_id};
// `,
//       {
//         // replacements: { status: "active" },
//         type: QueryTypes.SELECT,
//       }
//     );
//     console.log("Response", response[0]);
//     const html = await fs.readFileSync(
//       path.join(__dirname, "../views/invoice-template.html"),
//       "utf-8"
//     );
//     // const invoiceUrl = await invoiceService.generateInvoice(response[0], html);

//     const document = {
//       html: html,
//       data: response[0],
//       // path: "./docs/" + filename,
//       type: "buffer",
//     };
//     console.log("Response", pdf);
//     console.log("Doucment", document);
//     const options = {
//       formate: "A4",
//       orientation: "portrait",
//       border: "2mm",
//       timeout: "30000",
//     };
//     console.log("OPtions", options);
//     let pdfResponse = await pdf.create(document, options);
//     console.log("PDf response", pdfResponse);
//     let invoiceUrl = await mediaInput.uploadInvoice(pdfResponse);

//     // if (!response.uploaded) {
//     //   return 0;
//     // }
//     // return response.url;

//     console.log("Final invoice Url", invoiceUrl);
//     bookingInfo.invoice = invoiceUrl.url;
//     console.log("Savong booling info", bookingInfo);
//     await bookingInfo.save();
//     console.log(
//       "Response after  payment success in bokking updatio",
//       bookingInfo
//     );

//     res(bookingInfo.toJSON());
//   });
// };

const bookingSuccessful = async (requestBody: number, paymentId: string) => {
  return new Promise(async (res, rej) => {
    const bookingInfo = await Booking.findByPk(requestBody);
    bookingInfo.booking_status = 1;

    bookingInfo.payment_id = paymentId;
    await bookingInfo.save();
    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--font-render-hinting=none", "--force-color-profile=srgb"],
      });
      const page = await browser.newPage();
      await page.goto(
        `${process.env.BASE_URL}/booking/display-invoice/${paymentId}`,
        {
          waitUntil: "networkidle2",
        }
      );
      const pdfBuffer = await page.pdf({
        printBackground: true,
        format: "A4",
      });
      let invoiceUrl = await mediaInput.uploadInvoice(pdfBuffer);
      console.log("Respons from aws", invoiceUrl);
      if (!invoiceUrl.uploaded) {
        console.log("Invoice could not be generated");
        rej(0);
      }
      await browser.close();
      bookingInfo.invoice = invoiceUrl.url;
      console.log("Booking info with invoice url", bookingInfo);
      await bookingInfo.save();
      console.log("INVOICE URL GENERATED", invoiceUrl);
      res(invoiceUrl.url);
    } catch (err) {
      console.log(err);
      rej(0);
    }

    //   const html = await fs.readFileSync(
    //     path.join(__dirname, "../views/invoice-template.html"),
    //     "utf-8"
    //   );
    //   // const invoiceUrl = await invoiceService.generateInvoice(response[0], html);

    //   const document = {
    //     html: html,
    //     data: response[0],
    //     // path: "./docs/" + filename,
    //     type: "buffer",
    //   };
    //   console.log("Response", pdf);
    //   console.log("Doucment", document);
    //   const options = {
    //     formate: "A4",
    //     orientation: "portrait",
    //     border: "2mm",
    //     timeout: "30000",
    //   };
    //   console.log("OPtions", options);
    //   let pdfResponse = await pdf.create(document, options);
    //   console.log("PDf response", pdfResponse);
    //   let invoiceUrl = await mediaInput.uploadInvoice(pdfResponse);

    //   // if (!response.uploaded) {
    //   //   return 0;
    //   // }
    //   // return response.url;

    //   console.log("Final invoice Url", invoiceUrl);
    //   bookingInfo.invoice = invoiceUrl.url;
    //   console.log("Savong booling info", bookingInfo);
    //   await bookingInfo.save();
    //   console.log(
    //     "Response after  payment success in bokking updatio",
    //     bookingInfo
    //   );

    //   res(bookingInfo.toJSON());
  });
};
