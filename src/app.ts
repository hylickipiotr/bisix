import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import 'reflect-metadata';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import SystemController from './controllers/SystemController';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
useContainer(Container);

useExpressServer(app, {
  controllers: [SystemController],
});

export default app;
