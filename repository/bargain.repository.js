const db = require("../models/index.js");
const Product = db.product;
const Bargain = db.bargain;
const User = db.user;
const Status = db.status;

exports.findByUserIdSeller = async (id) => {
  const ByUserId = await Bargain.findAll({
    where: {
      sellerId: id,
      statusId: 1,
    },
    include: [{ model: Product }, { model: User }, { model: Status }],
  });

  return ByUserId;
};

exports.findByUserIdBuyer = async (id) => {
  const ByUserId = await Bargain.findAll({
    where: {
      buyerId: id,
      statusId: 2,
    },
    include: [{ model: Product }, { model: User }, { model: Status }],
  });

  return ByUserId;
};

exports.findByUserIdSold = async (id) => {
  const ByUserId = await Bargain.findAll({
    where: {
      buyerId: id,
      statusId: 4,
    },
    include: [{ model: Product }, { model: User }, { model: Status }],
  });

  return ByUserId;
};

exports.save = async (bargain) => {
  return await Bargain.create(bargain);
};

exports.findAll = async () => {
  return await Bargain.findAll({
    include: [{ model: Product }, { model: User }, { model: Status }],
  });
};

exports.findById = async (id) => {
  return await Bargain.findByPk(id, {
    include: [{ model: User }, { model: Product }, { model: Status }],
  });
};

exports.findByProductId = async (id) => {
  return await Bargain.findAll({
    where: { productId: id },
    include: [{ model: User }, { model: Product }, { model: Status }],
  });
};

exports.update = async (product, id) => {
  return await Bargain.update(product, { where: { id: id } });
};
