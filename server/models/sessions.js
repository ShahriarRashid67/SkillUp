'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sessions.init(
    {
      studentID: DataTypes.UUID,
      mentorID: DataTypes.UUID,
      mentorStatus: DataTypes.STRING,
      paymentStatus: DataTypes.STRING,
      roomID: DataTypes.STRING,
      day: DataTypes.DATE,
      time: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'sessions',
    }
  );
  return sessions;
};
