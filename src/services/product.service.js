import Product from "../models/product.model.js";
import { Op } from "sequelize";
export const createProductService = async (data) => {
  try {
    const product = await Product.create(data);
    return product;
  } catch (error) {
    return error.message;
  }
};

export const getAllProductsService = async (query) => {
  try {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const offset = (page - 1) * limit; // skip the first (page-1)*limit records

    const where = {};
    if (query.minPrice && query.minPrice) {
      where.price = {
        [Op.between]: [query.minPrice, query.minPrice],
      };
    }
    const products = await Product.findAndCountAll({
      where,
      limit,
      offset,
    });
    return {
      total: products.count,
      page: page,
      totalPages: Math.ceil(products.count / limit),
      products: products.rows,
    };
  } catch (error) {
    return error.message;
  }
};
