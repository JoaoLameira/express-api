import jwt from 'jsonwebtoken';
import { CreateJWT } from '~/types/auth';
import * as bcrypt from 'bcrypt';

export const createJWT = ({ id, username }: CreateJWT) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) return;

  const token = jwt.sign({ id, username }, JWT_SECRET);
  return token;
};

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};
