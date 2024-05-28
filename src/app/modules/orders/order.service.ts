import { Order } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};

const getOrderFromDB = async () => {
  const result = await orderModel.find();
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getOrderFromDB,
};
