import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllPizzas = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const pizzas = await db.collection('pizza').find({}).toArray();
  res.json(pizzas);
}

export const updatePizza = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  const pizza = await db.collection('pizza').findOne({_id: new ObjectId((req.params.id))});

  if (!pizza) {
    res.status(404);
    next(new Error('Pizza not found'));
  }

  res.json(pizza);
}

export const createPizza = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const pizza = await db.collection('pizza').insertOne(req.body);
  res.json(pizza);
}

export const deletePizza = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const pizza = await db.collection('pizza').deleteOne({_id: new ObjectId((req.params.id))});
  res.json(pizza);
}
