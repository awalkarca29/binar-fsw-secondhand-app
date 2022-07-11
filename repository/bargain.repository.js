const db = require("../models/index.js");
const Product = db.product;
const Bargain = db.bargain;

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
