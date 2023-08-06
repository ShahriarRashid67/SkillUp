'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [
      queryInterface.addColumn('instructors', 'linkedin', {
        type: DataTypes.STRING,
      }),
      queryInterface.addColumn('instructors', 'github', {
        type: DataTypes.STRING,
      }),
      queryInterface.addColumn('instructors', 'title', {
        type: DataTypes.STRING,
      }),
      queryInterface.addColumn('instructors', 'description', {
        type: DataTypes.STRING,
      }),
    ];
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return [
      queryInterface.removeColumn('instructors', 'linkedin'),
      queryInterface.removeColumn('instructors', 'github'),
      queryInterface.removeColumn('instructors', 'title'),
      queryInterface.removeColumn('instructors', 'description'),
    ];
  },
};
