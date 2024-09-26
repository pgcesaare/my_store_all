'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');
const { ProductsSchema, PRODUCTS_TABLE } = require('../models/products.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.dropTable(PRODUCTS_TABLE, ProductsSchema)
  }
};
