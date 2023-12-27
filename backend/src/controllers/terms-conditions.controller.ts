import { Request, Response } from "express";
import db from "../models";

const TermsConditions = db.terms_conditions;

// Create and Save a new blog
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request
    if (!req.body.terms_conditions) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Save blog in the database
    const data = await TermsConditions.create(req.body);
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
    const data = await TermsConditions.findAll({ where: null });
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

    const data = await TermsConditions.findOne({
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
    const [rowsUpdated] = await TermsConditions.update(req.body, {
      where: { id: 1 },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update TermsConditions. Maybe TermsConditions was not found!`,
      });
    } else {
      res.send({ message: "TermsConditions was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating TermsConditions with id=",
    });
  }
};

export const deleteTermsConditions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await TermsConditions.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete TermsConditions with id=${id}. Maybe TermsConditions was not found!`,
      });
    } else {
      res.send({
        message: "TermsConditions was deleted successfully!",
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
    const rowsDeleted = await TermsConditions.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} TermsConditionss were deleted successfully!`,
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
    const data = await TermsConditions.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
