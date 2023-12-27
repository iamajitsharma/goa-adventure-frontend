import { Request, Response } from "express";
import db from "../models";
import slugify from "slugify";
const mediaInput = require("../middlewares/mediaInput");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { QueryTypes, Op } = require("sequelize");
const pick = require("../utils/pick");
const Product = db.product;
const { Sequelize, DataTypes } = require("sequelize");

// Create and Save a new blog
export const create = async (req: any, res: Response): Promise<void> => {
  try {
    // Validate request
    if (req.body.title) {
      req.body.slug = slugify(req.body.title.toLowerCase());
    }

    console.log("Working", req.body);

    if (req.files?.featured_image) {
      let response = await mediaInput.uploadMedia(req.files.featured_image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.featured_image = response.url;
    }
    console.log("First one done", req.body);
    if (req.files?.gallery) {
      let gallery = [];
      console.log("Gallery array", req.files.gallery);
      for (let i = 0; i < req.files?.gallery.length; i++) {
        console.log("buffer", req.files.gallery[i]);
        let response = await mediaInput.uploadMedia(req.files.gallery[i]);

        if (!response.uploaded) {
          res.status(500).send({
            message: "File Could not get uploaded please try again later!",
          });
        }
        gallery.push(response.url);
        console.log("Gallery image", gallery);
      }
      console.log("Final gallery allotment", gallery);
      req.body.gallery = gallery;
    }
    if (req.body.highlight?.length > 3) {
      req.body.highlight = JSON.parse(req.body.highlight);
    }
    if (req.body.activity_inclusion?.length > 3) {
      req.body.activity_inclusion = JSON.parse(req.body.activity_inclusion);
    }

    if (req.body.meeting_point.length > 3) {
      req.body.meeting_point = JSON.parse(req.body.meeting_point);
    }
    if (req.body.keywords.length > 3) {
      req.body.keywords = JSON.parse(req.body.keywords);
    }
    if (req.body.activity_exclusion?.length > 3) {
      req.body.activity_exclusion = JSON.parse(req.body.activity_exclusion);
    }
    req.body.allow_cancel = req.body.allow_cancel == "true" ? true : false;
    req.body.allow_deposit = req.body.allow_deposit == "true" ? true : false;
    req.body.subcategory_id = Number(req.body.subcategory_id);
    req.body.category_id = Number(req.body.category_id);
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    console.log("Requst", req.body);
    // Save blog in the database
    const data = await Product.create(req.body);
    res.send(data);
  } catch (err: any) {
    console.log("Failed here");
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
    const condition = { activation_status: true };

    const data = await Product.findAll({ where: condition });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const getProductsWithFilter = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    // const condition = { activation_status: true };
    const filter = pick(req.query, [
      "category_id",
      "subcategory_id",
      "min_price",
      "max_price",
    ]);
    if (filter.min_price && filter.max_price) {
      filter.price = {
        [Op.and]: [
          Sequelize.literal(
            `CAST("Product"."price" AS DECIMAL(10, 2)) > ${filter.min_price}`
          ),
          Sequelize.literal(
            `CAST("Product"."price" AS DECIMAL(10, 2)) < ${filter.max_price}`
          ),
        ],
      };

      delete filter.min_price;
      delete filter.max_price;
    }
    filter.activation_status = true;
    console.log("FIlter condiitoynsin products get", filter);

    const data = await Product.findAll({ where: filter });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const testApi = async (req: Request, res: Response): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    const data = req.query;
    console.log("QUEry ", data);
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const homePageSearch = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    const search_text = req.params.search_text;
    console.log("QUEry ", search_text);

    const data = await db.sequelize.query(
      `SELECT 'categories' AS table_name, id, category AS result FROM categories WHERE category ILIKE '%${search_text}%'
      UNION
      SELECT 'subcategories' AS table_name, id, subcategory AS result FROM subcategories WHERE subcategory ILIKE '%${search_text}%'
      ;
    `,

      {
        // replacements: { status: "active" },
        type: QueryTypes.SELECT,
      }
    );
    console.log("Data from bookign", data);
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const getPriceRange = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    // const condition = { activation_status: true };
    const filter = pick(req.query, ["category_id", "subcategory_id"]);
    filter.activation_status = true;

    const data = await Product.findAll({
      attributes: [
        [Sequelize.literal("MIN(CAST(price AS DECIMAL(10, 2)))"), "min_price"],
        [Sequelize.literal("MAX(CAST(price AS DECIMAL(10, 2)))"), "max_price"],
      ],
      where: filter,
    });

    console.log("Data from products price range", data);
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};
export const findBySlug = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("hitted");
  try {
    // const content = req.query.content;
    // const condition = content ? { state_name: content } : null;
    const condition = { activation_status: true, slug: req.params.id };

    const data = await Product.findAll({ where: condition });
    res.send(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const getProductFromSubCategory = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const subCategoryId = req.params.subCategoryId;
    if (!subCategoryId) {
      throw new ApiError(
        httpStatus.UNPROCESSABLE_ENTITY,
        "SubCategory Id not provided"
      );
    }

    const products = await Product.findAll({
      raw: true,
      where: { activation_status: true, subcategory_id: subCategoryId },
    });
    res.status(200).send(products);
  }
);

export const findOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const data = await Product.findByPk(id);
    if (!data) {
      res.status(404).send({ message: "Not found blog with id " + id });
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

    if (req.files?.featured_image) {
      let response = await mediaInput.uploadMedia(req.files.featured_image[0]);

      if (!response.uploaded) {
        res.status(500).send({
          message: "File Could not get uploaded please try again later!",
        });
      }
      req.body.featured_image = response.url;
    }
    console.log("First one done", req.body);
    if (req.files?.gallery) {
      let gallery = [];
      console.log("Gallery array", req.files.gallery);
      for (let i = 0; i < req.files?.gallery.length; i++) {
        console.log("buffer", req.files.gallery[i]);
        let response = await mediaInput.uploadMedia(req.files.gallery[i]);

        if (!response.uploaded) {
          res.status(500).send({
            message: "File Could not get uploaded please try again later!",
          });
        }
        gallery.push(response.url);
        console.log("Gallery image", gallery);
      }
      console.log("Final gallery allotment", gallery);
      req.body.gallery = gallery;
    }
    if (req.body.highlight?.length > 3) {
      req.body.highlight = JSON.parse(req.body.highlight);
    }
    if (req.body.activity_inclusion?.length > 3) {
      req.body.activity_inclusion = JSON.parse(req.body.activity_inclusion);
    }
    if (req.body.activity_exclusion?.length > 3) {
      req.body.activity_exclusion = JSON.parse(req.body.activity_exclusion);
    }
    if (req.body.meeting_point.length > 3) {
      req.body.meeting_point = JSON.parse(req.body.meeting_point);
    }
    if (req.body.keywords.length > 3) {
      req.body.keywords = JSON.parse(req.body.keywords);
    }
    req.body.allow_cancel = req.body.allow_cancel == "true" ? true : false;
    req.body.allow_deposit = req.body.allow_deposit == "true" ? true : false;

    if (req.body.title) {
      req.body.slug = slugify(req.body.title.toLowerCase());
    }
    console.log("JUST BEFOERF", req.body);
    const [rowsUpdated] = await Product.update(req.body, {
      where: { id: id },
    });

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
      });
    } else {
      res.send({ message: "Product was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Product with id=",
    });
  }
};

