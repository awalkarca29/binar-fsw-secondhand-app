const userRepository = require('../repository/users.repository.js');
const userService = require('../service/user.service.js');
const jwtUtil = require('../util/jwt.util.js');
const bcrypt = require('bcrypt');

exports.createNewUserApi = async (req, res) => {
    const user = await userService.createUser(req);

    res.status(201).json({ data: user });
}

exports.loginUserApi = async (req, res) => {
    const user = await userService.loginUser(req);

    if (user) {
        const payloadToken = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        const tokens = await jwtUtil.generateToken(payloadToken);

        res.status(200).json({ token: tokens });
        console.info(tokens);
    } else {
        res.status(401).json({ error: "Wrong login credetntial" });
    }
};

exports.userProfileApi = async (req, res) => {
    const user = await userService.currentUser(req);

    res.json({ data: user });
};

exports.updateUserApi = async (req, res) => {
    const token = req.headers.authorization.substring(
        7, req.headers.authorization.length);
    const decodedToken = await jwtUtil.decodeToken(token);
    const userId = await userRepository.findById(decodedToken.id);

    console.log(`User id detected is`, userId.id);

    const user = await userService.updateUser(req, userId.id);

    if (user == null) {
        res.status(404).json({ error: `User not found with Id : ${userId.id}` });
    } else {
        res.json({ message: "Updated successfully" });
    }
}