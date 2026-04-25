import Product from "../models/product.model.js";

export const createProductService = async (data) => {
  try {
    const product = await Product.create(data);
    return product;
  } catch (error) {
    return error.message;
  }
};

export const getAllProductsService = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    return error.message;
  }
};
