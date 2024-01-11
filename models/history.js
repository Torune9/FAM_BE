'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Asset,status_category,Attachment}) {
      // define association here
     this.belongsTo(Asset,{
      foreignKey :'attachmentId',
     })

     this.belongsTo(status_category,{
      foreignKey : 'status',
      targetKey : 'status'
     })
     
     this.belongsTo(Attachment,{
       foreignKey : 'attachmentId',
       targetKey : 'attachmentId'
      })
    }
  }
  History.init({
    asset_code: DataTypes.STRING,
    name : DataTypes.STRING,
    status: DataTypes.STRING,
    inspection_date :DataTypes.DATE,
    attachmentId : DataTypes.INTEGER,
    statusCode : DataTypes.STRING,
    information : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};