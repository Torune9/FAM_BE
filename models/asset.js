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
    static associate({History}) {
      this.hasMany(History,{
        foreignKey : 'asset_code',
        sourceKey : 'asset_code',
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
    category_code : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};