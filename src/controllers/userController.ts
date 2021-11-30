import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from '@/services/createUserService';

export class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.create({ email, name, password });
    return res.json({ user });
  }
}
