const express = require("express");
const cors = require("cors");
const router = express.Router();
const bargainController = require("../controller/bargain.controller.js");
const authMiddleware = require("../middleware/middleware.js");

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

// Create a new transaction
router.post("/api/v1/buyer/bargain/", bargainController.createNewBargainApi);
// // Get all bargain as Notification
// router.get("/api/v1/user/notification", bargainController.findAllBargainApi);

// Edit bargain status accepted
router.put(
  "/api/v1/buyer/bargain/:id/accept",
  authMiddleware.authorizationToken,
  bargainController.updateBargainApiAccept
);
// Edit bargain status rejected
router.put(
  "/api/v1/buyer/bargain/:id/reject",
  authMiddleware.authorizationToken,
  bargainController.updateBargainApiReject
);

module.exports = router;
