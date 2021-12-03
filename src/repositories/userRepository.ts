import { User } from '.prisma/client';

import { IUserRepository } from '@/domain/repositories/userRepository';
import { ICreateUser } from '@/domain/useCase/createUser';
import { prismaClient } from '@/main/adaptes/prisma';

export class UserRepository implements IUserRepository {
  public async create({
    name,
    email,
    password,
  }: ICreateUser.Params): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
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
