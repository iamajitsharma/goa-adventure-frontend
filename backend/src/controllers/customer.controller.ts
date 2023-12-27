import { Request, Response } from "express";
import db from "../models";
const mediaInput = require("../middlewares/mediaInput");
import httpStatus from "http-status";
const ApiError = require("../utils/ApiError");

import {
  authService,
  customerService,
  staffService,
  bookingService,
} from "../services";
import { bookingController } from ".";

const Customer = db.customer;

// Create and Save a new blog
export const create = async (req: any, res: Response): Promise<void> => {
  try {
    // Validate request
    console.log("Working", req.files);

    const existingUserCheck = await staffService.getStaffByEmail(
      req.body.email
    );
    console.log("EXISTING STAFF", existingUserCheck);
    if (existingUserCheck?.email) {
      throw new ApiError(httpStatus.NOT_IMPLEMENTED, "User already exist");
    }

    if (req.files?.profile_image) {
      let response = await mediaInput.uploadMedia(req.files.profile_image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.profile_image = response.url;
    }

    req.body.status = req.body.status == "true" ? true : false;
    console.log("Req.body", req.body);
    if (!req.body) {
      console.log("Flailed");
      res.status(400).send({ message: "Content missing in body!" });
      return;
    }
    console.log("Request boyd", req.body);
    const createLogin = await authService.createLogin(req.body, 1);
    // Save blog in the database
    // const data = await Customer.create(req.body);
    const data = await customerService.createCustomer(req.body);
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the product.",
    });
  }
};

export const customerMobileLogin = async (
  req: any,
  res: Response
): Promise<void> => {
  console.log("Req.body", req.body);

  let logInData = await authService.loginUserMobile(
    req.body.mobile_number,
    req.body.password,
    [1]
  );
  res.send(logInData);
};

export const customerEmailLogin = async (
  req: any,
  res: Response
): Promise<void> => {
  let logInData = await authService.loginUser(
    req.body.email,
    req.body.password,
    [1]
  );
  res.send(logInData);
};

export const createCustomerAndLogin = async (
  req: any,
  res: Response
): Promise<void> => {
  try {
    // Validate request
    console.log("Working received", req.body);
    let password: any = process.env.DEFAULT_PASSWORD;
    if (req.body.password) {
      password = req.body.password;
    }
    const existingUserCheck = await staffService.getStaffByEmail(
      req.body.email
    );
    console.log("EXISTING STAFF", existingUserCheck);
    if (existingUserCheck?.email) {
      throw new ApiError(httpStatus.NOT_IMPLEMENTED, "");
    }

    req.body.status = req.body.status == "true" ? true : false;
    console.log("Req.body", req.body);
    if (!req.body) {
      console.log("Flailed");
      res.status(400).send({ message: "Content missing in body!" });
      return;
    }
    console.log("Request boyd", req.body);
    const createLogin = await authService.createLogin(req.body, 1);
    // Save blog in the database
    // const data = await Customer.create(req.body);
    const data = await customerService.createCustomer(req.body);

    console.log("LOGGED IN APSSWORD", password);
    let logInData = await authService.loginUser(req.body.email, password, [1]);
    res.send(logInData);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the product.",
    });
  }
};

export const customerBookings = async (
  req: Request,
  res: Response
): Promise<void> => {
  const customerId = req.params.id;
  const bookings = await bookingService.getCustomerBookings(customerId);
  res.send({ bookings });
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    const condition = { activation_status: true };

    const data = await customerService.findAllCustomer();
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const findById = async (req: Request, res: Response): Promise<void> => {
  try {
    const customerId = req.params.id;
    console.log("Cusotymer id", customerId);

    const data = await Customer.findByPk(customerId);
    if (!data) {
      res.status(404).send({ message: "Not found blog with id " });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving blog with id=" });
  }
};

export const update = async (req: any, res: any): Promise<void> => {
  try {
    const id = req.params.id;

    if (req.files?.profile_image) {
      let response = await mediaInput.uploadMedia(req.files.profile_image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.profile_image = response.url;
    }
    if (req.body.status) {
      req.body.status = req.body.status == "true" ? true : false;
    }
    console.log("Req.body", req.body);

    const rowsUpdated = await Customer.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Customer with id=${id}. Maybe Customer was not found!`,
      });
    } else {
      res.send({ message: "Customer was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Customer with id=",
    });
  }
};

export const disableCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    console.log("REceived id", id);

    const rowsUpdated = await Customer.update(
      { activation_status: false },
      {
        where: { id: id },
      }
    );

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Customer with id=${id}. Maybe Customer was not found!`,
      });
    } else {
      res.send({ message: "Customer was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Customer with id=",
    });
  }
};

export const enableCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsUpdated = await Customer.update(
      { activation_status: true },
      {
        where: { id: id },
      }
    );

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Customer with id=${id}. Maybe Customer was not found!`,
      });
    } else {
      res.send({ message: "Customer was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error updating Customer with id=${req.params.id}`,
    });
  }
};

// export const deleteCustomer = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const id = req.params.id;

//     const rowsDeleted = await Customer.destroy({
//       where: { id: id },
//     });

//     if (rowsDeleted === 0) {
//       res.status(404).send({
//         message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
//       });
//     } else {
//       res.send({
//         message: "Customer was deleted successfully!",
//       });
//     }
//   } catch (err) {
//     res.status(500).send({
//       message: "Could not delete Tutorial with ",
//     });
//   }
// };

export const deleteAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const rowsDeleted = await Customer.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Customers were deleted successfully!`,
    });
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all blogs.",
    });
  }
};

export const findAllPublished = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await Customer.findAll({ where: { activation_status: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
