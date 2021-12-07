import { User } from '@/domain/model';

export interface ICreateUser {
  create: (params: ICreateUser.Params) => Promise<ICreateUser.Model>;
}

export namespace ICreateUser {
  export type Params = Omit<User, 'id'>;
  export type Model = {
    user: User;
    token: string;
  };
}
