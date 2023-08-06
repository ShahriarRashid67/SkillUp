'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sessions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      studentID: {
        type: Sequelize.UUID,
      },
      mentorID: {
        type: Sequelize.UUID,
      },
      mentorStatus: {
        type: Sequelize.STRING,
      },
      paymentStatus: {
        type: Sequelize.STRING,
      },
      roomID: {
        type: Sequelize.STRING,
      },
      day: {
        type: Sequelize.DATE,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      massage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sessions');
  },
};
