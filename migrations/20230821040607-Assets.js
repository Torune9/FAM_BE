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
    queryInterface.addConstraint('Asset_Categories',{
      fields : ['Category_Code'],
      type : 'unique'
    }),
    queryInterface.addConstraint('MD_Assets',{
      fields : ['name'],
      type : 'unique'
    }),
    // queryInterface.removeColumn('MD_Assets','is_deleted'),
    queryInterface.removeColumn('MD_Assets','quantity'),
    queryInterface.renameColumn('MD_Assets','asset_code','category_code'),
    
    queryInterface.renameColumn('Asset_Categories','name','category_name'),
    
    queryInterface.renameColumn('Asset_Categories','Category_Code','category_code'),
    
    queryInterface.addColumn('MD_Assets','price',{
      type : Sequelize.STRING,
    }),
    queryInterface.addColumn('Assets','price',{
      type : Sequelize.STRING,
    }),
    queryInterface.addColumn('Assets','is_deleted',{
      type : Sequelize.BOOLEAN,
    }),
    queryInterface.changeColumn('MD_Assets','status',{
      type : Sequelize.STRING
    }),
    queryInterface.addColumn('Asset_Categories','is_deleted',{
      type : Sequelize.BOOLEAN,
      defaultValue: false
    }),
  ])
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('Assets','fk_asset')
  }
};
