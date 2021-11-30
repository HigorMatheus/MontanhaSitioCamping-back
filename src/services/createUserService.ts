import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@/domain/repositories/userRepository';
import { ICreateUser } from '@/domain/useCase/createUser';
import { prismaClient } from '@/main/adaptes/prisma';
import AppError from '@/main/error';

@injectable()
export class CreateUserService implements ICreateUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  public async create({
    email,
    name,
    password,
  }: ICreateUser.Params): Promise<ICreateUser.Model> {
    const user = await this.userRepository.findByEmail(email);

    if (user?.id) {
      throw new AppError('User already exists');
    }

    const userCreated = await this.userRepository.create({
      name,
      email,
      password,
    });

    return {
      email: userCreated.email,
      name: userCreated.name,
      id: userCreated.id,
    };
  }
}
