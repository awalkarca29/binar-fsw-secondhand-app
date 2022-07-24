"use strict";

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
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Fashions",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Electronics",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spareparts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Furnitures",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Others",
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
