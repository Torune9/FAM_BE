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
    static associate(models) {
      // define association here
    }
  }
  Asset_Category.init({
    Categories_Name: DataTypes.STRING,
    Category_Code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Asset_Category',
    deletedAt : 'destroyTime',
    paranoid : true
  });
  return Asset_Category;
};