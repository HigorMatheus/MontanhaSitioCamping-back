import { sign } from 'jsonwebtoken';

import { authConfig } from '@/config/auth';
import { ITokenProvider } from '@/domain/providers';

export class JsonWebTokenProvider implements ITokenProvider {
  public generateToken(id?: string): string {
    const { expiresIn, secret } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: id,
      expiresIn,
    });
    return token;
  }
}
