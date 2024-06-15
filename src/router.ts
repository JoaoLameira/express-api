import { Router, Request, Response } from 'express';
import { customMiddleware } from './middlewares/custom';

const router = Router();

/*Product*/
router.get('/product', customMiddleware, (req: Request, res: Response) => {
  res.json({
    message: 'hello',
  });
});
router.get('/product/:id', (req: Request, res: Response) => {});
router.put('/product/:id', (req: Request, res: Response) => {});
router.post('/product', (req: Request, res: Response) => {});
router.delete('/product/:id', (req: Request, res: Response) => {});

/*Update*/
router.get('/update', (req: Request, res: Response) => {});
router.get('/update/:id', (req: Request, res: Response) => {});
router.put('/update/:id', (req: Request, res: Response) => {});
router.post('/update', (req: Request, res: Response) => {});
router.delete('/update/:id', (req: Request, res: Response) => {});

/*Update point*/
router.get('/updatepoint', (req: Request, res: Response) => {});
router.get('/updatepoint/:id', (req: Request, res: Response) => {});
router.put('/updatepoint/:id', (req: Request, res: Response) => {});
router.post('/updatepoint', (req: Request, res: Response) => {});
router.delete('/updatepoint/:id', (req: Request, res: Response) => {});

export default router;
