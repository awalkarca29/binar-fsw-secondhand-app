const express = require("express");
const cors = require("cors");
const router = express.Router();
const userController = require("../controller/user.controller.js");
const authMiddleware = require("../middleware/middleware.js");

const corsOptions = {
  origin: "*",
};

router.use(cors(corsOptions));

// Create a new user
router.post("/api/v1/user/register", userController.createNewUserApi);
// Login user
router.post("/api/v1/user/login", userController.loginUserApi);
// Retrieve user data
router.get(
  "/api/v1/auth/profile",
  authMiddleware.authorizationToken,
  userController.userProfileApi
);
// Update user data
router.put("/api/v1/profile/update", userController.updateUserApi);

module.exports = router;
