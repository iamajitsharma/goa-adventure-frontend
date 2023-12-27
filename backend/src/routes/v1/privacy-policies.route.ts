import express from "express";
import { privacyController } from "../../controllers";
const router = express.Router();

router
  .route("/")
  .get(privacyController.findAll)
  .post(privacyController.create)
  .put(privacyController.update);

export default router;
