import db from "../models";
const ManualBooking = db.manual_booking;

import { invoiceService } from ".";

export const createManualBooking = async (requestBody: any) => {
  const data1 = await ManualBooking.create(requestBody);
  console.log("Response after createing", data1);

  return data1.toJSON();
};

export const getManualBookingByPaymentId = async (paymentId: any) => {
  console.log("Payment id", paymentId);
  const bookingInfo = await ManualBooking.findOne({
    where: { payment_id: paymentId },
  });
  return bookingInfo.toJSON();
};

export const bookingFailed = async (requestBody: number, paymentId: string) => {
  const bookingInfo = await ManualBooking.findByPk(requestBody);
  bookingInfo.booking_status = 1;
  bookingInfo.payment_id = paymentId;
  await bookingInfo.save();
  console.log("Response after payment failed in bokking updation", bookingInfo);

  return bookingInfo.toJSON();
};
