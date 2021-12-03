import { User } from '.prisma/client';

export interface ICreateUser {
  create: (params: ICreateUser.Params) => Promise<User>;
}

export namespace ICreateUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };

  export type Model = User;
}
