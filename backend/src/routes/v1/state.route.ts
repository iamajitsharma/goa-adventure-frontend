import express from "express";
import { statesController } from "../../controllers";
const router = express.Router();

router.route("/:country").get(statesController.findByCountry);

router.route("/test/sqlTest").get(statesController.testSQL);

export default router;
