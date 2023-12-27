import express from "express";
import { subCategoryController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(subCategoryController.findAll)
  .post(
    upload.fields([{ name: "subCategoryImage", maxCount: 1 }]),
    subCategoryController.create
  );

router
  .route("/:id")
  .put(
    upload.fields([{ name: "subCategoryImage", maxCount: 1 }]),
    subCategoryController.update
  );
router
  .route("/getSubCategoryByCategory/:categoryId")
  .get(subCategoryController.getSubCatByCatId);

router.route("/activate/:id").get(subCategoryController.enableSubCategory);

router.route("/deactivate/:id").get(subCategoryController.disableSubCategory);

export default router;
