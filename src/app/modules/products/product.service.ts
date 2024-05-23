import { Product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

export const productService = {
  createProductIntoDB,
};
