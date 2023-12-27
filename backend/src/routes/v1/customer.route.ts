import express from "express";
import { customerController } from "../../controllers";
import { USER_TYPES } from "../../utils/constants";
const router = express.Router();
const multer = require("multer");
const upload = multer();
const auth = require("../../middlewares/auth");

router
  .route("/")
  // .get(auth([USER_TYPES.SUPER_ADMIN]), customerController.findAll)
  .get(customerController.findAll)
  .post(
    upload.fields([{ name: "profile_image", maxCount: 1 }]),
    customerController.create
  );

router
  .route("/mobile-number-login")

  .post(customerController.customerMobileLogin);

router
  .route("/email-login")

  .post(customerController.customerEmailLogin);

router
  .route("/create-and-login-customer")
  .post(customerController.createCustomerAndLogin);

router.route("/bookings/:id").get(customerController.customerBookings);

router
  .route("/:id")
  .get(customerController.findById)
  .put(
    upload.fields([{ name: "profile_image", maxCount: 1 }]),
    customerController.update
  );

router.route("/activate/:id").get(customerController.enableCustomer);

router.route("/deactivate/:id").get(customerController.disableCustomer);

export default router;
