import express from "express";
import { quotationController } from "../../controllers";
const router = express.Router();
const multer = require("multer");

router
  .route("/")
  .get(quotationController.findAll)
  .post(quotationController.create);

router
  .route("/:id")
  .get(quotationController.findOne)
  .delete(quotationController.deleteQuotation)
  .put(quotationController.update);

router
  .route("/display-quotation/:quotationId")
  .get(quotationController.renderQuotation);

export default router;
