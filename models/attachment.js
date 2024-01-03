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
    static associate({History,Asset}) {
      this.hasMany(History,{
        foreignKey : 'attachmentId',
        sourceKey: 'attachmentId'
      })
      this.hasOne(Asset,{
        foreignKey : 'id'
      })
    }
  }
  Attachment.init({
    asset_code: DataTypes.STRING,
    inspector: DataTypes.STRING,
    attachments : DataTypes.ARRAY(DataTypes.STRING),
    information : DataTypes.STRING,
    attachmentId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};