const axios = require("axios");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

async function configurtion(data: any) {
  const reqBody = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://www.smsalert.co.in/api/structuredpush.json",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const otpResponse = await axios.request(reqBody);
    //   .then((res: any) => res.toJSON());
    console.log("OTP Response", otpResponse);

    return otpResponse.data;
  } catch (err) {
    console.log("Error", err);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Could not send Sms");
  }
}

export const orderFailed = async (mobileNumber: string, orderData: any) => {
  const otpBody = {
    apikey: process.env.SMS_API,
    structureid: "339",
    sender: process.env.SMS_SENDER,
    mobileno: mobileNumber,

    data: {
      test: "Ankit",
      customer_id: "1234",
    },
  };

  const sendOtp = await configurtion(otpBody);

  return sendOtp;
};
