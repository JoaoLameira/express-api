import router from './router';
import { Request, Response } from 'express';
import app from './middlewares/global'; //import app with global middlewares

app.get('/', (req, res) => {
  res.status(200).json({ message: '<h1>{TS-NODE-EXPRESS}</h1>' });
});

//Health Check
app.get('/health-check', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

//Mounts the router with 'api' attached -> /api/product'
app.use('/api', router);

export default app;
