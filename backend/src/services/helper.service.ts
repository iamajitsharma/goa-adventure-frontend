import db from "../models";
import { BOOKED_BY, BOOKING_STATUS, PAYMENT_TYPES } from "../utils/constants";
const ApiError = require("../utils/ApiError");
import bcrypt from "bcryptjs";
import { bookingService, paymentService, customerService, productService } from ".";
import httpStatus from "http-status";
import { exit } from "process";
const { QueryTypes } = require("sequelize");
const Customer = db.customer;
const Product = db.product;

interface PriceFromCustomer {
  totalAmount: string;
  depositAmount: string;
  payingFull: Boolean;
}

interface CustomerInfo {
  name: string;
  email: string;
  mobileNumber: string;
}

interface ProductDetails {
  productId: number;
  customerId: number;
  quantity: number;
  startDate: Date;
  endDate: Date;
  meeting_point: String;
  note: String;
}

export const getAllInfo = async (
  productDetails: ProductDetails,
  customerPrice: PriceFromCustomer,
  isGuest: Boolean,
  customerInfo?: CustomerInfo
) => {
  const result = "ankit";
  // let product_id = 14,
  //   customer_id = 7;
  let response:any;
  if(!isGuest){
    response = await db.sequelize.query(
      `SELECT * FROM customers JOIN products ON products.id = ${productDetails.productId} AND customers.id = ${productDetails.customerId};`,
      {
        // replacements: { status: "active" },
        type: QueryTypes.SELECT,
      }
    );
  }else{
    response = await db.sequelize.query(
      `SELECT * FROM products WHERE products.id = ${productDetails.productId};`,
      {
        // replacements: { status: "active" },
        type: QueryTypes.SELECT,
      }
    );
    response[0].discount_percent = 0;
    try{
      let guest = await customerService.getCustomerByEmail(customerInfo!.email);
      if(guest == undefined || guest == null){
        guest = await customerService.createCustomer({'name': customerInfo?.name, 
                              email: customerInfo?.email,
                              mobile_number: customerInfo?.mobileNumber,
                              isGuest: true, isMobileVerified: false, isEmailVerified: false});
        
      }
      productDetails.customerId = guest.id;
    }catch(error){
      console.log(error);
      //exit();
    }
  }
  
  if (response.length <= 0) {
    //throw error
    console.log("Product not found");
  }

  const finalTotalAmount =
    Number(
      Number(response[0].price) -
        Number(
          (Number(response[0].price) * Number(response[0].discount_percent)) /
            100
        )
    ) * productDetails.quantity;
  console.log("TOtal amount", finalTotalAmount);
  let finalDepositAmount = 0;
  if (customerPrice.payingFull) {
    finalDepositAmount = Number(customerPrice.depositAmount);
  } else {
    finalDepositAmount = Number(
      (Number(finalTotalAmount * Number(response[0].deposit_value)) *
        productDetails.quantity) /
        100
    );
  }
  console.log("OTher part", finalDepositAmount);
  const pendingAmount = finalTotalAmount - finalDepositAmount;
  if (
    customerPrice.payingFull &&
    Number(finalTotalAmount) !== Number(customerPrice.totalAmount) &&
    Number(finalTotalAmount) !== Number(customerPrice.depositAmount)
  ) {
    console.log("Paying full and price mismatch");
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Paying full and price mismatch"
    );

    return "Paying full and price mismatch";
  }

  if (
    !customerPrice.payingFull &&
    Number(finalTotalAmount) !== Number(customerPrice.totalAmount) &&
    Number(finalDepositAmount) !== Number(customerPrice.depositAmount)
  ) {
    //throw erorr
    console.log("NOT paying full and price mismatch");

    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "NOT paying full and price mismatch"
    );
    return "NOT paying full and price mismatch";
  }
  console.log("PEdning amount", pendingAmount);
  if (customerPrice.payingFull && pendingAmount !== 0) {
    console.log("Paying full but pending amount not 0", pendingAmount);
    return "Paying full but pending amount not 0";
  }

  console.log("Response from postgres for test", response);
  let customer_mobile_number = response[0].mobile_number;
  if(customerInfo != undefined){
    customer_mobile_number = customerInfo.mobileNumber;
  }

  let finalAllInfo = {
    product_id: productDetails.productId,
    category_id: response[0].category_id,
    sub_category_id: response[0].subcategory_id,
    booking_status: BOOKING_STATUS.NOT_CONFIRMED,
    total_seat: productDetails.quantity,
    total_amount: finalTotalAmount.toString(),
    deposit_amount: finalDepositAmount.toString(),
    booking_date: new Date(),
    start_date: productDetails.startDate,
    end_date: productDetails.endDate,
    customer_id: productDetails.customerId,
    payment_mode: PAYMENT_TYPES.ONLINE, //0:online 1:offline
    customer_mobile_number: customer_mobile_number ,
    destination_location: response[0].city ?? "",
    booked_by: BOOKED_BY.SELF,
    paying_full: customerPrice.payingFull,
    pending_amount: pendingAmount.toString(),
    quantity: productDetails.quantity,
    meeting_point: productDetails.meeting_point,
    note: productDetails.note,
  };
  console.log("Before db ", finalAllInfo);
  let bookingData;
  try{
  bookingData = await bookingService.createBooking(finalAllInfo);
  }catch(error){
    console.log(error);
    exit();
  }
  console.log("Response from bookignData", bookingData);
  const paymentOrderInfo = {
    booking_id: bookingData.id,
    customer_id: bookingData.customer_id,
    amount: bookingData.deposit_amount.toString(),
    quantity: bookingData.quantity,
    product_id: bookingData.product_id,
    status: "PENDING",
  };

  const razorpayInfo = await paymentService.createPayment(paymentOrderInfo);
  console.log("Resposne from razorpay", razorpayInfo);
  // if (result) {
  // }
  // return finalAllInfo;
  return razorpayInfo;
};

export const encryptPassword = async (password: any) => {
  const hashedPassword = await bcrypt.hash(password, 8);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  userPassword: string
) => {
  const passwordVerdict = await bcrypt.compare(userPassword, password);
  console.log("verdict", passwordVerdict);
  return passwordVerdict;
};
