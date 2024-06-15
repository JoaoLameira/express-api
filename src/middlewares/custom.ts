import { Request, Response, NextFunction } from 'express';

export const customMiddlewareWithVar = (message: string) => (req: Request, res: Response, next: NextFunction) => {
  console.log(`Hello I'm a custom middleware: ${message}`);
  next();
};

export const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hello I'm a custom middleware");
  next();
};
