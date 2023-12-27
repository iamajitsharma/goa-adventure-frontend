import express from "express";
import { manualBookingController } from "../../controllers";
const router = express.Router();
const multer = require("multer");

router
  .route("/")
  .get(manualBookingController.findAll)
  .post(manualBookingController.create);
router
  .route("/:id")
  .delete(manualBookingController.deleteBooking)
  .put(manualBookingController.update);

router.route("/invoice/:id").get(manualBookingController.findByPaymentId);

router.route("/new/test").get(manualBookingController.generateTestPdf);
export default router;
