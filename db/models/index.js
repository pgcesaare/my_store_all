const { User, UserSchema } = require('./user.model')
const { Products, ProductsSchema } = require('./products.model')
const { Customer, CustomerSchema } = require('./customer.model');
const { Category, CategorySchema } = require('./category.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProducts, OrderProductsSchema} = require('./orders-products.model')

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Order.init(OrderSchema,Order.config(sequelize));
    OrderProducts.init(OrderProductsSchema, OrderProducts.config(sequelize));

    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Category.associate(sequelize.models);
    Products.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = setupModels;