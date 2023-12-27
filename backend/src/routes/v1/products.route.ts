import express from "express";
import { productsController } from "../../controllers";
const router = express.Router();
const multer = require("multer");
const upload = multer();

router
  .route("/")
  .get(productsController.findAll)
  .post(
    upload.fields([
      { name: "featured_image", maxCount: 1 },
      { name: "gallery", maxCount: 10 },
    ]),
    productsController.create
  );

router
  .route("/:id")
  .put(
    upload.fields([
      { name: "featured_image", maxCount: 1 },
      { name: "gallery", maxCount: 10 },
    ]),
    productsController.update
  )
  .get(productsController.findBySlug);

router.route("/getProductById/:id").get(productsController.findOne);

router
  .route("/getProductFromSubCategory/:subCategoryId")
  .get(productsController.getProductFromSubCategory);

router.route("/activate/:id").get(productsController.enableProduct);

router.route("/deactivate/:id").get(productsController.disableProduct);

router.route("/tours/getHomePageTours").get(productsController.homePageTours);

router
  .route("/activity/getHomePageActivity")
  .get(productsController.homePageActivity);

router
  .route("/home-page-search/:search_text")
  .get(productsController.homePageSearch);

router.route("/test-api/test").get(productsController.testApi);

router.route("/price-range/filter").get(productsController.getPriceRange);

router
  .route("/products-list/filter")
  .get(productsController.getProductsWithFilter);

export default router;
