import express, { Router } from 'express';
import { Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.json('Get Toppings');
})

router.post('/', (req: Request, res: Response): void => {
  res.json('Create Topping');
})

router.put('/:id', (req: Request, res: Response): void => {
  res.json(`Update Topping ${req.params.id}`);
})

router.delete('/:id', (req: Request, res: Response): void => {
  res.json(`Delete Topping ${req.params.id}`);
})

export default router;