const express = require('express');
const cors = require('cors');
const router = express.Router();
const userController = require('../controller/users.controller.js');
const authMiddleware = require('../middleware/middleware.js');

const corsOptions = {
    origin: "*"
};

router.use(cors(corsOptions));

// Create a new user
router.post( "/api/v1/user/register", userController.createNewUserApi);
// Login user
router.post('/api/v1/user/login', userController.loginUserApi);
// Retrieve user data
router.get('/auth/profile', authMiddleware.authorizationToken, userController.userProfileApi);
// Update user data
router.put('/profile/update', userController.updateUserApi);

module.exports = router;