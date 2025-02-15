'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attachments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attachmentId : {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      asset_code: {
        type: Sequelize.STRING,
      },
      status : {
        type : Sequelize.STRING
      },
      inspector: {
        type: Sequelize.STRING
      },
      attachments : {
        type : Sequelize.ARRAY(Sequelize.STRING),
        allowNull : true
      },
      information :{
        type : Sequelize.STRING,
        allowNull : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Attachments');
  }
};