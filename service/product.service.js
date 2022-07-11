const jwtUtil = require("../util/jwt.util.js");
const cloudinaryConfig = require("../config/cloudinary.config.js");
const productRepository = require("../repository/products.repository.js");
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
    console.log(`SERVICE User detected is `, userId);
    return await productRepository.findByUserId(userId);
  } catch (err) {
    console.error(err);
  }
};

exports.createNewProduct = async (payload, id) => {
  try {
    const uploadImage = await cloudinaryConfig.uploader.upload(
      payload.files.images.path
    );

    const product = {
      name: payload.fields.name,
      price: payload.fields.price,
      description: payload.fields.description,
      categories: payload.fields.categories,
      userId: id,
      images: uploadImage.secure_url,
    };

    if (payload.fields.categoryId == null) {
      product.categoryId = 1;

      return await productRepository.save(product);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.updateProduct = async (payload, ids) => {
  try {
    const product = {
      name: payload.fields.name,
      price: payload.fields.price,
      description: payload.fields.description,
      categories: payload.fields.categories,
      images: "",
    };

    const productById = await productRepository.findById(ids);

    if (productById == null) {
      return null;
    } else {
      const uploadImages = await cloudinaryConfig.uploader.upload(
        payload.files.images.path
      );
      product.images = uploadImages.secure_url;

      return await productRepository.update(product, ids);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.updateProductBargain = async (payload, ids) => {
  try {
    const product = {
      categoryId: 2,
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
