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
    static associate({Asset}) {
      // define association here
     this.belongsTo(Asset,{
      foreignKey :'asset_code',
      targetKey : 'asset_code',
      as : 'asset'
     })
    }
  }
  History.init({
    asset_code: DataTypes.STRING,
    status: DataTypes.STRING,
    information : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};