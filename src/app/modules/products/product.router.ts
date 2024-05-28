import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

//create product
router.post('/create-product', productController.createProduct);

//get all products
router.get('/', productController.getAllProducts);

//find one product
router.get('/:productId', productController.getSingleProduct);

//delete one product
router.delete('/:productId', productController.deleteOneProduct);

router.put('/:productId', productController.updateQuantity);

// router.get('/api/products?searchTerm=iphone', productController.searchProduct);

export const ProductRouter = router;
