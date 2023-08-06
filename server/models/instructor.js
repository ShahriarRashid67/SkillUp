'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  instructor.init(
    {
      status: DataTypes.STRING,
      hourRate: DataTypes.INTEGER,
      noSession: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      linkedin: DataTypes.STRING,
      github: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'instructor',
    }
  );
  return instructor;
};
