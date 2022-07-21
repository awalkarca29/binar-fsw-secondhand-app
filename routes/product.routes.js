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
router.get("/product", productController.findAllProductApi);

// Buyer
// Buyer can see detail product by id product
router.get(
  "/product/:id",
  authMiddleware.authorizationToken,
  productController.findProductByIdApi
);

// Seller
// Seller list products by userId
router.get(
  "/seller/product/0",
  authMiddleware.authorizationToken,
  productController.findProductByUserIdApi
);
// Seller create a new product
router.post(
  "/seller/product",
  authMiddleware.authorizationToken,
  productController.createNewProductApi
);
// Seller update product
router.put(
  "/seller/product/:id",
  authMiddleware.authorizationToken,
  productController.updateProductApi
);
// Seller delete product
router.delete(
  "/seller/product/:id",
  authMiddleware.authorizationToken,
  productController.deleteProduct
);

module.exports = router;
