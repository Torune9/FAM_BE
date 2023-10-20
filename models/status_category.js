'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({History}) {
      // define association here
      this.hasMany(History,{
        foreignKey : 'status',
        sourceKey : 'status',
      })
    }
  }
  status_category.init({
    status: DataTypes.STRING,
    status_code : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'status_category',
  });
  return status_category;
};