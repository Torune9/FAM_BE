'use strict';
const {
  Model,DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.STRING,
    active : DataTypes.BOOLEAN,
    reset_token : DataTypes.STRING,
    img : DataTypes.STRING,
    exp_reset_token : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};




