import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';

export function verifyId(req: Request, res: Response, next: Function): void {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400);
    next(new Error('Invalid id'));
  }

  next();
}

export function verifyJWT(req: Request, res: Response, next: Function): void {
  if (!req.headers.authorization) {
    res.status(401);
    next(new Error('Unauthorized'));
  }

  next();
}