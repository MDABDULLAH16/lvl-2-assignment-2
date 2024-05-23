import { Schema, model } from 'mongoose';
import { Product, Variant } from './product.interface';

export const variantSchema = new Schema<Variant>(
  {
    type: {
      type: String,
      required: [true, 'Type is required'],
    },
    value: {
      type: String,
      required: [true, 'Value is required'],
    },
  },
  { _id: false },
);
export const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    // required: [true, 'Category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'tags is required'],
  },
  variants: {
    type: [variantSchema],
    required: [true, 'Variants is required'],
  },
  inventory: {
    quantity: {
      type: Number,
    },
    inStock: {
      type: Boolean,
    },
  },
});

export const productModel = model<Product>('product', productSchema);
