import { Request, Response } from "express";
import db from "../models";
const { QueryTypes } = require("sequelize");
import { quotationService } from "../services";
import httpStatus from "http-status";
const ApiError = require("../utils/ApiError");

const Quotation = db.quotation;

// Create and Save a new blog
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Save blog in the database
    const data = await quotationService.createQuotation(req.body);
    const generatePdf = await quotationService.generateQuotationPdf(data.id);
    console.log("Genearte quotrtatin pdf ", generatePdf);

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
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;

    const data = await Quotation.findAll({ where: null });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

//Find Quotation By ID
export const findOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const data = await Quotation.findByPk(id);
    if (!data) {
      res.status(404).send({ message: "Not found blog with id " + id });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: "Error retrieving blog with id=" });
  }
};

export const findByCountry = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const country = decodeURIComponent(req.params.country);

    const data = await Quotation.findOne({
      where: { country_name: country },
      attributes: ["states"],
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
    const id = req.params.id;

    const [rowsUpdated] = await Quotation.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Quotation with id=${id}. Maybe Quotation was not found!`,
      });
    } else {
      const generatePdf = await quotationService.generateQuotationPdf(
        Number(id)
      );
      console.log("GENERATED PDF AFTER EDIT", generatePdf);
      res.send({ message: "Quotation was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Quotation with id=",
    });
  }
};

export const deleteQuotation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsDeleted = await Quotation.destroy({
      where: { id: id },
    });

    if (rowsDeleted === 0) {
      res.status(404).send({
        message: `Cannot delete Quotation with id=${id}. Maybe Quotation was not found!`,
      });
    } else {
      res.send({
        message: "Quotation was deleted successfully!",
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
    const rowsDeleted = await Quotation.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Quotations were deleted successfully!`,
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
    const data = await Quotation.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const testSQL = async (req: Request, res: Response): Promise<void> => {
  let product_id = 14,
    customer_id = 7;
  let response = await db.sequelize.query(
    `SELECT * FROM products JOIN customers ON products.id = ${product_id} AND customers.id = ${customer_id};`,
    {
      // replacements: { status: "active" },
      type: QueryTypes.SELECT,
    }
  );
  // console.log("Response from postgres for test", response);

  // let response = "ankit";
  // throw new ApiError(httpStatus.FORBIDDEN, "Unauthorized");
  res.send(response);
};

export const renderQuotation = async (req: any, res: any) => {
  let quottaionInfo = await quotationService.getQuotation(
    req.params.quotationId
  );

  console.log("Quotation info received", quottaionInfo);

  res.render("quotation-template", quottaionInfo);
};
