const express = require("express");
const cors = require("cors");
const router = express.Router();
const productController = require("../controller/product.controller.js");
const authMiddleware = require("../middleware/middleware.js");

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

// All products in home
router.get("/api/v1/product", productController.findAllProductApi);

// Buyer
// Buyer can see detail product by id product
router.get("/api/v1/product/:id", productController.findProductByIdApi);

// Seller
// Seller list products by userId
router.get(
  "/api/v1/seller/product/0",
  authMiddleware.authorizationToken,
  productController.findProductByUserIdApi
);
// Seller create a new product
router.post(
  "/api/v1/seller/product",
  authMiddleware.authorizationToken,
  productController.createNewProductApi
);
// Seller update product
router.put(
  "/api/v1/seller/product/:id",
  authMiddleware.authorizationToken,
  productController.updateProductApi
);
// Seller delete product
router.delete(
  "/api/v1/seller/product/:id",
  authMiddleware.authorizationToken,
  productController.deleteProduct
);

module.exports = router;
