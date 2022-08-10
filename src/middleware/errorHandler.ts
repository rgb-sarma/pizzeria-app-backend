import {Response, Request} from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: Function): void {
  const status: number = res.statusCode === 200 ? 500 : res.statusCode;
  const obj: any = {
    status,
    message: err.message,
  }

  if (process.env.NODE_ENV === 'development' && status === 500) {
    obj.stack = err.stack;
    console.error(err.stack);
  }

  res.status(status).send(obj);
}