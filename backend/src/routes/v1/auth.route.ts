import express from "express";
import { authController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router.route("/customer").post(authController.createLogin);

router
  .route("/customer/verify/password-login")
  .post(authController.userLoginWithEmailPassword);

router
  .route("/:id")
  .put(
    upload.fields([{ name: "categoryImage", maxCount: 1 }]),
    authController.update
  );

// router.route("/activate/:id").get(authController.enableCategory);

// router.route("/deactivate/:id").get(authController.disableCategory);

export default router;
