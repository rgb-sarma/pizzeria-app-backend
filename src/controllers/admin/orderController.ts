import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const orders = await db.collection('order').find({}).toArray();
  res.json(orders);
}

export const updateOrder = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  const order = await db.collection('order').findOne({_id: new ObjectId((req.params.id))});

  if (!order) {
    res.status(404);
    next(new Error('order not found'));
  }

  res.json(order);
}

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const order = await db.collection('order').insertOne(req.body);
  res.json(order);
}

// export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
//   const db = await run();
//   const order = await db.collection('order').deleteOne({_id: new ObjectId((req.params.id))});
//   res.json(order);
// }
