import db from "../models";
const Location = db.location;
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const Token = db.token;
const { QueryTypes, Op } = require("sequelize");
const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const mediaInput = require("../middlewares/mediaInput");
import { invoiceService } from ".";
import { TOKEN_TYPES, USER_TYPES } from "../utils/constants";
import moment from "moment";
import jwt from "jsonwebtoken";

export const saveToken = async (userId: number, refreshToken: string) => {
  console.log("user Id in token service", userId);
  console.log("refershToken in token service", userId);
  const refreshArray = [];
  refreshArray.push(refreshToken);
  const [token, created] = await Token.upsert(
    { user_id: userId, refresh_token: refreshArray }, // Record to upsert
    {
      conflictFields: ["user_id"],
    },
    { returning: true } // Return upserted record
  );
  console.log("Refersh token", token);
  console.log("Created status in tokne", created);
};

export const generateToken = async (
  tokenType: number,
  user_id: number,
  expiry: any,
  user_type = USER_TYPES.CUSTOMER
) => {
  const payload = {
    userId: user_id,
    userType: user_type,
    iat: moment().unix(),
    exp: expiry.unix(),
    type: tokenType,
  };
  console.log("PAYLOAD WE RECEIVED", payload);
  let token = "";
  if (tokenType == TOKEN_TYPES.ACCESS_TOKEN) {
    const secret: any = process.env.ACCESS_TOKEN_SECRET;
    console.log("Secret ", secret);
    token = jwt.sign(payload, secret);
  } else {
    const secret: any = process.env.REFRESH_TOKEN_SECRET;
    token = jwt.sign(payload, secret);
    console.log("Secret ", secret);
    await saveToken(user_id, token);
  }
  return token;
};

export const verifyToken = async (userToken: string, tokenType: number) => {
  let token;
  if (tokenType == TOKEN_TYPES.ACCESS_TOKEN) {
    const secret: any = process.env.ACCESS_TOKEN_SECRET;
    token = jwt.verify(userToken, secret);
  } else {
    const secret: any = process.env.REFRESH_TOKEN_SECRET;
    token = jwt.verify(userToken, secret);
  }
  return token;
};
interface User {
  userId: string;
}
export const testToken = async (token: string) => {
  if (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, "TEST", (err, user) => {
        if (user) {
          let finalUser = user as User;
          resolve({ user: finalUser.userId });
        }
      });
    });
  }
};

export const extractToken = async (bearerToken: string) => {
  return bearerToken.split(" ")[1];
};

export const searchRefreshToken = async (
  userId: number,
  refreshToken: string
) => {
  let userRefreshToken = await Token.findOne({
    raw: true,
    where: { user_id: userId },
  });

  if (userRefreshToken.refresh_token.includes(refreshToken)) {
    return true;
  }
  return false;
};
