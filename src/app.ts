import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouter } from './app/modules/products/product.router';

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRouter);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
