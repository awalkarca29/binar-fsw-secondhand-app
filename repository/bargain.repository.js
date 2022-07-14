const db = require("../models/index.js");
const Product = db.product;
const Bargain = db.bargain;
const User = db.user;
const Status = db.status;

exports.findByUserId = async (id) => {
  const ByUserId = await Bargain.findAll({
    where: { userId: id },
    // include: {
    //   model: Bargain,
    //   required: true,
    include: {
      model: Product,
      required: true,
    },
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

exports.update = async (product, id) => {
  return await Bargain.update(product, { where: { id: id } });
};
