import express from "express";
import { staffController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(staffController.findAll)
  .post(
    upload.fields([{ name: "profile_image", maxCount: 1 }]),
    staffController.create
  );

router
  .route("/:id")
  .put(
    upload.fields([{ name: "profile_image", maxCount: 1 }]),
    staffController.update
  );

router.route("/activate/:id").get(staffController.enableStaff);

router.route("/deactivate/:id").get(staffController.disableStaff);

export default router;
