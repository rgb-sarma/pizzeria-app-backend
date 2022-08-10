import express, { Router } from 'express';
import { Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.json('Get Alergens');
})

router.post('/', (req: Request, res: Response): void => {
  res.json('Create Alergen');
})

router.delete('/:id', (req: Request, res: Response): void => {
  res.json(`Delete Alergen ${req.params.id}`);
})

export default router;