const bargainService = require("../service/bargain.service.js");
const jwtUtil = require("../util/jwt.util.js");
const userRepository = require("../repository/user.repository.js");

exports.findNotificationByUserIdBargained = async (req, res) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  const bargain = await bargainService.findNotificationByUserIdSeller(user.id);

  if (bargain == null) {
    res
      .status(404)
      .json({ error: `Transaction not found with userId : ${user.id}` });
  } else {
    res.json({ data: bargain });
  }
};

exports.findNotificationByUserIdAccepted = async (req, res) => {
  const token = req.headers.authorization.substring(
    7,
    req.headers.authorization.length
  );
  const decodedToken = await jwtUtil.decodeToken(token);
  const user = await userRepository.findById(decodedToken.id);

  const bargain = await bargainService.findNotificationByUserIdBuyer(user.id);

  if (bargain == null) {
    res
      .status(404)
      .json({ error: `Transaction not found with userId : ${user.id}` });
  } else {
    res.json({ data: bargain });
  }
};
