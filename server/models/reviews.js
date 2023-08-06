'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init(
    {
      details: DataTypes.STRING,
      studentID: DataTypes.UUID,
      mentorID: DataTypes.UUID,
      star: DataTypes.INTEGER,
      courseName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'reviews',
    }
  );
  return reviews;
};
