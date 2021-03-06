import { randomUUID } from 'crypto';

import { User } from '.prisma/client';

import { IUserRepository } from '@/domain/repositories/userRepository';
import { ICreateUser } from '@/domain/useCases';

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
    const user = this.users.find((user) => user.email === email);

    return user || null;
  }
}
