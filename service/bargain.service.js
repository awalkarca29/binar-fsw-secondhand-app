const bargainRepository = require("../repository/bargain.repository.js");
const productRepository = require("../repository/product.repository.js");

exports.findNotificationByUserId = async (id) => {
  return await bargainRepository.findByUserId(id);
};

exports.createBargain = async (payload, userId) => {
  // console.log(`USER id detected is ${userId}`);

  const bargain = {
    price: payload.fields.price,
    // notificationTime: payload.fields.notificationTime,
    isRead: false,
    userId: userId,
    productId: payload.fields.productId,
    statusId: 1,
  };

  console.log(bargain);

  if (bargain != null) {
    return await bargainRepository.save(bargain);
  } else {
    return null;
  }
};

exports.findAllBargains = async () => {
  return await bargainRepository.findAll();
};

exports.updateStatusAccepted = async (payload, id) => {
  try {
    const bargain = {
      statusId: 2,
    };

    const bargainById = await bargainRepository.findById(id);

    if (bargainById == null) {
      return null;
    } else {
      return await bargainRepository.update(bargain, id);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.updateStatusRejected = async (payload, ids) => {
  try {
    const bargain = {
      statusId: 3,
    };

    const bargainById = await bargainRepository.findById(ids);

    if (bargainById == null) {
      return null;
    } else {
      return await bargainRepository.update(bargain, ids);
    }
  } catch (err) {
    console.error(err);
  }
};
