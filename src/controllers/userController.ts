import { Request, Response } from 'express';

import { CreateUserService } from '@/services/createUserService';

const createUser = new CreateUserService();

export class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;

    const user = await createUser.create({ email, name, password });
    return res.json({ user });
  }
}
