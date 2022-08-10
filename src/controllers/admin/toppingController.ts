import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllToppings = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const toppings = await db.collection('toppings').find({}).toArray();
  res.json(toppings);
}

export const updateTopping = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  const topping = await db.collection('toppings').findOne({_id: new ObjectId((req.params.id))});

  if (!topping) {
    res.status(404);
    next(new Error('topping not found'));
  }

  res.json(topping);
}

export const createTopping = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const topping = await db.collection('toppings').insertOne(req.body);
  res.json(topping);
}

export const deleteTopping = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const topping = await db.collection('toppings').deleteOne({_id: new ObjectId((req.params.id))});
  res.json(topping);
}
