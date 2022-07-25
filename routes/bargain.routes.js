const express = require("express");
const cors = require("cors");
const router = express.Router();
const bargainController = require("../controller/bargain.controller.js");
const productController = require("../controller/product.controller.js");
const authMiddleware = require("../middleware/middleware.js");

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

// debug get all bargain by user id
router.get("/buyer/bargain", bargainController.findAllBargainApi);

// Create a new transaction
router.post("/buyer/bargain", bargainController.createNewBargainApi);

// Edit bargain status accepted
router.put(
  "/buyer/bargain/:id/accept",
  authMiddleware.authorizationToken,
  bargainController.updateBargainApiAccept
);
// Edit bargain status rejected
router.put(
  "/buyer/bargain/:id/reject",
  authMiddleware.authorizationToken,
  bargainController.updateBargainApiReject
);
// Edit bargain status sold
router.put(
  "/buyer/bargain/:id/sold",
  authMiddleware.authorizationToken,
  bargainController.updateBargainApiSold,
  productController.updateProductSold
);
// Find history by success status
router.get(
  "/history",
  authMiddleware.authorizationToken,
  bargainController.findBargainSold
);
// Find all bargain by product id
router.get(
  "/seller/product/:id/info",
  authMiddleware.authorizationToken,
  bargainController.getAllBargainByProductId
);

module.exports = router;
