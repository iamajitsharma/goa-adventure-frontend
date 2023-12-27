import express from "express";
import { bookingController } from "../../controllers";
const router = express.Router();
const multer = require("multer");

router.route("/").get(bookingController.findAll).post(bookingController.create);
router
  .route("/:id")
  .delete(bookingController.deleteBooking)
  .put(bookingController.update);

router.route("/invoice/:id").get(bookingController.findByPaymentId);

router
  .route("/display-invoice/:paymentId")
  .get(bookingController.renderInvoice);

router.route("/new/test").get(bookingController.generateTestPdf);
export default router;
