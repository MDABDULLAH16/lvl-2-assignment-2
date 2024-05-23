import { Product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};
//get all products

const getAllProductsFromDb = async () => {
  const result = await productModel.find();
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductsFromDb,
};
