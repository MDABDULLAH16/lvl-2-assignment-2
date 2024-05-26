import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    //get request from any where
    const product = req.body.product;
    //get services data from createIntoDb & services
    const result = await productService.createProductIntoDB(product);
    //will be response here
    res.status(200).json({
      success: true,
      message: 'Product create successfully',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something is wrong',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductsFromDb();
    res.status(200).json({
      success: true,
      message: 'Get products successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something is wrong',
      error: error,
    });
  }
};

//get single data from db

const getSingleProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await productService.getSingleProductFromDB(productId);
  res.status(200).json({
    success: true,
    message: 'find the product successfully',
    data: result,
  });
};

const deleteOneProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await productService.deleteOneProductFromDB(productId);
  res.status(200).json({
    success: true,
    message: 'Product deleted successfully!',
    data: null,
  });
};

const updateQuantity = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  const result = await productService.updateQuantityOnInventory(productId);
  res.status(200).json({
    success: true,
    message: 'Quantity updated successfully!',
    data: result,
  });
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteOneProduct,
  updateQuantity,
};
