import { Types } from 'mongoose';

export interface Order {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
}
