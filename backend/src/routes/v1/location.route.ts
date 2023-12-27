import express from "express";
import { locationController } from "../../controllers";
import { emailService } from "../../services";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(locationController.findAll)
  .post(
    upload.fields([{ name: "image", maxCount: 1 }]),
    locationController.create
  );

router
  .route("/getHomePageDestination")
  .get(locationController.findNotNullParent);

router
  .route("/getLocationFromParent/:locationName")
  .get(locationController.findLocationByParent);

router
  .route("/:id")
  .put(
    upload.fields([{ name: "image", maxCount: 1 }]),
    locationController.update
  );

router.route("/testRouteEmail").get(emailService.sendEmail);

router.route("/testOtpRoute").get(locationController.testOtpRoute);

router
  .route("/getMainHomePageDestination")
  .get(locationController.homePageDestination);

export default router;
