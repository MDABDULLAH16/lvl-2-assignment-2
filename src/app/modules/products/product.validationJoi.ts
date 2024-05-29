import Joi from 'joi';
import { Product, Variant } from './product.interface';

const variantJoiSchema = Joi.object<Variant>({
  type: Joi.string().required().messages({
    'any.required': 'Type is required',
    'string.empty': 'Type cannot be empty',
  }),
  value: Joi.string().required().messages({
    'any.required': 'Value is required',
    'string.empty': 'Value cannot be empty',
  }),
});

const productJoiSchema = Joi.object<Product>({
  name: Joi.string().trim().required().messages({
    'any.required': 'Name is required.',
    'string.empty': 'Name cannot be empty',
  }),
  description: Joi.string().required().messages({
    'any.required': 'Description is required',
    'string.empty': 'Description cannot be empty',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
  category: Joi.string().optional().allow('').messages({
    'string.empty': 'Category cannot be empty',
  }),
  tags: Joi.array().items(Joi.string()).required().messages({
    'any.required': 'Tags are required',
    'array.base': 'Tags must be an array of strings',
  }),
  variants: Joi.array().items(variantJoiSchema).required().messages({
    'any.required': 'Variants are required',
    'array.base': 'Variants must be an array',
  }),
  inventory: Joi.object({
    quantity: Joi.number().optional().messages({
      'number.base': 'Quantity must be a number',
    }),
    inStock: Joi.boolean().optional().messages({
      'boolean.base': 'InStock must be a boolean',
    }),
  }).optional(),
});

export default productJoiSchema;
