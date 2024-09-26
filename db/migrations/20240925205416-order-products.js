'use strict';

const { OrderProductsSchema, ORDER_PRODUCT_TABLE  } = require('../models/orders-products.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductsSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE, OrderProductsSchema)
  }
};
