const db = require("../models");
const jwtUtil = require("../util/jwt.util.js");
const productService = require("../service/product.service.js");
const userRepository = require("../repository/user.repository.js");
const Product = db.product;

exports.findAllProductApi = async (req, res) => {
  const products = await productService.findAllProducts();

  res.json({ data: products });
};

exports.findProductByIdApi = async (req, res) => {
  const products = await productService.findProductById(req.params.id);

  if (products !== null) {
    res.json({ data: products });
  } else {
    res.status(404).json({ error: "Data not found" });
  }
};

exports.findProductByUserIdApi = async (req, res) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  // console.log(`CONTROLLER User detected is `, user.id);

  const products = await productService.findProductByUserId(req, user.id);

  if (products == null) {
    res
      .status(404)
      .json({ error: `Product not found with userId : ${(req, user.id)}` });
  } else {
    res.json({ data: products });
  }
};

exports.createNewProductApi = async (req, res) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const userId = await userRepository.findById(decodedToken.id);

  const products = await productService.createNewProduct(req, userId.id);

  res.status(201).json({
    data: products,
  });
};

exports.updateProductApi = async (request, response) => {
  const products = await productService.updateProduct(
    request,
    request.params.id
  );

  if (products == null) {
    response
      .status(404)
      .json({ error: `Products not found with ids : ${request.params.id}` });
  } else {
    response.status(200).json({ message: "Updated successfully" });
  }
};

exports.deleteProduct = (req, res) => {
  Product.findByPk(req.params.id).then((result) => {
    if (result != null) {
      result.destroy();

      res.status(204).json({ message: "Delete Successfully" });
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  });
};

exports.updateProductSold = async (req, res) => {
  const products = await productService.updateIsSold(req, req.params.id);

  if (products == null) {
    res.status(404);
  } else {
    res.status(200);
  }
};
