const bargainService = require("../service/bargain.service.js");

exports.getNotification = async (req, res) => {
  const bargain = await bargainService.findNotificationByUserId(
    req.params.userId
  );
  res.json({
    data: bargain,
  });
};

exports.createNewBargainApi = async (req, res) => {
  // const token = req.headers.authorization.substring(
  //   7,
  //   req.headers.authorization.length
  // );
  // const decodedToken = await jwtUtil.decodeToken(token);
  // const user = await userRepository.findById(decodedToken.id);

  // const userId = user.id;
  const userId = 1;

  const bargain = await bargainService.createBargain(req, userId);

  res.status(201).json({ data: bargain });
};

// const db = require('../models');
// const Notif = db.notification;

// exports.createNotif = (req, res) => {
//     if (req.body === null) {
//         res.status(400).json({ message: "Body can't be null" });
//     }

//     const notif = {
//         id_user: req.body.id_user,
//         notification: req.body.notification,
//     };

//     Notif.create(notif).then(data => {
//         res.json(data);
//     });
// };

// exports.findNotifById = (req, res) => {
//     Notif.findByPk(req.params.id).then(result => {
//         if(result == null) {
//             res.status(404).json({error: 'Data not found'});
//         }
//         res.json({data: result});
//     });
// };
