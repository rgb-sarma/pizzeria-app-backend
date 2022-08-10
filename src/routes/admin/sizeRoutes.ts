import express, { Router } from 'express';
import { Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.json('Get Sizes');
})

router.post('/', (req: Request, res: Response): void => {
  res.json('Create Size');
})

router.put('/:id', (req: Request, res: Response): void => {
  res.json(`Update Size ${req.params.id}`);
})

router.delete('/:id', (req: Request, res: Response): void => {
  res.json(`Delete Size ${req.params.id}`);
})

export default router;