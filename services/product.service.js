const boom = require('@hapi/boom');
const { Op }= require('sequelize');
const { models } = require('./../libs/sequelize')

class ProductsService {

  constructor(){}

  async create(data) {
    const newProduct = await models.Products.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if ( limit && offset ){ 
      options.limit = limit,
      options.offset = offset
    }

    const { price } = query;
    if (price) {
      options.where.price = price;
    }

    const { price_min, price_max } = query;

    if (price_min && price_max){
      
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      };
    }

    const rta = await models.Products.findAll(options);
    return rta;
  }

  async findOne(id) {
    const product = await models.Products.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
