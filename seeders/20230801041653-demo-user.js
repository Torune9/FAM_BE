'use strict';
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'rahman',
      password: await bcrypt.hash('123',10),
      email: 'example1@example.com',
      role_id : 'ADMIN',
      active : true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'rangga',
      password: await bcrypt.hash('123',10),
      email: 'example2@example.com',
      role_id : 'SYSADMIN',
      active : true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'kevin',
      password: await bcrypt.hash('123',10),
      email: 'example3@example.com',
      role_id : 'AUDITHOR',
      active : true,
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
