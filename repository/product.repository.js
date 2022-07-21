const db = require("../models/index.js");
const Product = db.product;
const User = db.user;
const Category = db.category;

exports.findAll = async () => {
  return await Product.findAll({
    include: [{ model: User }, { model: Category }],
  });
};

exports.findById = async (id) => {
  return await Product.findByPk(id, {
    include: [{ model: User }, { model: Category }],
  });
};

exports.findByUserId = async (userId) => {
  const ByUserId = await Product.findAll({
    where: { userId: userId },
    include: [{ model: User }, { model: Category }],
  });

  return ByUserId;
};

exports.save = async (product) => {
  return await Product.create(product);
};

exports.update = async (product, ids) => {
  return await Product.update(product, { where: { id: ids } });
};

exports.delete = async (product) => {
  product.destroy();
};
