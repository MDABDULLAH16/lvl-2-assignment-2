import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/create-product', productController.createProduct);

// router.get('/', productController.getAllProducts);

//find one product

// router.get('/:productId', productController.getSingleProduct);

export const ProductRouter = router;
