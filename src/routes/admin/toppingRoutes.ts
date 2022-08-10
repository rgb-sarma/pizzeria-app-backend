import express, { Router } from 'express';
import { Request, Response } from 'express';
import { createTopping, deleteTopping, getAllToppings, updateTopping } from '../../controllers/admin/toppingController';

const router: Router = express.Router();

router.route('/').get(getAllToppings).post(createTopping);

router.route('/:id').put(updateTopping).delete(deleteTopping);

export default router;