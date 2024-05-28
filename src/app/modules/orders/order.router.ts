import express from 'express';
import { orderController } from './order.controller';
const router = express.Router();

router.post('/', orderController.createOrderReq);
export const OrderRouter = router;
