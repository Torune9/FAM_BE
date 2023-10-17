'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'rahman',
      password: '123',
      email: 'example@example.com',
      role_id : 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'rangga',
      password: '123',
      email: 'example@example.com',
      role_id : 'AUDITHOR',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
