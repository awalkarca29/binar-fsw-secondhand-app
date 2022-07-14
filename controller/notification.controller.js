const bargainService = require("../service/bargain.service.js");

exports.getNotification = async (req, res) => {
  const bargain = await bargainService.findNotificationByUserId(
    req.params.userId
  );
  res.json({
    data: bargain,
  });
};
