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
      this.belongsTo(models.User, { foreignKey: "buyerId" });
      this.belongsTo(models.User, { foreignKey: "sellerId" });
      this.belongsTo(models.Product, { foreignKey: "productId" });
      this.belongsTo(models.Status, { foreignKey: "statusId" });
    }
  }
  Bargain.init(
    {
      price: DataTypes.INTEGER,
      isRead: DataTypes.BOOLEAN,
      buyerId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bargain",
    }
  );
  return Bargain;
};
