import express, { Router } from 'express';
import { Request, Response } from 'express';
import { getAllAlergens, updateAlergen, createAlergen, deleteAlergen } from '../../controllers/admin/alergenController';
import { verifyId } from '../../middleware/handlers';

const router: Router = express.Router();

router.use('/:id' , verifyId);

router.route('/').get(getAllAlergens).post(createAlergen);

router.route('/:id').delete(deleteAlergen).put(updateAlergen);

export default router;