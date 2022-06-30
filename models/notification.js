"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Product, { foreignKey: "productId" });
      this.belongsTo(models.Bargain, { foreignKey: "bargainId" });
    }
  }
  Notification.init(
    {
      message: DataTypes.STRING,
      notificationTime: DataTypes.DATE,
      isRead: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      bargainId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
