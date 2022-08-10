import express, { Router } from 'express';
import { Request, Response } from 'express';
import { getAllSizes, createSize, updateSize, deleteSize } from '../../controllers/admin/sizeController';

const router: Router = express.Router();

router.route('/').get(getAllSizes).post(createSize);

router.route('/:id').put(updateSize).delete(deleteSize);

export default router;