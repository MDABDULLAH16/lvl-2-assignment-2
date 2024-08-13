import mongoose, { Schema, model } from 'mongoose';
import { Order } from './order.interface';

export const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
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

export const orderModel = model<Order>('Order', orderSchema);
