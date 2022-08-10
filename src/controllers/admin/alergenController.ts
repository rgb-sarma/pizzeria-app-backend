import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllAlergens = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const alergens = await db.collection('alergen').find({}).toArray();
  res.json(alergens);
}

export const updateAlergen = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  const alergen = await db.collection('alergen').findOne({_id: new ObjectId((req.params.id))});

  if (!alergen) {
    res.status(404);
    next(new Error('alergen not found'));
  }

  res.json(alergen);
}

export const createAlergen = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const alergen = await db.collection('alergen').insertOne(req.body);
  res.json(alergen);
}

export const deleteAlergen = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const alergen = await db.collection('alergen').deleteOne({_id: new ObjectId((req.params.id))});
  res.json(alergen);
}
