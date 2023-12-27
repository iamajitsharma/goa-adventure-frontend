import db from "../models";
const Staff = db.staff;
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

export const createStaff = async (requestBody: any) => {
  const data1 = await Staff.create(requestBody);

  return data1;
};

export const getStaffById = async (id: number) => {
  const data = await Staff.findByPk(id);

  return data;
};

export const getStaffByMobile = async (mobile_number: string) => {
  const data = await Staff.findOne({
    raw: true,
    where: { mobile_number },
    attributes: [
      "id",
      "name",
      "mobile_number",
      "email",
      "active",
      "profile_image",
      "activation_status",
    ],
  });
  console.log("BEFORE", data);
  if (data && !data?.activation_status) {
    throw new ApiError(httpStatus.FORBIDDEN, "Activation Status is false");
  }
  console.log("AFTER");
  return data;
};

export const getStaffByEmail = async (email: string) => {
  const data = await Staff.findOne({
    raw: true,
    where: { email },
    attributes: [
      "id",
      "name",
      "mobile_number",
      "email",
      "active",
      "profile_image",
      "activation_status",
    ],
  });
  console.log("BEFORE", data);
  if (data && !data?.activation_status) {
    throw new ApiError(httpStatus.FORBIDDEN, "Activation Status is false");
  }
  console.log("AFTER");
  return data;
};
export const findAllStaff = async () => {
  const condition = { activation_status: true };
  const data = await Staff.findAll({ where: condition });

  return data;
};
