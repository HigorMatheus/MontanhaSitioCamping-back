import { IUserModel } from '@/domain/model/user-model';
import { ICreateUser, ICreateUserParams } from '@/domain/useCase/createUser';
import { prismaClient } from '@/main/adaptes/prisma';
import AppError from '@/main/error';

export class CreateUserService implements ICreateUser {
  public async create({
    email,
    name,
    password,
  }: ICreateUserParams): Promise<IUserModel> {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });

    if (user?.id) {
      throw new AppError('User already exists');
    }

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return {
      email: newUser.email,
      id: newUser.id,
      name: newUser.name,
    };
  }
}
