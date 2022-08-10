import express, { Router } from 'express';
import { Request, Response } from 'express';
import { createPizza, deletePizza, getAllPizzas, updatePizza } from '../../controllers/admin/pizzaController';
import { verifyId } from '../../middleware/handlers';

const router: Router = express.Router();
// router.use('/:id' , verifyId);

router.route('/').get(getAllPizzas).post(createPizza);

router.route('/:id').put(updatePizza).delete(deletePizza);

export default router;