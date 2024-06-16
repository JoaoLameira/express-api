import router from '~/router';
import { protect } from '~/middlewares/auth';
import { Request, Response } from 'express';
import app from '~/middlewares/global'; //import app with global middlewares
import { createNewUser, signin } from '~/handlers/user';

//Homepage
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: '<h1>{TS-NODE-EXPRESS}</h1>' });
});

//Health Check
app.get('/health-check', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

//Create new user
app.post('/user', createNewUser);

//SignIn
app.post('/signin', signin);

//Mounts the router with 'api' attached -> /api/product'
app.use('/api', protect, router);

export default app;
