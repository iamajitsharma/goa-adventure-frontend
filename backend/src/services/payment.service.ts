import db from "../models";

interface RazorpayVerifyFormat {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
interface RazorpayPaymentFailed {
  razorpay_order_id: string;
}
const Razorpay = require("razorpay");

const Payment = db.payment;

export const getPaymentByOrderId = async (orderId: any) => {
  const paymentInfo = await Payment.findOne({
    where: { razorpay_order_id: orderId },
  });
  return paymentInfo.toJSON();
};

export const createPayment = async (requestBody: any) => {
  let paymentResponse = await Payment.create(requestBody);
  paymentResponse = paymentResponse.toJSON();
  console.log("Response from payment ", paymentResponse);
  // const razorpay = new Razorpay({
  //   key_id: process.env.RAZORPAY_KEY
  //     ? process.env.RAZORPAY_KEY
  //     : "rzp_live_4McSVg85pQ5tAa",
  //   key_secret: process.env.RAZORPAY_SECRET
  //     ? process.env.RAZORPAY_SECRET
  //     : "rU96vlPUZSjqGkC1ZJ5e4KyZ",
  // });

  const razorpay = new Razorpay({
    key_id: "rzp_live_4McSVg85pQ5tAa",
    key_secret: "rU96vlPUZSjqGkC1ZJ5e4KyZ",
  });

  // Create an order -> generate the OrderID -> Send it to the Front-end
  const payment_capture = 1;
  //   const amount = 499;
  const currency = "INR";
  const options = {
    amount: (paymentResponse.amount * 100).toString(),
    currency,
    receipt: paymentResponse.id.toString(),
    payment_capture,
  };

  try {
    console.log("Razorpay ", options);
    const response = await razorpay.orders.create(options);
    console.log("Response from razorpay with order id", response);
    const updatePayment = await Payment.update(
      { razorpay_order_id: response.id },
      {
        where: { id: paymentResponse.id },
      }
    );

    if (updatePayment === 0) {
      console.log(
        "COuld not find in updating payment_order with id",
        paymentResponse.id
      );
    } else {
      return {
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      };
    }
    // res.status(200).json({
    //   id: response.id,
    //   currency: response.currency,
    //   amount: response.amount,

    // });
  } catch (err) {
    console.log(err);
    // res.status(400).json(err);
  }
};

export const paymentCaptured = async (requestBody: RazorpayVerifyFormat) => {
  const updatePayment = await Payment.findOne({
    where: {
      razorpay_order_id: requestBody.razorpay_order_id,
    },
  });

  if (!updatePayment) {
    console.log(
      "COuld not find in updating payment_order with id",
      requestBody
    );
    return 0;
  }
  updatePayment.razorpay_payment_id = requestBody.razorpay_payment_id;
  updatePayment.razorpay_signature = requestBody.razorpay_signature;
  updatePayment.status = "SUCCESSFUL";
  await updatePayment.save();
  return updatePayment;
  // const updatePayment = await Payment.update(
  //   {
  //     razorpay_payment_id: requestBody.razorpay_payment_id,
  //     razorpay_signature: requestBody.razorpay_signature,
  //     status: "SUCCESSFUL",
  //   },
  //   {
  //     where: { razorpay_order_id: requestBody.razorpay_order_id },
  //   }
  // );

  // if (updatePayment === 0) {
  //   console.log(
  //     "COuld not find in updating payment_order with id",
  //     requestBody
  //   );
  //   return 0;
  // } else {
  //   return 1;
  // }
};

export const paymentFailed = async (requestBody: RazorpayPaymentFailed) => {
  const updatePayment = await Payment.findOne({
    where: {
      razorpay_order_id: requestBody.razorpay_order_id,
    },
  });

  if (!updatePayment) {
    console.log(
      "COuld not find in updating payment_order with id",
      requestBody
    );
    return 0;
  }

  updatePayment.status = "FAILED";
  await updatePayment.save();
  return updatePayment;
};
