const { Sequelize } = require('sequelize');
const { config } = require('./../config/config')
const  setupModels  = require('./../db/models');
const { required } = require('joi');

let URI = '';

if (config.isProd) {
  URI = config.dbUrlProd;
}
else {
    URI = config.dbUrlDev;
}

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : true
}

if (config.isProd) {
    options.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

const sequelize = new Sequelize(URI,options);

setupModels(sequelize);

module.exports = sequelize;