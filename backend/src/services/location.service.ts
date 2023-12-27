import db from "../models";
const Location = db.location;
const { QueryTypes, Op } = require("sequelize");
const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const mediaInput = require("../middlewares/mediaInput");
import { invoiceService } from ".";

export const createLocation = async (requestBody: any) => {
  const data1 = await Location.create(requestBody);
  console.log("Response after createing", data1);

  return data1.toJSON();
};

export const getNotNullParentLocation = async () => {
  const data = await Location.findAll({
    where: {
      parent_location: {
        [Op.is]: null,
      },
    },
    attributes: ["location"], // Specify the attributes you want to select
  });
  const locations = data.map((item: any) => item.get("location"));

  return locations;
};

export const getLocationByParent = async (locationName: string) => {
  const location = await Location.findAll({
    where: {
      [Op.or]: [{ location: locationName }, { parent_location: locationName }],
    },
  });
  return location;
};

export const updateLocation = async (
  updateBody: any,
  id: number
): Promise<number> => {
  const updateRows = await Location.update(updateBody, {
    where: { id: id },
  });
  return Number(updateRows);
};

export const deleteLocation = async (id: number): Promise<number> => {
  const deletedRows = await Location.destroy({
    where: { id: id },
  });
  return Number(deletedRows);
};
