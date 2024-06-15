import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

//logging
app.use(morgan('dev'));

//Allow a client to send us JSON
app.use(express.json());

//Allows a client to add a query string, parameters and decodes/encodes that properly
app.use(express.urlencoded({ extended: true }));

//CORS - by default allows access to every clients
app.use(cors());

app.use(helmet());

export default app;
