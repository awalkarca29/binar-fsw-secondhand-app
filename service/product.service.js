const jwtUtil = require("../util/jwt.util.js");
const cloudinaryConfig = require("../config/cloudinary.config.js");
const productRepository = require("../repository/product.repository.js");
const db = require("../models");
const User = db.user;

exports.findAllProducts = async () => {
  return await productRepository.findAll();
};

exports.findProductById = async (id) => {
  return await productRepository.findById(id);
};

exports.findProductByUserId = async (req, id) => {
  try {
    const userId = id;
    // console.log(`SERVICE User detected is `, userId);
    return await productRepository.findByUserId(userId);
  } catch (err) {
    console.error(err);
  }
};

exports.createNewProduct = async (payload, id) => {
  try {
    const uploadImage = await cloudinaryConfig.uploader.upload(
      payload.files.image.path
    );

    const product = {
      name: payload.fields.name,
      description: payload.fields.description,
      price: payload.fields.price,
      image: uploadImage.secure_url,
      isSold: false,
      userId: id,
      categoryId: payload.fields.categoryId,
    };

    return await productRepository.save(product);
  } catch (err) {
    console.error(err);
  }
};

exports.updateProduct = async (payload, ids) => {
  try {
    const uploadImage = await cloudinaryConfig.uploader.upload(
      payload.files.image.path
    );

    const product = {
      name: payload.fields.name,
      description: payload.fields.description,
      price: payload.fields.price,
      image: uploadImage.secure_url,
      isSold: false,
      categoryId: payload.fields.categoryId,
    };

    const productById = await productRepository.findById(ids);

    if (productById == null) {
      return null;
    } else {
      return await productRepository.update(product, ids);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.deleteProduct = async (product) => {
  productRepository.delete(product);
};
