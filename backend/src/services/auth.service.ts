import httpStatus from "http-status";
import db from "../models";
const Login = db.login;
const { QueryTypes, Op } = require("sequelize");
import { BOOKED_BY, TOKEN_TYPES, USER_TYPES } from "../utils/constants";
import { encryptPassword, comparePassword } from "./helper.service";
import { customerService, tokenService, staffService } from ".";
const ApiError = require("../utils/ApiError");
import moment from "moment";

const jwt = require("jsonwebtoken");

export const createLogin = async (requestBody: any, user_type: any) => {
  requestBody.type = user_type;
  if (!requestBody.password) {
    requestBody.password = await encryptPassword(process.env.DEFAULT_PASSWORD);
  } else {
    requestBody.password = await encryptPassword(requestBody.password);
  }
  console.log("Request body of creating login body", requestBody);
  const data1 = await Login.create(requestBody);
  console.log("Response after createing", data1);

  return data1;
};

export const loginUserMobile = async (
  mobile_number: string,
  password: string,
  loginType: number[]
) => {
  const condition = { mobile_number };
  console.log("Received data", mobile_number, password);
  const data = await Login.findOne({ raw: true, where: condition });
  console.log("Response afeter cerifuing passwrod", data.dataValues);

  if (!data || !(await comparePassword(data?.password, password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  if (!loginType.includes(data.type)) {
    throw new ApiError(httpStatus.FORBIDDEN, "Not allowed");
  }
  let userInfo;
  if (data?.type == USER_TYPES.CUSTOMER) {
    userInfo = await customerService.getCustomerByMobile(mobile_number);
  } else if (data?.type == USER_TYPES.STAFF) {
    userInfo = await staffService.getStaffByMobile(mobile_number);
  } else if (data?.type == USER_TYPES.SUPER_ADMIN) {
    userInfo = {
      name: "SUPER_ADMIN",
      id: 5,
    };
  }
  console.log("userInfo id ", userInfo);
  const accessExpiry = moment().add(
    process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    "minutes"
  );
  console.log("Test");
  const refreshExpiry = moment().add(
    process.env.JWT_REFRESH_EXPIRATION_DAYS,
    "days"
  );
  const accessToken = await tokenService.generateToken(
    TOKEN_TYPES.ACCESS_TOKEN,
    userInfo.id,
    accessExpiry
  );

  const refreshToken = await tokenService.generateToken(
    TOKEN_TYPES.REFRESH_TOKEN,
    userInfo.id,
    refreshExpiry
  );
  const tokens = { accessToken, authToken: refreshToken };
  return { tokens, user: userInfo, role: data?.type };
};

export const loginUser = async (
  email: string,
  password: string,
  loginType: number[]
) => {
  const condition = { email };
  console.log("Received data", email, password);
  const data = await Login.findOne({ raw: true, where: condition });
  console.log("Response afeter cerifuing passwrod", data);
  console.log("Response afeter cerifuing passwrod124", data?.password);

  if (!data || !(await comparePassword(data?.password, password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
  }
  if (!loginType.includes(data.type)) {
    throw new ApiError(httpStatus.FORBIDDEN, "Not allowed");
  }
  let userInfo;
  if (data?.type == USER_TYPES.CUSTOMER) {
    userInfo = await customerService.getCustomerByEmail(email);
  } else if (data?.type == USER_TYPES.STAFF) {
    userInfo = await staffService.getStaffByEmail(email);
  } else if (data?.type == USER_TYPES.SUPER_ADMIN) {
    userInfo = {
      name: "SUPER_ADMIN",
      id: 5,
    };
  }
  console.log("userInfo id ", userInfo);
  const accessExpiry = moment().add(
    process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    "minutes"
  );
  console.log("Test");
  const refreshExpiry = moment().add(
    process.env.JWT_REFRESH_EXPIRATION_DAYS,
    "days"
  );
  const accessToken = await tokenService.generateToken(
    TOKEN_TYPES.ACCESS_TOKEN,
    userInfo.id,
    accessExpiry
  );

  const refreshToken = await tokenService.generateToken(
    TOKEN_TYPES.REFRESH_TOKEN,
    userInfo.id,
    refreshExpiry
  );
  const tokens = { accessToken, authToken: refreshToken };
  return { tokens, user: userInfo, role: data?.type };
};

export const getLoginByParent = async (locationName: string) => {
  const location = await Login.findAll({
    where: {
      [Op.or]: [{ location: locationName }, { parent_location: locationName }],
    },
  });
  return location;
};

export const updateLogin = async (
  updateBody: any,
  id: number
): Promise<number> => {
  const updateRows = await Login.update(updateBody, {
    where: { id: id },
  });
  return Number(updateRows);
};

export const deleteLogin = async (id: number): Promise<number> => {
  const deletedRows = await Login.destroy({
    where: { id: id },
  });
  return Number(deletedRows);
};
