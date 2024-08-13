import { Product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};
//get all products from db
const getAllProductsFromDb = async (searchValue: string) => {
  const query = searchValue
    ? {
        $or: [
          { name: { $regex: searchValue, $options: 'i' } },
          { description: { $regex: searchValue, $options: 'i' } },
          { category: { $regex: searchValue, $options: 'i' } },
        ],
      }
    : {};

  return await productModel.find(query);
};

//get single product from db
const getSingleProductFromDB = async (_id: string) => {
  const result = await productModel.findOne({ _id });
  return result;
};

//delete by _id
const deleteOneProductFromDB = async (_id: string) => {
  const result = await productModel.deleteOne({ _id });
  return result;
};

const updateQuantityOnInventory = async (_id: string) => {
  const product = (await productModel.findOne({ _id })) as Product;
  if (
    !product ||
    !product.inventory ||
    typeof product.inventory.quantity !== 'number'
  ) {
    throw new Error(
      'Product or inventory not found, or invalid inventory quantity.',
    );
  }
  const newQuantity = product.inventory.quantity - 1;

  const result = await productModel.updateOne(
    { _id },
    // for decrement quantity only
    // { $inc: { 'inventory.quantity': -1 } },
    { $set: { 'inventory.quantity': newQuantity } },
  );
  return result;
};
const updateProductInventory = async (
  productId: string,
  updateData: { quantity: number; inStock: boolean },
) => {
  return await productModel.findByIdAndUpdate(
    productId,
    {
      $set: {
        'inventory.quantity': updateData.quantity,
        'inventory.inStock': updateData.inStock,
      },
    },
    { new: true },
  );
};
export const productService = {
  createProductIntoDB,
  getAllProductsFromDb,
  getSingleProductFromDB,
  deleteOneProductFromDB,
  updateQuantityOnInventory,
  updateProductInventory,
  // productSearchByName,
};
