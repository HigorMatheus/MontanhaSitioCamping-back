import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticationService } from '@/data/useCase/AuthenticationService';

export class AuthenticationController {
  public async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const createUser = container.resolve(AuthenticationService);
    const test = await createUser.auth({
      email,
      password,
    });
    return res.json(test);
  }
}
