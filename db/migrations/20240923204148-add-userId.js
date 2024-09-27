'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');
const { USER_TABLE } = require('./user.model')
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(CUSTOMER_TABLE, 'user_id', {
      userId:{
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeColumn(CUSTOMER_TABLE, 'user_id', CustomerSchema.userId);
  }
};
