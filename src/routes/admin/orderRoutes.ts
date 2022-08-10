import express, { Router } from 'express';
import { Request, Response } from 'express';
import { createOrder, getAllOrders, updateOrder } from '../../controllers/admin/orderController';

const router: Router = express.Router();

router.route('/').get(getAllOrders).post(createOrder);

router.put('/:id', updateOrder);

export default router;