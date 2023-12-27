import express from "express";
import { paymentController } from "../../controllers";
const router = express.Router();

router.route("/create-order").post(paymentController.createOrder);

router.route("/webhook").post(paymentController.paymentVerification);

export default router;
