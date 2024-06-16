import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!bearer) {
    res.status(401);
    res.send('Not authorized 1');
    return;
  }

  const [, token] = bearer.split(' ');
  if (!token) {
    console.log('here');
    res.status(401);
    res.send('Not authorized 2');
    return;
  }

  try {
    if (!JWT_SECRET) return;
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send('Not authorized 3');
    return;
  }
};
