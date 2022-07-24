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
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin1@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        name: "Admin1",
        address: "Jl. Jalan No. 1",
        city: "Malang",
        phone: "081234567890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin2@gmail.com",
        password: bcrypt.hashSync("654321", 10),
        name: "Admin2",
        address: "Jl. Kaki No. 2",
        city: "Makassar",
        phone: "089876543210",
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
