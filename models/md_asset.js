'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MD_Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Asset_Category}) {
      this.belongsTo(Asset_Category,{
        foreignKey : 'category_code',
        targetKey : 'category_code'
      })
    }
  }
  MD_Asset.init({
    name: DataTypes.STRING,
    category_code: DataTypes.STRING,
    price : DataTypes.STRING,
    status: DataTypes.STRING,
    is_deleted : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MD_Asset',
  });
  return MD_Asset;
};