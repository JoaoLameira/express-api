import prisma, { Prisma } from '~/db';
import { comparePasswords, createJWT, hashPassword } from '~/modules/auth';
import { Request, Response } from 'express';

export const createNewUser = async (req: Request, res: Response) => {
  const hash = await hashPassword(req.body.password);

  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hash,
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        res.status(400);
        res.send(`This ${e?.meta?.target} already exists!`);
        return;
      }
    }
  }
};

export const signin = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { username: req.body.username },
  });

  if (!user) {
    res.status(401);
    res.send('Invalid username');
    return;
  }

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send('Invalid password');
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
