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
      foreignKey :'asset_code',
      targetKey : 'asset_code'
     })

     this.hasOne(status_category,{
      foreignKey : 'status',
      sourceKey : 'status',
      as : 'status category'
     })
     
     this.hasOne(Attachment,{
       foreignKey : 'asset_code',
       sourceKey : 'asset_code',
       as : 'attachment'
      })
    }
  }
  History.init({
    asset_code: DataTypes.STRING,
    name : DataTypes.STRING,
    status: DataTypes.STRING,
    information : DataTypes.STRING,
    inspection_date :DataTypes.DATE
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};