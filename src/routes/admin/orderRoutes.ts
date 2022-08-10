import express, { Router } from 'express';
import { Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.json('Get Orders');
})

router.post('/', (req: Request, res: Response): void => {
  res.json('Create Order');
})

router.put('/:id', (req: Request, res: Response): void => {
  res.json(`Update Order ${req.params.id}`);
})

export default router;