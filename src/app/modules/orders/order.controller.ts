import { Request, Response } from 'express';
import { orderService } from './order.service';

import { orderValidationSchema } from './order.validationJoi';
import { productService } from '../products/product.service';
// import { orderValidationSchema } from './order.validationJoi';
const createOrderReq = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const productId = order.productId;
    const orderedQuantity = order.quantity;

    // Fetch the product details from the database
    const productResult =
      await productService.getSingleProductFromDB(productId);

    if (!productResult) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    const availableQuantity = productResult.inventory.quantity;

    // Check if the ordered quantity exceeds available quantity
    if (orderedQuantity > availableQuantity) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    // Update the inventory quantity and inStock status
    const updatedQuantity = availableQuantity - orderedQuantity;
    const updatedInStock = updatedQuantity > 0;

    // Update the product in the database
    await productService.updateProductInventory(productId, {
      quantity: updatedQuantity,
      inStock: updatedInStock,
    });

    // Validate the order data
    const { error, value } = orderValidationSchema.validate(order);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error,
      });
    }

    // Create the order in the database
    const result = await orderService.createOrderIntoDB(value);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const getOrders = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const result = await orderService.getOrderFromDB(email as string);
    res.status(200).json({
      success: true,
      message: email
        ? `Order matching search term '${email}' fetched successfully!`
        : 'Order fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Order not found',
      error: error,
    });
  }
};

export const orderController = {
  createOrderReq,
  getOrders,
};
