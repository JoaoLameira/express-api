import { Router, Request, Response } from 'express';
import { customMiddleware } from '~/middlewares/custom';
import { handleValidationErrors } from '~/middlewares/inputs';
import {
  validateName,
  validatePutUpdate,
  validatePostUpdate,
  validatePostUpdatePoint,
  validatePutUpdatePoint,
} from '~/modules/validations';

const router = Router();

/*Product*/
router.get('/product', customMiddleware, (req: Request, res: Response) => {
  res.json({
    message: 'hello',
  });
});
router.get('/product/:id', (req: Request, res: Response) => {});
router.put('/product/:id', validateName, handleValidationErrors, (req: Request, res: Response) => {});
router.post('/product', validateName, handleValidationErrors, (req: Request, res: Response) => {});
router.delete('/product/:id', (req: Request, res: Response) => {});

/*Update*/
router.get('/update', (req: Request, res: Response) => {});
router.get('/update/:id', (req: Request, res: Response) => {});
router.put('/update/:id', validatePutUpdate, handleValidationErrors, (req: Request, res: Response) => {});
router.post('/update', validatePostUpdate, handleValidationErrors, (req: Request, res: Response) => {});
router.delete('/update/:id', (req: Request, res: Response) => {});

/*Update point*/
router.get('/updatepoint', (req: Request, res: Response) => {});
router.get('/updatepoint/:id', (req: Request, res: Response) => {});
router.put('/updatepoint/:id', validatePutUpdatePoint, handleValidationErrors, (req: Request, res: Response) => {});
router.post('/updatepoint', validatePostUpdatePoint, handleValidationErrors, (req: Request, res: Response) => {});
router.delete('/updatepoint/:id', (req: Request, res: Response) => {});

export default router;
