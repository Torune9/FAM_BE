'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('status_categories', [
    {
      status : 'Good',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Maintenance Required',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Repairs Needed',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Damaged',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Unsafe',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Inspection in Progress',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Inaccessible',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Retired',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Not Inspected',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      status : 'Defective',
      createdAt : new Date(),
      updatedAt : new Date()
    }
      ]
        );
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
