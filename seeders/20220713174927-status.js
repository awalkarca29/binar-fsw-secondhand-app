"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Statuses", [
      {
        name: "Bargained",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Accepted",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rejected",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sold",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
