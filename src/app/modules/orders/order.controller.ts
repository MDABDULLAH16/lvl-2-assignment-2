import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrderReq = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const result = await orderService.createOrderIntoDB(order);

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
  try {
    const result = await orderService.getOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something is wrong!',
      data: error,
    });
  }
};

export const orderController = {
  createOrderReq,
  getOrders,
};
