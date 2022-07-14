'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Admin1',
        email: 'admin1@gmail.com',
        password: bcrypt.hashSync('111', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Admin2',
        email: 'admin2@gmail.com',
        password: bcrypt.hashSync('222', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
