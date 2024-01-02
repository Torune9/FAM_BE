'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({History,Asset_Category,Attachment}) {
      this.hasMany(History,{
        foreignKey : 'assetId',
      })

      this.belongsTo(Asset_Category,{
        foreignKey : 'asset_code',
        targetKey  :'category_code'
      })

      this.hasOne(Attachment,{
        foreignKey : 'attachmentId'
      })
    }
  }
  Asset.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    asset_code: DataTypes.STRING,
    status : DataTypes.STRING,
    created_by : DataTypes.STRING,
    is_deleted : DataTypes.BOOLEAN,
    category_code : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};