import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

//create product
router.post('/create-product', productController.createProduct);

//get all products
router.get('/', productController.getAllProducts);

//find one product

router.get('/:productId', productController.getSingleProduct);

export const ProductRouter = router;
