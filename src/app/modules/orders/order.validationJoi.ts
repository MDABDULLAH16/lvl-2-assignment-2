import Joi from 'joi';
import { Order } from './order.interface';

export const orderValidationSchema = Joi.object<Order>({
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is Required',
  }),
  productId: Joi.string().required().messages({
    'any.required': 'ProductId is Required',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is Required',
  }),
  quantity: Joi.number().required().messages({
    'any.required': 'Quantity is Required',
  }),
});
