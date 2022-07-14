const db = require("../models");
const Bargain = db.bargain;
const Product = db.product;
const jwtUtil = require("../util/jwt.util.js");
const bargainService = require("../service/bargain.service.js");
const userRepository = require("../repository/user.repository.js");
const productService = require("../service/product.service.js");

exports.createNewBargainApi = async (req, res) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  const userId = user.id;
  // const userId = 1;

  const bargain = await bargainService.createBargain(req, userId);

  res.status(201).json({ data: bargain });
};

exports.findAllBargainApi = async (req, res) => {
  const bargains = await bargainService.findAllBargains();

  res.json({
    data: bargains,
  });
};

exports.updateBargainApiAccept = async (req, res) => {
  const bargains = await bargainService.updateStatusAccepted(
    req,
    req.params.id
  );

  if (bargains == null) {
    res
      .status(404)
      .json({ error: `bargain not found with id : ${req.params.id}` });
  } else {
    res.json({ message: "Updated successfully" });
  }
};

exports.updateBargainApiReject = async (req, res) => {
  const bargains = await bargainService.updateStatusRejected(
    req,
    req.params.id
  );

  if (bargains == null) {
    res
      .status(404)
      .json({ error: `Bargain not found with id : ${req.params.id}` });
  } else {
    res.json({ message: "Updated successfully" });
  }
};