export const disableProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    console.log("REceived id", id);

    const rowsUpdated = await Product.update(
      { activation_status: false },
      {
        where: { id: id },
      }
    );

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
      });
    } else {
      res.send({ message: "Product was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Product with id=",
    });
  }
};

export const enableProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const rowsUpdated = await Product.update(
      { activation_status: true },
      {
        where: { id: id },
      }
    );

    if (rowsUpdated === 0) {
      res.status(404).send({
        message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
      });
    } else {
      res.send({ message: "Product was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error updating Product with id=${req.params.id}`,
    });
  }
};

// export const deleteProduct = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const id = req.params.id;

//     const rowsDeleted = await Product.destroy({
//       where: { id: id },
//     });

//     if (rowsDeleted === 0) {
//       res.status(404).send({
//         message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
//       });
//     } else {
//       res.send({
//         message: "Product was deleted successfully!",
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
    const rowsDeleted = await Product.destroy({
      where: {},
      truncate: false,
    });

    res.send({
      message: `${rowsDeleted} Products were deleted successfully!`,
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
    const data = await Product.findAll({ where: { published: true } });
    res.send(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving blogs.",
    });
  }
};

export const homePageTours = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await db.sequelize.query(
        `SELECT
        pr.*,
        sc.subcategory,
        cat.category 
    FROM
        products AS pr
    INNER JOIN
        subcategories AS sc ON pr.subcategory_id = sc.id
    INNER JOIN
        categories AS cat ON pr.category_id = cat.id
    WHERE
        pr.category_id = 28
        AND pr.activation_status = true; `,

        {
          // replacements: { status: "active" },
          type: QueryTypes.SELECT,
        }
      );
      console.log("Data from bookign", data);
      res.send(data);
    } catch (err: any) {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving blogs.",
      });
    }
  }
);

export const homePageActivity = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await db.sequelize.query(
        `SELECT
        pr.*,
        sc.subcategory,
        cat.category 
    FROM
        products AS pr
    INNER JOIN
        subcategories AS sc ON pr.subcategory_id = sc.id
    INNER JOIN
        categories AS cat ON pr.category_id = cat.id
    WHERE
        pr.category_id = 29
        AND pr.activation_status = true;
    `,

        {
          // replacements: { status: "active" },
          type: QueryTypes.SELECT,
        }
      );
      console.log("Data from bookign", data);
      res.send(data);
    } catch (err: any) {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving blogs.",
      });
    }
  }
);
