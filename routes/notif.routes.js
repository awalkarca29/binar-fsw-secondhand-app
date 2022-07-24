const express = require("express");
const cors = require("cors");
const router = express.Router();
const notificationController = require("../controller/notification.controller.js");
const authMiddleware = require("../middleware/middleware.js");

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

router.get(
  "/notification/seller",
  notificationController.findNotificationByUserIdBargained
);
router.get(
  "/notification/buyer",
  notificationController.findNotificationByUserIdAccepted
);

module.exports = router;
