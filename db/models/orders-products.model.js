const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./order.model')
const { PRODUCTS_TABLE } = require('./products.model');
const { allow } = require('joi');

const ORDER_PRODUCT_TABLE = 'orders_product';

const OrderProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    amount:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    orderId:{
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId:{
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCTS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }

}

class OrderProducts extends Model {

    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false
        }
    }
}

module.exports = { OrderProductsSchema, OrderProducts, ORDER_PRODUCT_TABLE}