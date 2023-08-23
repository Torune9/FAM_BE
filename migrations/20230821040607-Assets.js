'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Promise.all([
    // queryInterface.addConstraint('Assets',{
    //   fields : ['asset_code'],
    //   name :'fk_asset',
    //   type : 'foreign key',
    //   references : {
    //     table : 'Asset_Categories',
    //     field : 'Category_Code'
    //   }
    // }),
    queryInterface.addConstraint('Asset_Categories',{
      fields : ['name'],
      type : 'unique'
    }),
    queryInterface.removeColumn('MD_Assets','is_deleted'),
    queryInterface.removeColumn('MD_Assets','quantity'),
    
    queryInterface.renameColumn('Asset_Categories','name','Categories_Name'),
    
    queryInterface.addColumn('MD_Assets','price',{
      type : Sequelize.STRING,
    }),
    queryInterface.addColumn('Assets','price',{
      type : Sequelize.STRING,
    }),
    queryInterface.addColumn('Assets','destroyTime',{
      type : Sequelize.DATE,
    }),
    queryInterface.changeColumn('MD_Assets','status',{
      type : Sequelize.STRING
    }),
    queryInterface.addColumn('Asset_Categories','destroyTime',{
      type : Sequelize.DATE,
    }),
  ])
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('Assets','fk_asset')
  }
};
