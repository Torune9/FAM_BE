'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ('Asset_Categories', [{
      category_name: 'Kendaraan',
      category_code: 'C001',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category_name: 'Mesin',
      category_code: 'C002',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Hardware',
      category_code: 'C003',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Software',
      category_code: 'C004',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'Bangunan',
      category_code: 'C005',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_name: 'Hak Cipta',
      category_code: 'C006',
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
