import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './app/modules/products/product.router';
import { OrderRouter } from './app/modules/orders/order.router';

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRouter);

app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
