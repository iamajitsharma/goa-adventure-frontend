import express from "express";
import { termsController } from "../../controllers";
const router = express.Router();

router
  .route("/")
  .get(termsController.findAll)
  .post(termsController.create)
  .put(termsController.update);

export default router;
