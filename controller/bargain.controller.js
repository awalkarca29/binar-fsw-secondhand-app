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

  const buyerId = user.id;

  const bargain = await bargainService.createBargain(req, buyerId);

  res.status(201).json({ data: bargain });
};

exports.findAllBargainApi = async (req, res) => {
  const bargains = await bargainService.findAllBargains();

  res.json({
    data: bargains,
  });
};

exports.getAllBargainByProductId = async (req, res) => {
  const bargains = await bargainService.findBargainByProductId(req.params.id);

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

exports.updateBargainApiSold = async (req, res, next) => {
  const bargains = await bargainService.updateStatusSold(req, req.params.id);

  if (bargains == null) {
    res
      .status(404)
      .json({ error: `Bargain not found with id : ${req.params.id}` });
  } else {
    res.json({ message: "Updated successfully" });
  }

  next();
};

exports.findBargainSold = async (req, res) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  const bargain = await bargainService.findBargainSoldByUserId(user.id);

  if (bargain == null) {
    res
      .status(404)
      .json({ error: `Transaction not found with userId : ${user.id}` });
  } else {
    res.json({ data: bargain });
  }
};
