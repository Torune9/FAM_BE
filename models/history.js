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
      foreignKey :'id'
     })

     this.belongsTo(status_category,{
      foreignKey : 'status',
      sourceKey : 'status'
     })
     
     this.hasMany(Attachment,{
       foreignKey : 'asset_code',
       sourceKey : 'asset_code',
       as : 'attachments'
      })
    }
  }
  History.init({
    assetId : DataTypes.INTEGER,
    asset_code: DataTypes.STRING,
    name : DataTypes.STRING,
    status: DataTypes.STRING,
    inspection_date :DataTypes.DATE,
    inspector : DataTypes.STRING,
    attachmentId : DataTypes.INTEGER,
    information : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};