'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Promise.all([
    queryInterface.addColumn('Histories','inspection_date',{
      type : Sequelize.DATE
    }),
    queryInterface.addColumn('Histories','name',{
      type : Sequelize.STRING
    }),
    queryInterface.addColumn('Histories','attachmentId',{
      type : Sequelize.INTEGER
    }),
    queryInterface.addColumn('Histories','statusCode',{
      type : Sequelize.STRING
    }),
    queryInterface.addColumn('Histories','inspector',{
      type : Sequelize.STRING
    }),
    queryInterface.addColumn('Histories','information',{
      type : Sequelize.STRING
    }),

   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
