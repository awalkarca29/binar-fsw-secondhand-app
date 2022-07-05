"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bargain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsTo(models.Product, { foreignKey: "productId" });
      this.hasOne(models.History, { foreignKey: "bargainId" });
      this.hasMany(models.Notification, { foreignKey: "bargainId" });
    }
  }
  Bargain.init(
    {
      price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bargain",
    }
  );
  return Bargain;
};
