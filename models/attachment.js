'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({History}) {
      
    }
  }
  Attachment.init({
    asset_code: DataTypes.STRING,
    inspector: DataTypes.STRING,
    findings: DataTypes.STRING,
    file : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};