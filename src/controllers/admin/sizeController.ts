import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllSizes = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const sizes = await db.collection('size').find({}).toArray();
  res.json(sizes);
}

export const updateSize = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  const size = await db.collection('size').findOne({_id: new ObjectId((req.params.id))});

  if (!size) {
    res.status(404);
    next(new Error('size not found'));
  }

  res.json(size);
}

export const createSize = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const size = await db.collection('size').insertOne(req.body);
  res.json(size);
}

export const deleteSize = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const size = await db.collection('size').deleteOne({_id: new ObjectId((req.params.id))});
  res.json(size);
}
