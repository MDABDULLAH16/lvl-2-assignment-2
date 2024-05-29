import { Request, Response } from 'express';
import { orderService } from './order.service';
import { orderValidationSchema } from './order.validationJoi';

const createOrderReq = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;

    const { error, value } = orderValidationSchema.validate(order);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something is wrong',
        error,
      });
    }
    const result = await orderService.createOrderIntoDB(value);

    //   return result;
    //will be response here
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      data: error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const result = await orderService.getOrderFromDB(email);
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
      message: 'Something is Wrong',
      error: error,
    });
  }
};

export const orderController = {
  createOrderReq,
  getOrders,
};
