'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('status_categories', [
    {
      status : 'Good',
      status_code : 'STC01',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Maintenance Required',
      status_code : 'STC02',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Repairs Needed',
      status_code : 'STC03',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Damaged',
      status_code : 'STC04',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Unsafe',
      status_code : 'STC05',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Inspection in Progress',
      status_code : 'STC06',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Inaccessible',
      status_code : 'STC07',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Retired',
      status_code : 'STC08',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Not Inspected',
      status_code : 'STC09',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Defective',
      status_code : 'STC010',
      createdAt : new Date(),
      updatedAt : new Date()
    }
      ]
        );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('status_categories', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
