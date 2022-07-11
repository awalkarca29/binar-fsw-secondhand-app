const bargainRepository = require("../repository/bargain.repository.js");

exports.findNotificationByUserId = async (id) => {
  return await bargainRepository.findByUserId(id);
};

exports.createBargain = async (payload, userId) => {
  console.log(`USER id detected is ${userId}`);

  const bargain = {
    price: payload.fields.price,
    status: payload.fields.status,
    notificationTime: payload.fields.notificationTime,
    isRead: payload.fields.isRead,
    userId: userId,
    productId: payload.fields.productId,
  };

  console.log(bargain);

  if (bargain != null) {
    return await bargainRepository.save(bargain);
  } else {
    return null;
  }
};
