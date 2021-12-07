import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { authConfig } from '@/main/config';

import { AppError } from './error';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(' Token is missing', 401);
  }

  const [Bare, token] = authHeader.split(' ');

  if (Bare !== 'Bearer') {
    throw new AppError('Token invalid type', 401);
  }
  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}
