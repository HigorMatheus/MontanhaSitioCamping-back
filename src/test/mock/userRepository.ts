import { randomUUID } from 'crypto';

import { User } from '.prisma/client';

import { IUserRepository } from '@/domain/repositories/userRepository';
import { ICreateUser } from '@/domain/useCase/createUser';

export class MockUserRepository implements IUserRepository {
  private users: User[] = [];

  public async create({
    name,
    email,
    password,
  }: ICreateUser.Params): Promise<User> {
    const user = { id: randomUUID(), name, email, password };
    this.users.push(user);

    return user;
  }
  public async findByEmail(email: string): Promise<User | null> {
    const userArray = this.users.filter((user) => user.email === email);

    const user = userArray.length > 0 ? userArray[0] : null;

    return user;
  }
}
