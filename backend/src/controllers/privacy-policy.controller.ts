import { Request, Response } from "express";
import db from "../models";

const PrivacyPolicies = db.privacy_policies;

// Create and Save a new blog
export const create = async (req: Request, res: Response): Promise<void> => {
  console.log("HItted request boud", req.body);
  try {
    // Validate request
    if (!req.body.privacy_policies) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Save blog in the database
    const data = await PrivacyPolicies.create(req.body);
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the product.",
    });
  }
};

export const findAll = async (req: Request, res: Response): Promise<void> => {
  console.log("hitted");
  try {
    const data = await PrivacyPolicies.findAll({ where: null });
    res.send(data[0]);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const findByState = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const state = decodeURIComponent(req.params.state);

    const data = await PrivacyPolicies.findOne({
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

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rowsUpdated] = await PrivacyPolicies.update(req.body, {
      where: { id: 1 },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update PrivacyPolicies . Maybe PrivacyPolicies was not found!`,
      });
    } else {
      res.send({ message: "PrivacyPolicies was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating PrivacyPolicies with id=",
    });
  }
};

export const deletePrivacyPolicies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await PrivacyPolicies.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete PrivacyPolicies with id=${id}. Maybe PrivacyPolicies was not found!`,
      });
    } else {
      res.send({
        message: "PrivacyPolicies was deleted successfully!",
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
    const rowsDeleted = await PrivacyPolicies.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} PrivacyPoliciess were deleted successfully!`,
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
    const data = await PrivacyPolicies.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
