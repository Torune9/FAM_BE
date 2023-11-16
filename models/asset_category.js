'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Asset,MD_Asset}) {
      this.hasMany(Asset,{
        foreignKey  : 'category_code',
        sourceKey : 'category_code'
      })
      this.hasMany(MD_Asset,{
        foreignKey  : 'category_code',
        sourceKey : 'category_code'
      })
    }
  }
  Asset_Category.init({
    category_name: DataTypes.STRING,
    category_code: DataTypes.STRING,
    is_deleted : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Asset_Category',
  });
  return Asset_Category;
};