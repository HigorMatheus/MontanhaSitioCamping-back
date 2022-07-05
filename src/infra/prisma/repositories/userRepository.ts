import { User } from '.prisma/client';

import { IUserRepository } from '@/domain/repositories/userRepository';
import { ICreateUser } from '@/domain/useCases';
import { prismaClient } from '@/infra/prisma';

export class UserRepository implements IUserRepository {
  public async create({
    name,
    email,
    password,
  }: ICreateUser.Params): Promise<Omit<User, 'password'>> {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        password: false,
        email: true,
        id: true,
        name: true,
      },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}
