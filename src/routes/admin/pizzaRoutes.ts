import express, { Router } from 'express';
import { Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.json('Get Pizzas');
})

router.post('/', (req: Request, res: Response): void => {
  res.json('Create Pizza');
})

router.put('/:id', (req: Request, res: Response): void => {
  res.json(`Update Pizza ${req.params.id}`);
})

router.delete('/:id', (req: Request, res: Response): void => {
  res.json(`Delete Pizza ${req.params.id}`);
})

export default router;