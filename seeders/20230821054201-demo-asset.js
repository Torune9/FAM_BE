'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ('Assets', [
    {
      name: 'Nissan Skyline R32',
      asset_code: 'C001',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nissan Skyline R33',
      asset_code: 'C001',
      quantity : 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nissan Skyline R34',
      asset_code: 'C001',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Acer Predator Helios 16',
      asset_code: 'C002',
      quantity : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lenovo Yoga Pro 7i',
      asset_code: 'C002',
      quantity : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Acer Predator Helios 16.',
      asset_code: 'C002',
      quantity : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'Mouse',
      asset_code: 'C003',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'Monitor',
      asset_code: 'C003',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'Smart Sheet',
      asset_code: 'C004',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'LibreOffice Calc',
      asset_code: 'C004',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'Smart Sheet',
      asset_code: 'C004',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'Rumah dua tingat',
      asset_code: 'C005',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'PT ABC',
      asset_code: 'C006',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      name: 'PT ABD',
      asset_code: 'C006',
      quantity : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      ],
        );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Asset_Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
