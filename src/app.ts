import express from 'express';
// import { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import Pizza from './routes/admin/pizzaRoutes';
import Alergen from './routes/admin/alergenRoutes';
import Size from './routes/admin/sizeRoutes';
import Order from './routes/admin/orderRoutes';
import Topping from './routes/admin/toppingRoutes';
import { errorHandler } from './middleware/errorHandler';


if (!process.env.JWT_SECRET) {
  throw new Error('No secret defined!');
}

const port = process.env.PORT || 8000;
const app = express();

// app.get('/api', (req: Request, res: Response): void => {
//   res.send('Hello World');
// })

app.use('/api/admin/pizza', Pizza);
app.use('/api/admin/alergen', Alergen);
app.use('/api/admin/topping', Topping);
app.use('/api/admin/size', Size);
app.use('/api/admin/order', Order);

app.use(errorHandler)

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`);  
})