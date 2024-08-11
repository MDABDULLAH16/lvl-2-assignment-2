import { Order } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};

const getOrderFromDB = async (email: string) => {
  const query = email
    ? {
        $or: [{ email: { $regex: email, $options: 'i' } }],
      }
    : {};

  const result = await orderModel.find(query);
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getOrderFromDB,
};
