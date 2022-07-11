const express = require("express");
const app = express.Router();
const port = 3000;

const {
  getNotification,
  createNewBargainApi,
} = require("../controller/notification.controller");

// app.get(
//   "/api/v1/user/:userId/:productId/:bargainId/notification/",
//   notification
// );
app.get("/api/v1/user/:userId/notification/", getNotification);
app.post("/api/v1/product/:productId/detail", createNewBargainApi);

// app.get("/api/v1/user/:userId/notification/", notifSeller);
// app.get("/api/v1/user/:userId/notification/", notifBuyer);

module.exports = app;
