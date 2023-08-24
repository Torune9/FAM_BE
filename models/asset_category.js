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
    category_name: DataTypes.STRING,
    category_code: DataTypes.STRING,
    is_deleted : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Asset_Category',
    deletedAt : 'is_deleted',
    paranoid :true
  });
  return Asset_Category;
};