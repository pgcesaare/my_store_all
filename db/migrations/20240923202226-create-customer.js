'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');
const { Sequelize } = require('sequelize')
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    phone:{
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
