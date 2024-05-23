import { Product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};
//get all products from db
const getAllProductsFromDb = async () => {
  const result = await productModel.find();
  return result;
};

//get single product from db
const getSingleProductFromDB = async (_id: string) => {
  const result = await productModel.findOne({ _id });
  return result;
};

const deleteOneProductFromDB = async (_id: string) => {
  const result = await productModel.deleteOne({ _id });
  return result;
};
export const productService = {
  createProductIntoDB,
  getAllProductsFromDb,
  getSingleProductFromDB,
  deleteOneProductFromDB,
};
