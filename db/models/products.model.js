const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model')
const PRODUCTS_TABLE = 'products';

const ProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId:{
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Products extends Model {
    static associate(models){
        this.belongsTo(models.Category, {
            as: 'category'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Products',
            timestamps: false
        }
    }
}

module.exports = { ProductsSchema, Products, PRODUCTS_TABLE}