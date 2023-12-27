import { Request, Response } from "express";
import db from "../models";
const mediaInput = require("../middlewares/mediaInput");
const catchAsync = require("../utils/catchAsync");
import { authService } from "../services";
import { BOOKED_BY, BOOKING_STATUS, USER_TYPES } from "../utils/constants";
import httpStatus from "http-status";
const ApiError = require("../utils/ApiError");
const Login = db.login;

// Create and Save a new blog
export const createLogin = async (req: any, res: Response): Promise<void> => {
  // try {
  // Validate request

  console.log("Req.body", req.body);

  if (!req.body.email) {
    res.status(400).send({ message: "Email missing in body!" });
    return;
  }
  if (!req.body) {
    console.log("Flailed");
    res.status(400).send({ message: "Content missing in body!" });
    return;
  }

  // Save blog in the database
  const data = await authService.createLogin(req.body, 1);
  res.send(data);
  // } catch (err: any) {
  //   res.status(401).send({
  //     message: err.message || "Some error occurred while creating the product.",
  //   });
  // }
};

export const userLoginWithEmailPassword = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApiError(
        httpStatus.UNPROCESSABLE_ENTITY,
        "Email or password not provided"
      );
    }
    let data = await authService.loginUser(email, password, req.body.loginType);

    // res.status(200).send({

    // });

    res.status(200).send({
      tokens: data.tokens,
      user: data?.user,
      role: data?.role,
    });
  }
);

export const findByState = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const state = decodeURIComponent(req.params.state);

    const data = await Login.findOne({
      where: { state_name: state },
      attributes: ["city_info"],
    });
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
    console.log("Received", req.body);
    if (req.body.active) {
      req.body.active = req.body.active == "true" ? true : false;
    }
    console.log("Received after", req.body);

    const [rowsUpdated] = await Login.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Login with id=${id}. Maybe Login was not found!`,
      });
    } else {
      res.send({ message: "Login was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Login with id=",
    });
  }
};

export const disableLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    console.log("REceived id", id);

    const rowsUpdated = await Login.update(
      { activation_status: false },
      {
        where: { id: id },
      }
    );

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Login with id=${id}. Maybe Login was not found!`,
      });
    } else {
      res.send({ message: "Login was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Login with id=",
    });
  }
};

export const enableLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsUpdated = await Login.update(
      { activation_status: true },
      {
        where: { id: id },
      }
    );

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Login with id=${id}. Maybe Login was not found!`,
      });
    } else {
      res.send({ message: "Login was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error updating Login with id=${req.params.id}`,
    });
  }
};

export const deleteLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await Login.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Login with id=${id}. Maybe Login was not found!`,
      });
    } else {
      res.send({
        message: "Login was deleted successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Tutorial with ",
    });
  }
};

export const deleteAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const rowsDeleted = await Login.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Logins were deleted successfully!`,
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
    const data = await Login.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
