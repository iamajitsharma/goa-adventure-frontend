import db from "../models";
const Booking = db.booking;
const { QueryTypes } = require("sequelize");
const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const mediaInput = require("../middlewares/mediaInput");
import { invoiceService } from ".";

export const createBooking = async (requestBody: any) => {
  const data1 = await Booking.create(requestBody);
  console.log("Response after createing", data1);

  return data1.toJSON();
};

export const getBookingByPaymentId = async (paymentId: any) => {
  console.log("Payment id", paymentId);
  const bookingInfo = await Booking.findOne({
    where: { payment_id: paymentId },
  });
  console.log("Booking info", bookingInfo);
  return bookingInfo;
};

export const bookingFailed = async (requestBody: number, paymentId: string) => {
  const bookingInfo = await Booking.findByPk(requestBody);
  bookingInfo.booking_status = 1;
  bookingInfo.payment_id = paymentId;
  await bookingInfo.save();
  console.log("Response after payment failed in bokking updation", bookingInfo);

  return bookingInfo.toJSON();
};

export const getCustomerBookings = async (customer_id: string) => {
  // const bookingInfo = await Booking.findAll({ where: { customer_id } });
  // console.log("Bookinginfo", bookingInfo);
  // return bookingInfo;

  let response = await db.sequelize.query(
    `SELECT bookings.* , products.title,categories.category,subcategories.subcategory FROM bookings JOIN products ON products.id = bookings.product_id JOIN categories ON bookings.category_id = categories.id  JOIN subcategories ON bookings.sub_category_id = subcategories.id  WHERE customer_id=${customer_id}`,
    {
      // replacements: { status: "active" },
      type: QueryTypes.SELECT,
    }
  );
  console.log("Response", response);
  return response;
};
