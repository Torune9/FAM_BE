'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Promise.all([
    queryInterface.addColumn('Users','reset_token',{
      type : Sequelize.STRING,
    }),
    queryInterface.addColumn('Users','exp_reset_token',{
      type : Sequelize.DATE,
    }),
   ])
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('Users','reset_token'),
      queryInterface.removeColumn('Users','exp_reset_token')
    ])
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
