import { User } from '.prisma/client';

import { ICreateUser } from '../useCase/createUser';

export interface IUserRepository {
  create(props: ICreateUser.Params): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
