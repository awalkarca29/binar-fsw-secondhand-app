const jwt = require('jsonwebtoken');
const user = require('../models/user.js');
const jwtUtil = require('../util/jwt.util.js');
const userRepository = require('../repository/users.repository.js');

exports.authorizationToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    const decodedToken = await jwtUtil.decodeToken(token);

    const user = await userRepository.findByEmail(decodedToken.email);

    console.info(decodedToken);

    if (token == null) return res.sendStatus(401);

    if (decodedToken.email == user.email) return next();

    if (decodedToken.email != user.email) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(401)

        req.user = user

        next();
    });
};