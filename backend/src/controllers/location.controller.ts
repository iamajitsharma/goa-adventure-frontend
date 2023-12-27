import { Request, Response } from "express";
const catchAsync = require("../utils/catchAsync");
import db from "../models";
import { locationService, invoiceService, smsService } from "../services";
const mediaInput = require("../middlewares/mediaInput");
const { QueryTypes, Op } = require("sequelize");

const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const ejs = require("ejs");

const data = require("../utils/data");

const Location = db.location;

// const ejs = require('ejs');
// const fs = require('fs');

// Create and Save a new blog
export const create = async (req: any, res: Response): Promise<void> => {
  try {
    // Validate request
    console.log("Req.body", req.body);
    if (!req.body) {
      console.log("Flailed");
      res.status(400).send({ message: "Content missing in body!" });
      return;
    }

    if (req.files?.image) {
      let response = await mediaInput.uploadMedia(req.files.image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.image = response.url;
    }

    const data = await locationService.createLocation(req.body);
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the product.",
    });
  }
};

export const findNotNullParent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await locationService.getNotNullParentLocation();
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving parent location.",
    });
  }
};

export const testOtpRoute = async (req: any, res: any) => {
  const data = {
    booking_id: "123",
    order_date: "24thAugust2023",
    customer_name: "Gupta",
  };
  const otpResponse = await smsService.orderFailed("8100500891", data);

  res.send({ otpResponse });
};

export const findLocationByParent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const paymentId = decodeURIComponent(req.params.id);
    console.log("Location Name ", req.params.locationName);
    const data = await locationService.getLocationByParent(
      req.params.locationName
    );
    if (!data) {
      res.status(404).send({ message: "Not found blooking with id " });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving blooking with id=" });
  }
};

export const update = async (req: any, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      res.status(422).send("Id is not vaild or it missing ");
    }
    console.log("Updation body", req.body);

    if (req.files?.image) {
      let response = await mediaInput.uploadMedia(req.files.image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.image = response.url;
    }

    const rowsUpdated = await locationService.updateLocation(req.body, id);

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Location with id=${id}. Maybe Location was not found!`,
      });
    } else {
      res.send({ message: "Location was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Location with id=",
    });
  }
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Location.findAll({ where: null });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const deleteLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    console.log("Bokkig id", id);
    if (!id) {
      res.status(422).send("Id is not vaild or it missing ");
    }

    const rowsDeleted = await locationService.deleteLocation(id);

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Location with id=${id}. Maybe Location was not found!`,
      });
    } else {
      res.send({
        message: "Location was deleted successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Tutorial with ",
    });
  }
};

export const homePageDestination = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await db.sequelize.query(
        `SELECT
        l.location,
        l.image, -- Include the "image" field from the "location" table
        MIN(CAST(REPLACE(p.price, '$', '') AS DECIMAL(10, 2))) AS minimum_price
    FROM
        location AS l
    LEFT JOIN
        products AS p ON
        (LOWER(l.location) = LOWER(p.country) OR
         LOWER(l.location) = LOWER(p.state) OR
         LOWER(l.location) = LOWER(p.city))
    WHERE
        l.parent_location IS NULL
    GROUP BY
        l.location, l.image -- Include "image" in the GROUP BY clause as well
    HAVING
        MIN(CAST(REPLACE(p.price, '$', '') AS DECIMAL(10, 2))) IS NOT NULL;
    
  
   
    `,

        {
          // replacements: { status: "active" },
          type: QueryTypes.SELECT,
        }
      );
      console.log("Data from bookign afadsfa", data);
      res.send(data);
    } catch (err: any) {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving blogs.",
      });
    }
  }
);
