import express from 'express';
import { orderController } from './order.controller';
const router = express.Router();

//to create order
router.post('/', orderController.createOrderReq);

//to get All order from db

router.get('/', orderController.getOrders);
export const OrderRouter = router;
