import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'express-async-errors';
import './container';
import { routes } from '@/presentation/routes';

import { AppError, uploadConfig } from './config';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

process.on('SIGTERM', () => {
  process.exit();
});

app.listen(process.env.PORT, () => {
  console.log('server started');
});
