import express from "express";
import { categoryController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(categoryController.findAll)
  .post(
    upload.fields([{ name: "categoryImage", maxCount: 1 }]),
    categoryController.create
  );

router
  .route("/:id")
  .get(categoryController.findOne)
  .put(
    upload.fields([{ name: "categoryImage", maxCount: 1 }]),
    categoryController.update
  );

router.route("/activate/:id").get(categoryController.enableCategory);

router.route("/deactivate/:id").get(categoryController.disableCategory);

export default router;
