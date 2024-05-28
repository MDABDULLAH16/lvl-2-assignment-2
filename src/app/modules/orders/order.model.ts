import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

export const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  productId: {
    type: String,
    required: [true, 'ProductId is Required '],
  },
  price: {
    type: Number,
    // required: [true, 'Price is Required'],
  },
  quantity: {
    type: Number,
    // required: [true, 'Quantity is Required'],
  },
});

export const orderModel = model<Order>('order', orderSchema);
