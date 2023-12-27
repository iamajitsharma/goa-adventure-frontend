import db from "../models";
const Customer = db.customer;
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

export const createCustomer = async (requestBody: any) => {
  const data1 = await Customer.create(requestBody);

  return data1;
};

export const getCustomerById = async (id: number) => {
  const data = await Customer.findByPk(id);

  return data;
};

export const getCustomerByEmail = async (email: string) => {
  const data = await Customer.findOne({
    raw: true,
    where: { email },
  });

  return data;
};

export const getCustomerByMobile = async (mobile_number: string) => {
  const data = await Customer.findOne({
    raw: true,
    where: { mobile_number },
  });

  return data;
};
export const findAllCustomer = async () => {
  const condition = { activation_status: true };
  const data = await Customer.findAll({ where: condition });

  return data;
};
