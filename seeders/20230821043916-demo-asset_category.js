'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ('Asset_Categories', [{
      Categories_Name: 'Kendaraan',
      Category_Code: 'C001',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Categories_Name: 'Mesin',
      Category_Code: 'C002',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Categories_Name: 'Hardware',
      Category_Code: 'C003',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Categories_Name: 'Software',
      Category_Code: 'C004',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Categories_Name: 'Bangunan',
      Category_Code: 'C005',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      Categories_Name: 'Hak Cipta',
      Category_Code: 'C006',
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
