'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SysAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SysAdmin.init({
    Username: DataTypes.STRING,
    RoleId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SysAdmin',
  });
  return SysAdmin;
};