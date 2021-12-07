import { sign } from 'jsonwebtoken';

import { ITokenProvider } from '@/domain/providers';
import { authConfig } from '@/main/config/auth';

export class JsonWebTokenProvider implements ITokenProvider {
  public async generateToken(id?: string): Promise<string> {
    const { expiresIn, secret } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: id,
      expiresIn,
    });
    return token;
  }
}
